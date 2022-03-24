from cryptography.fernet import Fernet
import hashlib
import sys
from getpass import getpass
# use hashlib to make string into a hex hash
def return_key(string):
    sha = hashlib.sha256()
    sha.update(string.encode('utf-8'))
    return sha.hexdigest()[:41]+"_A="
    
res = input("Encrypt or Decrypt? (e/d): ")
if (res == "e"):
    text = input("Enter the text to encrypt: ")
 
    password = getpass("Enter the password: ")
    key = return_key(password)
    fernet = Fernet(key)
    encMessage = fernet.encrypt(text.encode())
    f=open("private.key", "w")
    f.write(encMessage.decode())

if (res == "d"):
    f = open("private.key", "r")
    encMessage = f.read().encode()
    f.close()
    password = getpass("Enter the password: ")
    key = return_key(password)
    fernet = Fernet(key)
    try:
        decMessage = fernet.decrypt(encMessage).decode()
    except:
        print("Wrong password")
    print(decMessage)
