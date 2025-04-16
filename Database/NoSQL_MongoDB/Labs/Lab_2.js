
//create new database 
use mydatabase
show collections


// create orders collection
db.createCollection("orders")
db.orders.insertMany( [
   { _id: 0, name: "Pepperoni", size: "small", price: 19,
     quantity: 10, date: ISODate( "2021-03-13T08:14:30Z" ) },
   { _id: 1, name: "Pepperoni", size: "medium", price: 20,
     quantity: 20, date : ISODate( "2021-03-13T09:13:24Z" ) },
   { _id: 2, name: "Pepperoni", size: "large", price: 21,
     quantity: 30, date : ISODate( "2021-03-17T09:22:12Z" ) },
   { _id: 3, name: "Cheese", size: "small", price: 12,
     quantity: 15, date : ISODate( "2021-03-13T11:21:39.736Z" ) },
   { _id: 4, name: "Cheese", size: "medium", price: 13,
     quantity:50, date : ISODate( "2022-01-12T21:23:13.331Z" ) },
   { _id: 5, name: "Cheese", size: "large", price: 14,
     quantity: 10, date : ISODate( "2022-01-12T05:08:13Z" ) },
   { _id: 6, name: "Vegan", size: "small", price: 17,
     quantity: 10, date : ISODate( "2021-01-13T05:08:13Z" ) },
   { _id: 7, name: "Vegan", size: "medium", price: 18,
     quantity: 10, date : ISODate( "2021-01-13T05:10:13Z" ) },
{
    _id: 8,
    name: "Vegan",
    size: "medium",
    price: 18,
    quantity: 20
  }
] )
db.orders.find({})
//---------------------------------------------------------------------------------------------------

//create sales collection
db.createCollection("sales")
db.sales.insertMany( 
[
  {
    "product": "Widget",
    "quantity": 10,
    "price": 25.0,
    "date": ISODate("2018-12-15T08:00:00Z")
  },
  {
    "product": "Gadget",
    "quantity": 5,
    "price": 50.0,
    "date": ISODate("2019-03-20T14:30:00Z")
  },
  {
    "product": "Widget",
    "quantity": 8,
    "price": 25.0,
    "date": ISODate("2020-05-01T10:15:00Z")
  },
  {
    "product": "Gadget",
    "quantity": 3,
    "price": 50.0,
    "date": ISODate("2020-09-10T16:45:00Z")
  },
  {
    "product": "Accessory",
    "quantity": 15,
    "price": 10.0,
    "date": ISODate("2021-02-20T09:30:00Z")
  },
  {
    "product": "Widget",
    "quantity": 12,
    "price": 30.0,
    "date": ISODate("2022-04-05T11:45:00Z")
  },
  {
    "product": "Gadget",
    "quantity": 7,
    "price": 55.0,
    "date": ISODate("2023-01-10T14:30:00Z")
  },
  {
    "product": "Accessory",
    "quantity": 20,
    "price": 12.0,
    "date": ISODate("2023-04-15T09:30:00Z")
  }
])

db.sales.find({})
//------------------------------------------------------------------------------------------

//create employees collection
db.createCollection("employees");
db.employees.insertMany( 
[
  {
    "name": "John Doe",
    "department": "Sales",
    "salary": 60000,
    "hireDate": ISODate("2022-03-15T08:00:00Z")
  },
  {
    "name": "Alice Smith",
    "department": "Sales",
    "salary": 55000,
    "hireDate": ISODate("2022-05-20T09:30:00Z")
  },
  {
    "name": "Bob Johnson",
    "department": "Engineering",
    "salary": 70000,
    "hireDate": ISODate("2021-10-10T14:15:00Z")
  },
  {
    "name": "Sarah Brown",
    "department": "Sales",
    "salary": 58000,
    "hireDate": ISODate("2022-08-05T11:45:00Z")
  },
  {
    "name": "David Lee",
    "department": "Engineering",
    "salary": 72000,
    "hireDate": ISODate("2022-01-25T16:30:00Z")
  },
  {
    "name": "Emily Taylor",
    "department": "Engineering",
    "salary": 68000,
    "hireDate": ISODate("2021-12-10T08:30:00Z")
  },
  {
    "name": "Olivia Wilson",
    "department": "Sales",
    "salary": 59000,
    "hireDate": ISODate("2022-09-15T10:00:00Z")
  }
]
)

db.employees.find({});

//-------------------------------------------------------------------------------------------
//created before
db.likes.find({})

//--------------------------------------------------------------------------------------------

//create inventory collection
db.createCollection("inventory");

