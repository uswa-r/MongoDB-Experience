//practiccing some MongoDB:

//adding a value into NoSQL database:
db.userCollection.insertOne({
    name: "James",
    email: "james@email.com",
    age: "22",
    favFruits: ["mango",
        "banana"
    ]
});

//finding a value from NoSQL database:
db.userCollection.find({
    name: "james"
});

//updating a value in a NoSQL database:
db.userCollection.update({
    name: "james"
}, {
    $set: { age: 45 }
});

//deleting a value from NoSQL database:
db.userCollection.deleteOne({
    "_id": ObjectId("123456789")
});