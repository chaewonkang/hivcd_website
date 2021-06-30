String bytexor(byte[] aByte, byte[] bByte, int ilimit) {
	String c = "";
	try {
			for(int i=0; i<ilimit; i++) {
					c = c + (char)((byte)aByte[i] ^ (byte)bByte[i]);
			}
	} catch(Exception e) {
	}
	return c;
}
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

ID = decrypt(URLDecoder.decode(SUSER_ID), CommonCryptKey);
