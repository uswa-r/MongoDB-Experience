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
//updating a NoSQL database:
db.userCollection.update({
    name: "james"
}, {
    $set: { age: 45 }
});