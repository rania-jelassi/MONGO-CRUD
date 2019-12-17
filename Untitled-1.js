// Create a database called "contact"
use contact

// Create a collection called "contactlist"
db.contactlist.insertMany([
  {
    "last name": "Ben Lahmer",
    "First name": "Fares",
    Email: "fares@gmail.com",
    age: 26
  },
  {
    "last name": "Kefi",
    "First name": "Seif",
    Email: "kefi@gmail.com",
    age: 15
  },
  {
    "last name": "Fatnassi",
    "First name": "Sarra",
    Email: "sarra@gmail.com",
    age: 40
  },
  {
    "last name": "Ben Yahia",
    "First name": "Rym",
    age: 4
  },
  {
    "last name": "Cherif",
    "First name": "Sami",
    age: 3
  }
]);

// Display all the contact list
db.contactlist.find().pretty()

// Display all the contact list having age>18 and name containing "ah"
db.contactlist.find({ age: { $gt: 18 }, "last name": { $regex: ".*ah.*" } });

// Display all the contact list having age>18
db.contactlist.find({
  age: {
    $gt: 18
  }
});

// Display all the information about only one person using his id
db.contactlist.find({ _id: ObjectId("5df8a2033725e6caad20308b") });

// Change the contact first name of "kefi Seif" by "Kefi Anis"
db.contactlist.update(
  { "First name": "Seif" },
  { $set: { "First name": "Anis" } }
);

// Delete the the contact list having age < 5
db.contactlist.deleteMany({
  age: {
    $lt: 5
  }
});

//   Display all the contact list
db.contactlist.find().pretty();
