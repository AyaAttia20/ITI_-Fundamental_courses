import json
from Project import get_projects_data,vail_date,create_project

list = []
list_project=[]
def login():
        
    print("--Login Now 👤 --")


    with open('new_data_of_users.json', 'r') as file:
        data_json_file = json.load(file)
       
    for dict in data_json_file["content_user"]:
        list.append(dict)

    with open('projects_data_file.json', 'r') as file:
        project_json_file = json.load(file)
       
    for dict_project in project_json_file["projects_data"]:
        list_project.append(dict_project)
       
    while True:
        
        email=input("Enter your email: ")
        password=input("Enter your password:")    
        flag=False 

        for dict in list:
            if email == dict['email'] and password == dict['password']:
                print("login successful")
                flag=True
                # user_id+=1
                print("--------------------------------------------")
                break
        user_id=dict['user_id']
      
                
        
        if  flag==False:        
            print("invalid data ,please try again")

       

        return flag,user_id   
        


# login()
# print(list[]["user_id"])
# print(list_project["user_id"])
flag,user_id=login()
user_choice = input("Choose Project Section if you want press PS: ")
if user_choice == 'PS':
    if flag==True:
        print("you are user in The app👋")
        print("--------------------------------------------")

        
        choice = input("Choose  1-create  2-view  3.edit  4.delete  5-search: ")

        if choice == '1':
            print("To create a new project:👩‍💻 ")
            create_project()

        elif choice == '2':
            print("To view all projects 📄")
            
            projects = get_projects_data()
            for project in projects:
                print(project)

        elif  choice == '3':
            
            print("edit your own project ✍️ 📄")
            
            for dict_project in list_project:
                if user_id == dict_project['user_id'] :
                    print("ok,you can edit")
                    break
            print("--------------------------------------------")
            choose_edit=input("choose what the specific part you want edit ") 
            if choose_edit=='Title'  :
                new_Title=input("enter the new Title")
                dict_project['Title']=new_Title

            elif choose_edit=='details'  :
                new_details=input("enter the new details")
                dict_project['details']=new_details   

            elif choose_edit=='tot_target'  :
                new_tot_target=input("enter the new tot_target")
                dict_project['tot_target']=new_tot_target 

            elif choose_edit=='start_time' :
                new_start_time=input("enter the new start_time")
                dict_project['start_time']=new_start_time 

            elif choose_edit=='end_time' :
                new_end_time=input("enter the new end_time")
                dict_project['end_time']=new_end_time 


        elif  choice == '4':
            
            print("delete your own projectc 🧹📄")
            print("--------------------------------------------")
            
            for dict_project in list_project:
                if user_id == dict_project['user_id'] :
                    print("you can delete")
                    del dict_project
                    break

    

        elif choice == '5':
            print("Search for a project using dates🔍")
            
            st_time, end_time = vail_date()
            projects = get_projects_data()
            found = False
            for project in projects:
                if project['start_time'] == st_time and project['end_time'] == end_time:
                    print(f"Project Found: {project}")
                    found = True
            if not found:
                print("No project found for the given dates.")

        else:
            print("Invalid choice. Please try again.")

            
else:
   exit()                   

                





        

