import re  
import json
print("---Register Now🔐👤---")
user_id=input("Enter your user id: ")
first_name=input("Enter your first name: ")
last_name=input("Enter your last name: ")
email=input("Enter your email: ")
password=input("Enter your password: ")
new_passwd=input("confirm your password:")
mob_phone=input("Enter your mobile phone:")






   

list_dict_users = {
    "user_id":user_id,
    'first name': first_name,
    'last_name': last_name,
    'email': email,
    'password': password,
    'mob_phone': mob_phone
}

global valid

def user_id_validate(user_id):
    
    while True:
        user_id=input("user_id : ")
        valid=False
        if user_id.isdigit():
            user_id=int(user_id)
            # print("vaild entry")
            valid=True
            break
        
        if valid==False:
            print("not vaild entry,please enter again: ")
        else:
            break    
    return user_id    
        
def first_name_is_valid(first_name):
    valid=True
    while(valid==False):
        if isinstance(first_name,str) and  first_name !='' and not first_name.isdigit():
            valid=True
            print("the first name is valid")
        else:
            valid=False
            print("the first name is not valid")
            print("please,enter vaild name")
            first_name=input("Enter valid first name: ")

def last_name_is_valid(last_name):
    valid=True
    while(valid==False):
        if isinstance(last_name,str) and last_name !='' and not first_name.isdigit():
            valid=True
            print("the last name is valid")
        else:
            valid=False
            print("the last name is not valid")
            print("please,enter vaild name")
            last_name=input("Enter vaild last name: ")
  

def email_is_valid(email):
    valid=True
    while(valid==False):
        if isinstance(email,str):
            if '@' in email and '.' in email:
                valid=True
                print("the email is valid")
            else:
              valid=False
            print("the email is not valid")
            email=input("Enter valid email")


def password_is_valid(password):
    valid=True
    while(valid==False):
        count_upper=0
        count_lower=0
        count_num=0
        flag=0
        if(len(password)>=8):
            for char in password:
                if char.isupper():
                    count_upper+=1
                    # print("char is upper")
                if char.lower():
                    count_lower+=1
                    # print("char is lower")
                if char.isdigit():
                    count_num+=1
                if  char =="_":
                    flag=1


        if count_upper>0 and count_lower>0 and count_num>0 and flag:
            print("password is valid")
            valid=True
        else:
            valid=True
            print("password not valid ") 
            password=input("enter valid password ")   
                
def confirm_passwrd(new_passwd):
    valid=True
    while(valid==False):
        if new_passwd==password:
            valid=True
            print("password confirmed")
        else:
            valid=False
            print("repeat the password")    
            new_passwd=input("Enter valid confirmed password")

def mobile_is_valid(mob_phone):
     valid=True
     while(valid==False):
         
        print("phone validation")
        val=re.fullmatch("01[0125][0-9]{8}",mob_phone)
        if val!=None:
            valid=True
            print("mobile phone is valid ")  
        else:
            valid=False
            print("mobile phone is not valid")     




    

def get_users_data():
    try:
       
        with open("new_data_of_users.json") as f:
            content_data=json.load(f)
        
        data=content_data.get ("content_user",[])


    except  FileNotFoundError:
        data=[]
        
    return data    


def save_user_data():
    
    user_data_return = get_users_data()
    user_data_return.append(list_dict_users)
    try:
        with open("new_data_of_users.json",mode='w') as new_data_of_users:
            # user_data_return.write(json.dumps(user_data_return, indent=4))
            json.dump({"content_user": user_data_return}, new_data_of_users, indent=4)
        return True
    except Exception as e:
        print(e)
        return False       


save_user_data()

