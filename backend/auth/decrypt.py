import os, hashlib, base64, binascii, crypt, urllib.parse

# from .utils import get_client_ip

key = os.getenv("AUTH_KEY").encode("utf-8")
salt = os.getenv("SALT")


def decrypt_md5(msg):
    string = ""
    buff = ""
    key2 = ""
    msg = urllib.parse.unquote_plus(msg)
    msg = base64.b64decode(msg)
    global key

    while msg:
        key2 = binascii.unhexlify(hashlib.md5(key + key2 + buff))
        dec_limit = len(msg[:16])
        buff = bytexor(msg[:16], key2, dec_limit)
        string += buff
        msg = msg[:16]

    return string


def decrypt(s, key):
    if not s or len(s) == 0:
        return ""

    s = urllib.parse.unquote_plus(s)
    s += "=" * (len(s) % 4)
    ret = ""

    md5 = hashlib.md5()
    md5.update(key.encode("utf-8"))
    digest = md5.digest()  # bytes
    i_bytes = base64.b64decode(s.encode())
    length = len(i_bytes)
    ret = bytexor(i_bytes, digest, length)[:length]

    return ret


def bytexor(aByte, bByte, ilimit):
    c = ""
    for i in range(ilimit):
        c += chr(aByte[i] ^ bByte[i])
    return c


def convert_crypt(r_id):
    salt = "chEkchsUm"
    return hashlib.md5(crypt.crypt(r_id, salt))


def check_auth(request):  # login
    cookies = request.cookies
    get_userid = decrypt(cookies["SUSER_ID"], key)
    get_suser_id = cookies["SUSER_AUTH"]

    if not get_userid or not get_suser_id:
        return False

    real_suser_id = convert_crypt(get_userid)

    return get_userid == real_suser_id


def check_authkey(request):  # authkey가 유효한지 확인하는 함수
    get_userid = decrypt_md5(request.cookies["SUSER_ID"], key)
    get_authkey = request.cookies["SUSER_AUTHKEY"]
    remote_ip = get_client_ip(request)
    sha_str = hashlib.sha1(get_userid + remote_ip)

    return sha_str == get_authkey
