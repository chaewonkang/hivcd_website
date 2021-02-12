
"""
String decrypt(String str, String key) {

        if(str == null || str.length() == 0) {
                return "";
        }

        str = URLDecoder.decode(str);
        String resultstr = "";
        try {
        java.security.MessageDigest md5 = java.security.MessageDigest.getInstance("MD5");
        md5.update(key.getBytes());
        byte[] digest = md5.digest();

                BASE64Decoder decoder = new BASE64Decoder();
                byte[] inputBytes = decoder.decodeBuffer(str);

                int decLimit = inputBytes.length;
                resultstr = (bytexor(inputBytes, digest, decLimit)).substring(0, decLimit);
        } catch(Exception e) {
                e.printStackTrace();
        }
        return resultstr;
}
String CommonCryptKey = "oRaclePhpLiNux";
"""

from urllib.parse import unquote
import hashlib, base64

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

CommonCryptKey = b"oRaclePhpLiNux"
url = 'example.com?title=%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D0%B2%D0%B0%D1%8F+%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B0'
print(decrypt(url, CommonCryptKey))

def bytexor(aByte, bByte, ilimit):
    c = ""

    try:
        for i in range(ilimit):
            c = c + str(ord(aByte[i]) ^ ord(bByte[i]))
    except:
        pass
    return c
