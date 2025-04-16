
//1.Create new: a.	Database named Demo      
//b.collections named trainningCenter1 , trainningCenter2 

db.createCollection("trainningCenter_1");
db.createCollection("trainningCenter2");

show collections;


//--------------------------------------------------------------------------------------------------------------------


//2.Insert documents into trainningCenter1 collection contains _id , name as firstName lastName , age , address as array , status
//db.trainningCenter1.insertMany([
//  {
//    _id: 1,
//    fname:"Aya",
//    lname:"Attia",
//    age:22,
//    address:[
//      {
//        Country: "Korea",
//        City: "seoul"
//      }
//    ]
//   ,
//    status:"A"
//    },
//    
//    
//    
//     {
//    _id: 2,
//    fname:"ahmed",
//    lname:"ali",
//    age:23,
//    address:[
//      {
//        Country: "Egypt",
//        City: "Cairo"
//      }
//    ]
//   
//   ,
//    status:"A"
//    },
//    
//     {
//    _id: 3,
//    fname:"mohamed",
//    lname:"ali",
//    age:25,
//    address:[
//      {
//        Country: "Egypt",
//        City: "Alex"
//      }
//    ]
//   ,
//    status:"A"
//    },    
//    ]
//        
//    )
    
db.trainningCenter_1.find({})

//--------------------------------------------------------------------------------------------------------------------

//2.Insert documents into trainningCenter1 collection contains _id , name as firstName lastName , age , address as array , statusUsing Variable (Array Data) and insert ONE


var Array_data=[

 {
    _id: 1,
    fname:"aya",
    lname:"attia",
    age:22,
    address:[
      {
        Country: "Korea",
        City: "seoul"
      }
    ]
   ,
    status:"A"
    }
   
 ]
 
 
db.trainningCenter_1.insertOne(Array_data)

db.trainningCenter_1.find({})


//--------------------------------------------------------------------------------------------

//3.Insert documents into trainningCenter2 collection Using Same Variable (Array Data) with same data and insert MANY


var Array_data=[

  {
 _id: 1,
   fname:"Aya",
  lname:"Attia",
    age:22,
   address:[
      {
        Country: "Korea",
      City: "seoul"
      }
   ]
   ,
    status:"A"
    },
    
   
   
     {
   _id: 2,
     fname:"ahmed",
   lname:"ali",
    age:23,
    address:[
     {
        Country: "Egypt",
       City: "Cairo"
      }
  ]
   
   ,
    status:"A"
   },
    
     {
   _id: 3,
    fname:"mohamed",
    lname:"ali",
    age:25,
    address:[
      {
       Country: "Egypt",
        City: "Alex"
      }
    ]
   ,
    status:"A"
    },    
    ]
   
 
  
db.trainningCenter2.insertMany(Array_data)

db.trainningCenter2.find({})

//---------------------------------------------------------------------------------------------------------------
//4.Use find. explain function (find by age field) and mention scanning type

db.trainningCenter2.find({age:22}).explain()  //COLLSCAN

//---------------------------------------------------------------------------------------------------------------
//5.Create index on created collection named it “IX_age” on age field 

db.trainningCenter2.createIndex(
 { age: 1} ,
 { name: "IX_age" })


//---------------------------------------------------------------------------------------------------------------

//6.Use find. explain view winning plan for index created (find by age field) and mention scanning type

db.trainningCenter2.find({age:22}).explain()   //IXSCAN

//---------------------------------------------------------------------------------------------------------------

//7.Create index on created collection named it “compound” on firstNsme and lastName 
//a.Try find().explain before create index and mention scanning type               
//b.Try find().explain after create index and mention scanning type

db.trainningCenter2.find({});

db.trainningCenter2.find({fName:"Aya",lName:"ali"}).explain()   //COLLSCAN

db.trainningCenter2.createIndex({fname:1,lname:1},{name:"IX_Names"})

db.trainningCenter2.find({fname:"Aya",lname:"ali"}).explain()    //IXSCAN



//---------------------------------------------------------------------------------------------------------------

//8.Try to delete from your collection where _id = 5 [insert it if not exists]

db.trainningCenter2.find({})

db.trainningCenter2.insertOne({
    _id:5,
    fname:"noor",
    lname:"ali",
    age:25,
    address:[
      {
       Country: "Egypt",
        City: "Alex"
      }
    ]
   ,
    status:"A"
}
 )
 
db.trainningCenter2.deleteOne({_id:5})

//-------------------------------------------------------------------------------------------------------

//9.Delete all documents from the trainingCenter collection.

//db.trainningCenter2.drop()
//
//db.trainningCenter2.find({})
//
////-------------------------------------------------------------------------------------------------------
//
////10.Drop the database and confirm its removal. Which command do you use to ensure the deletion?
//
//
//db.dropDatabase()

show dbs

//-------------------------------------------------------------------------------------------------------

//11.Backup your Labs database (Mongo_ITI) 


//mongodump -- db Demo  -- out "D:\Backup_mogo"

//-------------------------------------------------------------------------------------------------------

//12.Restore the taken back-up by new DB name Called Mongo_ITI_New

//mongorestore --db Demo "D:\Backup_mogo\Demo"