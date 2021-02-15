"""
function decrypt_md5($msg,$key)
{
        $string="";
        $buffer="";
        $key2="";
        $msg = urldecode($msg);
        $msg = base64_decode($msg);
        while($msg)
        {
                $key2=pack("H*",md5($key.$key2.$buffer));
                $dec_limit=strlen(substr($msg,0,16));
                $buffer=bytexor(substr($msg,0,16),$key2,$dec_limit);
                $string.=$buffer;
                $msg=substr($msg,16);
        }
        return($string);
}

function convert_crypt($id) {

  $salt = "chEkchsUm";

  return md5(crypt($id,$salt));

}
function convert_crypt($id) {
  return md5(crypt($id,$salt));
}
"""

import os, hashlib, base64, binascii, crypt
from urllib.parse import unquote
from .utils import get_client_ip

key = os.getenv("AUTH_KEY")
salt = os.getenv("SALT")


def decrypt_md5(msg, key):
    string = ""
    buff = ""
    key2 = ""
    msg = unquote(msg)
    msg = base64.b64decode(msg)
    while msg:
        key2 = binascii.unhexlify(hashlib.md5(key + key2 + buff))
        dec_limit = len(msg[:16])
        buff = bytexor(msg[:16], key2, dec_limit)
        string += buff
        msg = msg[:16]

    return string


def decrypt(string, key):
    if not string or len(string) == 0:
        return ""
    string = unquote(string=string)
    resultStr = ""
    try:
        md5 = hashlib.md5()
        md5.update(key)
        digest = md5.digest()
        inputBytes = base64.b64decode(string)
        decLimit = len(inputBytes)
        resultStr = bytexor(inputBytes, digest, decLimit)[:decLimit]
    except Exception as e:
        raise e
    return string


def bytexor(aByte, bByte, ilimit):
    c = ""

    try:
        for i in range(ilimit):
            c = c + str(ord(aByte[i]) ^ ord(bByte[i]))
    except:
        pass
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