db.inventory.insertMany([
  {
    code: "xyz",
    tags: [
      "school",
      "book",
      "bag",
      "headphone",
      "appliance"
    ],
    qty: [
      {
        size: "S",
        num: 10,
        color: "blue"
      },
      {
        size: "M",
        num: 45,
        color: "blue"
      },
      {
        size: "L",
        num: 100,
        color: "green"
      }
    ]
  },
  
  
  {
    code: "abc",
    tags: [
      "appliance",
      "school",
      "book"
    ],
    qty: [
      {
        size: "6",
        num: 100,
        color: "green"
      },
      {
        size: "6",
        num: 50,
        color: "blue"
      },
      {
        size: "8",
        num: 100,
        color: "brown"
      }
    ]
  },
  {
    "_id": 111,
    "item": "TBD",
    "stock": 0,
    "info": {
      "publisher": "1111",
      "pages": 430
    },
    "tags": [
      "technology",
      "computer"
    ],
    "ratings": [
      {
        "by": "ijk",
        "rating": 4
      },
      {
        "by": "lmn",
        "rating": 5
      }
    ],
    "reorder": false
  },
  {
    "_id": 3,
    "item": "XYZ123",
    "stock": 15,
    "info": {
      "publisher": "5555",
      "pages": 150
    },
    "tags": [
      
    ],
    "ratings": [
      {
        "by": "xyz",
        "rating": 5
      }
    ],
    "reorder": false
  },
  {
    "_id": 4,
    "address": "2030 Martian Way",
    "zipCode": "90698345"
  },
  {
    "_id": 5,
    "address": "156 Lunar Place",
    "zipCode": 43339374
  },
  {
    "_id": 6,
    "address": "2324 Pluto Place",
    "zipCode": "3921412"
  },
  {
    "_id": 7,
    "address": "55 Saturn Ring",
    "zipCode": "88602117"
  },
  {
    "_id": 8,
    "address": "104 Venus Drive",
    "zipCode": [
      "834847278",
      "1893289032"
    ]
  },
  {
    code: "efg",
    tags: [
      "school",
      "book"
    ],
    qty: [
      {
        size: "S",
        num: 10,
        color: "blue"
      },
      {
        size: "M",
        num: 100,
        color: "blue"
      },
      {
        size: "L",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "electronics",
      "school"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "ssl",
      "school"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "security",
      "school"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "ssl",
      "security"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    _id: 9,
    item: {
      name: "ab",
      code: "123"
    },
    qty: 15,
    tags: [
      "A",
      "B",
      "C"
    ]
  },
  {
    _id: 10,
    item: {
      name: "cd",
      code: "123"
    },
    qty: 20,
    tags: [
      "B"
    ]
  },
  {
    _id: 11,
    item: {
      name: "ij",
      code: "456"
    },
    qty: 25,
    tags: [
      "A",
      "B"
    ]
  },
  {
    _id: 12,
    item: {
      name: "xy",
      code: "456"
    },
    qty: 30,
    tags: [
      "B",
      "A"
    ]
  },
  {
    _id: 13,
    item: {
      name: "mn",
      code: "000"
    },
    qty: 20,
    tags: [
      [
        "A",
        "B"
      ],
      "C"
    ]
  },
  {
    "item": "nuts",
    "quantity": 30,
    "carrier": {
      "name": "Shipit",
      "fee": 3
    }
  },
  {
    "item": "bolts",
    "quantity": 50,
    "carrier": {
      "name": "Shipit",
      "fee": 4
    }
  },
  {
    "item": "washers",
    "quantity": 10,
    "carrier": {
      "name": "Shipit",
      "fee": 1
    }
  },
  {
    item: "canvas",
    qty: 100,
    size: {
      h: 28,
      w: 35.5,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "journal",
    qty: 25,
    size: {
      h: 14,
      w: 21,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "mat",
    qty: 85,
    size: {
      h: 27.9,
      w: 35.5,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "mousepad",
    qty: 25,
    size: {
      h: 19,
      w: 22.85,
      uom: "cm"
    },
    status: "P"
  },
  {
    item: "notebook",
    qty: 50,
    size: {
      h: 8.5,
      w: 11,
      uom: "in"
    },
    status: "P"
  },
  {
    item: "paper",
    qty: 100,
    size: {
      h: 8.5,
      w: 11,
      uom: "in"
    },
    status: "D"
  },
  {
    item: "planner",
    qty: 75,
    size: {
      h: 22.85,
      w: 30,
      uom: "cm"
    },
    status: "D"
  },
  {
    item: "postcard",
    qty: 45,
    size: {
      h: 10,
      w: 15.25,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "sketchbook",
    qty: 80,
    size: {
      h: 14,
      w: 21,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "sketch pad",
    qty: 95,
    size: {
      h: 22.85,
      w: 30.5,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "journal",
    qty: 25,
    tags: [
      "blank",
      "red"
    ],
    dim_cm: [
      14,
      21
    ]
  },
  {
    item: "notebook",
    qty: 50,
    tags: [
      "red",
      "blank"
    ],
    dim_cm: [
      14,
      21
    ]
  },
  {
    item: "paper",
    qty: 100,
    tags: [
      "red",
      "blank",
      "plain"
    ],
    dim_cm: [
      14,
      21
    ]
  },
  {
    item: "planner",
    qty: 75,
    tags: [
      "blank",
      "red"
    ],
    dim_cm: [
      22.85,
      30
    ]
  },
  {
    item: "postcard",
    qty: 45,
    tags: [
      "blue"
    ],
    dim_cm: [
      10,
      15.25
    ]
  },
  {
    code: "xyz",
    tags: [
      "school",
      "book",
      "bag",
      "headphone",
      "appliance"
    ],
    qty: [
      {
        size: "S",
        num: 10,
        color: "blue"
      },
      {
        size: "M",
        num: 45,
        color: "blue"
      },
      {
        size: "L",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "abc",
    tags: [
      "appliance",
      "school",
      "book"
    ],
    qty: [
      {
        size: "6",
        num: 100,
        color: "green"
      },
      {
        size: "6",
        num: 50,
        color: "blue"
      },
      {
        size: "8",
        num: 100,
        color: "brown"
      }
    ]
  },
  {
    code: "efg",
    tags: [
      "school",
      "book"
    ],
    qty: [
      {
        size: "S",
        num: 10,
        color: "blue"
      },
      {
        size: "M",
        num: 100,
        color: "blue"
      },
      {
        size: "L",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "electronics",
      "school"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    _id: 14,
    status: "a"
  },
  {
    _id: 15,
    sku: "abc123",
    quantity: 10,
    metrics: {
      orders: 2,
      ratings: 3.5
    }
  },
  {
    _id: 16,
    highScore: 800,
    lowScore: 200
  },
  {
    _id: 17,
    highScore: 800,
    lowScore: 200
  },
  {
    _id: 18,
    item: "Scarf",
    price: 10
  },
  {
    "_id": 19,
    "alias": [
      "The American Cincinnatus",
      "The American Fabius"
    ],
    "mobile": "555-555-5555",
    "nmae": {
      "first": "george",
      "last": "washington"
    }
  },
  {
    "_id": 20,
    "alias": [
      "My dearest friend"
    ],
    "mobile": "222-222-2222",
    "nmae": {
      "first": "abigail",
      "last": "adams"
    }
  },
  {
    "_id": 21,
    "alias": [
      "Amazing grace"
    ],
    "mobile": "111-111-1111",
    "nmae": {
      "first": "grace",
      "last": "hopper"
    }
  },
  {
    _id: 22,
    quantity: 250,
    instock: true,
    reorder: false,
    details: {
      model: "14QQ",
      make: "Clothes Corp"
    },
    tags: [
      "apparel",
      "clothing"
    ],
    ratings: [
      {
        by: "Customer007",
        rating: 4
      }
    ]
  },
  {
    "item": "chisel",
    "sku": "C001",
    "quantity": 4,
    "instock": true
  },
  {
    "item": "hammer",
    "sku": "unknown",
    "quantity": 3,
    "instock": true
  },
  {
    "item": "nails",
    "sku": "unknown",
    "quantity": 100,
    "instock": true
  },
  {
    "_id": 23,
    name: "Alice King",
    classAverage: 87.333333333333333
  },
  {
    "_id": 24,
    name: "Bob Jenkins",
    classAverage: "83.52"
  },
  {
    "_id": 25,
    name: "Cathy Hart",
    classAverage: "94.06"
  },
  {
    "_id": 26,
    name: "Drew Williams",
    classAverage: 93
  },
  {
    "_id": 27,
    "address": "2030 Martian Way",
    "zipCode": "90698345"
  },
  {
    "_id": 28,
    "address": "156 Lunar Place",
    "zipCode": "43339374"
  },
  {
    "_id": 29,
    "address": "2324 Pluto Place",
    "zipCode": "3921412"
  },
  {
    "_id": 30,
    "address": "55 Saturn Ring",
    "zipCode": "88602117"
  },
  {
    "_id": 31,
    "address": "104 Venus Drive",
    "zipCode": [
      "834847278",
      "1893289032"
    ]
  }
])

//--------------------------------------------------------------------------------------------------------------------------
show collections

//--------------------------------------------------------------------------------------------------------------------------
//create employee collection
db.createCollection("employee")

db.employee.insertMany([
{_id:1,fName:"mohamed",lName:"ahmed",age:15},
{_id:2,fName:"noha",lName:"mahmoud",age:25},
{_id:3,fName:"malak",lName:"mohamed",age:35},
{_id:4,fName:"mazen",lName:"mohamed",age:45},
{_id:5,fName:"eman",lName:"ali",age:55}])

//all data files inserted

//----------------------------------------------------------------------------------------------------------------------------------------------------------------


//1.Provide the MongoDB code for enforcing JSON schema validation when creating a collection named "employees" with required fields "name," "age" (min. 18), 
//and "department" (limited to ["HR," "Engineering," "Finance"]).

// employees collection already exists

db.runCommand( {
   collMod: "employees",
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "name", "age","department" ],
      properties: {
         name: {   bsonType: "string",
            description: "name must be a string and is required"},
         age: {    bsonType: "int",   minimum: 18,
               description: "age must be integer and minimum age 18 , and is required" } ,
         department:{bsonType: "string",
             enum: ["HR", "Engineering", "Finance"],
            description: "department must be a string ,contain limted values HR, Engineering, Finance and is required"}           }   } }   } )


//----------------------------------------------------------------------------------------------------------------
//2.Find documents where the "tags" field exists.
db.inventory.find({tags:{$exists:true}})

//----------------------------------------------------------------------------------------------------------------
//3.Find documents where the "status" field has a value in [A, B] using both the `$in` , `$or` operators.
db.inventory.find({status:{$in:['A','B']}})

//----------------------------------------------------------------------------------------------------------------
//4.Find documents where the "tags" field does not contain values "ssl" or "security."

db.inventory.find({tags:{$not:{$in:['ssl','security']} } })

//----------------------------------------------------------------------------------------------------------------

//5.Find documents where the "qty" field is equal to 85.
db.inventory.find({qty:{$eq:85}})

//----------------------------------------------------------------------------------------------------------------

//6.Find documents where the "tags" array contains all of the values [ssl, security] using the `$all` operator.
db.inventory.find({tags:{$all:['ssl','security'] } })

//----------------------------------------------------------------------------------------------------------------

//7.Find documents where the "tags" array has a size of 3.

db.inventory.find({tags:{$size:3}})

//----------------------------------------------------------------------------------------------------------------

//8.Find documents where the "tags" field is of type array.

db.inventory.find({tags:{$type:"array"}})

//----------------------------------------------------------------------------------------------------------------

//9.	Update the "item" field in the "paper" document, setting "size.uom" to "meter" and using the `$currentDate` operator.
//a.	Also, use the upsert option and change filter condition item:”paper”.
//b.	Use the `$setOnInsert` operator.
//c.	Try `updateOne`, `updateMany`, and `replaceOne`.



db.inventory.find({ item: "paper" })

//Update the "item" field in the "paper" document, setting "size.uom" to "meter" and using the `$currentDate` operator.
db.inventory.updateOne({ item: "paper" },
    {$set: { "size.uom": "meter" },  
    $currentDate: { lastModified: true }} 
)

//this query set uom field in size to meter and add new field lastModified

//Also, use the upsert option and change filter condition item:”paper”.
db.inventory.updateOne({ item: "paper" },
    {$set: { "size.uom": "meter" },  
    $currentDate: { lastModified: true }},
    {upsert:true} 
)

//Use the `$setOnInsert` operator.
db.inventory.updateOne({ item: "paper" },
    {$set: { "size.uom": "meter" },  
    $currentDate: { lastModified: true },
    $setOnInsert:{status:'B'}}
   
    ,{upsert:true} 
)

//Try `updateMany`, and `replaceOne`.
db.inventory.replaceOne({ item: "paper" },
{
size:{"uom": "meter"},  
lastModified: new Date()
})

db.inventory.updateMany({ item: "paper" },
    {$set: { "size.uom": "meter" },  
    $currentDate: { lastModified: true }} 
)

//----------------------------------------------------------------------------------------------------------------

//10.Insert a document with incorrect field names "neme" and "ege," then rename them to "name" and "age."


db.createCollection("student")

db.student.insertOne(
{gae:15,
anme:"ahmed"})

db.student.find({})

db.student.updateMany({},
   { $rename: { "anme": "name"  ,"gae":"age"}})
   

// 11.Try to reset any document field using the `$unset` function.
db.student.insertOne(
{age:22,
name:"aya"})

db.student.updateMany({}, { $unset:{age:""}})

db.student.find({})

//--------------------------------------------------------------------------------------------------------------------
//12.	Try update operators like `$inc`, `$min`, `$max`, and `$mul` to modify document fields.
db.orders.find({name:"Pepperoni"})

db.orders.updateMany(
   {name:"Pepperoni"},
   { $inc: { quantity: 5 } }
)

db.orders.updateMany(
   {name:"Pepperoni"},
   { $mul: { quantity: 2 } }
)

db.orders.updateMany(
   {name:"Pepperoni"},
   { $min: { price: 5 } }
)
db.orders.updateMany(
   {name:"Pepperoni"},
   { $max: { price: 20 } }
)
db.orders.updateOne(
   {name:"Pepperoni"},
   {$set: {price: 50 } }
)


db.orders.deleteOne(
   {name:"Pepperoni"},
   {$set: {price: 50 } }
)




