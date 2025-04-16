from datetime import datetime
import json

def create_project():
        
    print("---- Project Section💡-----")

    user_id=input("Enter your user id: ")
    Title=input("Enter Title of the project: ")
    details=input("Enter details of the project: ")
    return Title,details,user_id 
  

# tot_target=input("Enter total target of the project: ")
# st_time=input("Enter start time for the campaign: ")
# end_time=input("Enter end time  for the campaign: ")



    
def validate_tot_target(tot_target):
    
    while True:
        tot_target=input("Enter total target of the project: ")
        valid=False
        if tot_target.isdigit():
            tot_target=int(tot_target)
            # print("vaild entry")
            valid=True
            break
        
        if valid==False:
            print("not vaild entry,please enter again: ")
        else:
            break    
    return tot_target    
        

 

def vail_date():
    while True:
        st_time=input("Enter start time for the campaign: ")
        end_time=input("Enter end time  for the campaign: ")


        res_st=False
        res_en=False
        format = "%d-%m-%Y"
        try:
            res_st = bool(datetime.strptime(st_time, format))
        except ValueError:
            res_st = False
        try:
            res_en = bool(datetime.strptime(end_time, format))
        except ValueError:
            res_en = False
    
        
        if res_st ==True and res_en==True:
           
            return st_time,end_time      

            # print("valid date")
        else:
            print("not valid date")

       



def get_projects_data():
    try:
       
        with open("projects_data_file.json") as f:
            content_project=json.load(f)
        # data=content_data.get ("content_user",[])
        project_data=content_project.get ("projects_data",[])


    except  FileNotFoundError:
        project_data=[]
        # content_data={}
    return project_data    


def save_project_data(projects_data):
    
    project_data_return = get_projects_data()
    project_data_return.append(projects_data)
    try:
        with open("projects_data_file.json",mode='w') as projects_data_file:
            json.dump({"projects_data": project_data_return}, projects_data_file, indent=4)
        return True
    except Exception as e:
        print(e)
        return False       


# save_project_data()


def use():
  
    tot_target=0
    Title,details,user_id=create_project()
    total_target=validate_tot_target(tot_target)
    st_time,end_time=vail_date()

    projects_data = {
     "user_id":user_id,
    'Title': Title,
    'details': details,
    'tot_target': total_target,
    'start_time':st_time,
    'end_time':end_time

}

    if save_project_data(projects_data):
        print("Project saved successfully!")
    else:
        print("Failed to save the project.")




if __name__ == "__main__":
  use()