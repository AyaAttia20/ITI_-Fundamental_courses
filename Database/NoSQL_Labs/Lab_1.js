show dbs
show collections

//1.Create a Collection named "Staff".
use admin
db.createCollection("Staff")
show collections

//---------------------------------------------------------------------------------------

//2.Insert one document into the "Staff" collection: {_id, name, age, gender, department}.
db.Staff.insertOne({ _id: 0, name: "Aya", gender:"female", department:"AI"})

//---------------------------------------------------------------------------------------

//3.Insert many documents into the "Staff" collection:
db.Staff.insertMany([
   { _id: 4, name:"ahmed",age: 24, gender:"male", department:"AI"}, 
   {_id:5, name:"ayaaa", age: 25, gender: "female", managerName:"Aya", department:"AI"},
   {_id:6, name:"Mohamed", age: 15, gender:"male",DOB: ISODate("2010-03-10T00:00:00Z")}  ]
       )
 
//---------------------------------------------------------------------------------------
 
//4.Query to find data from the "Staff" collection:
//1) Find all documents.
db.Staff.find({})

//2) Find documents where gender is "male".
db.Staff.find({"gender":"male"})

//3) Find documents with age between 20 and 25.
db.Staff.find({age:{$gte:20, $lte: 25}})

//)4) Find documents where age is 25 and gender is "female".
db.Staff.find({ "$and": [ { "age": 25 }, { "gender": "female" } ] }); 

//) 5) Find documents where age is 25 or gender is "female".
db.Staff.find({ "$or": [ { "age": 25 }, { "gender": "female" } ] }); 

//---------------------------------------------------------------------------------------

//5.Update one document in the "Staff" collection where age is 15, set the name to "new student".
db.Staff.updateOne({age:15},{$set: {"name": "new student"}});


//---------------------------------------------------------------------------------------

//6.Update many documents in the "Staff" collection, setting the department to "AI".
db.Staff.updateMany( {},{$set: {" department ": "OS"}});

db.Staff.updateMany( {},{$set: {" department ": "AI"}});


//---------------------------------------------------------------------------------------
//7.	Create a new collection called "test" and insert documents from Question 3.

db.createCollection("test")
show collections

db.test.insertMany([
   { _id: 0, name:"ahmed",age: 24, gender:"male", department:"AI"}, 
   {_id:1, name:"ayaaa", age: 25, gender: "female", managerName:"Aya", department:"AI"},
   {_id:2, name:"Mohamed", age: 15, gender:"male",DOB: ISODate("2010-03-10T00:00:00Z")}  ]
       )
   
//---------------------------------------------------------------------------------------
//8.Try to delete one document from the "test" collection where age is 15.  
db.test.find({})
db.test.deleteOne({ "age": 15 }); 

//---------------------------------------------------------------------------------------
//9.try to delete all male gender
db.test.deleteMany({"gender":"male"}); 

//---------------------------------------------------------------------------------------
//10.delete all documents in the "test" collection
db.test.deleteMany({}); 
db.test.drop()

