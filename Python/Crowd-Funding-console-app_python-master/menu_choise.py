menu=["1.Registration","2.Login"]
for choise in menu:
    print(choise)
user_choise=input("choose you want enter 1 for Registration  or enter 2 for Login: ")
if user_choise=='1':
    print("Now, you can Register 🔐😊")
    import Registration 

if user_choise=='2':
    print("Login your email and your password ⌨️🔓")
    import Login
