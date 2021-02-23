import os, hashlib, base64, binascii, crypt, urllib.parse

# from .utils import get_client_ip

key = os.getenv("AUTH_KEY").encode("utf-8")


def decrypt(s, key):
    if not s or len(s) == 0:
        return ""

    s = urllib.parse.unquote_plus(s) + "==="
    ret = ""

    md5 = hashlib.md5()
    md5.update(key)
    digest = md5.digest()  # bytes
    i_bytes = base64.b64decode(s)
    length = len(i_bytes)
    ret = bytexor(i_bytes, digest, length)[:length]

    return ret


def bytexor(aByte, bByte, ilimit):
    c = ""
    for i in range(ilimit):
        c += chr(aByte[i] ^ bByte[i])
    return c


SUSER_ID = "H4eJ6tg%253D"
sid = "b4SO4NwvkA%253D%253DZ"
p_ = decrypt(SUSER_ID, key)
print(p_)
# d_sid = decrypt(sid, key)
# print(d_sid)
