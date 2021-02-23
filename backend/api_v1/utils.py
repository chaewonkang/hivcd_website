import os
from auth.decrypt import decrypt


def get_user_id(cookies):
    # cookie_id = cookies["SUSER_ID"]
    key = os.getenv("AUTH_KEY")
    decrypt_id = decrypt(s=cookies, key=key)
    return decrypt_id
