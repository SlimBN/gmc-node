/* ------------------------------------------------------------------------------------------------
** IMPORTANT NOTES
** ------------------------------------------------------------------------------------------------
(1) it's a choice for this checkpoint to put everything in one single file, for the sake of simplicity, otherwise we could have separated elements in different folders and files, for example : the person schema in /models/person.js
(2) I am putting my .env in my .gitignore, set your own MONGO_URI and use your database
(3) By choice I am finding the last record's id to use them in ID related operations
(4) Side note, no Mary in the database but ok, you asked to delete it (switch to another name)
(5) Side note, no one likes Hamburgers in the database since they were deleted in the previous operations (switch to another dish)
(6) MANY OF THE GIVEN INSTRUCTIONS USE DEPRECATED FUNCTIONS THAT WERE CORRECTED HERE, PLEASE NOTE ACCORDINGLY
(7) Many other discordances but TLTW/TLTR
------------------------------------------------------------------------------------------------ */

const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
const connectDB = async () => {
  console.log(`MongoDB URL: ${process.env.MONGO_URI}`);
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Wrap the code in an async function so I can use the await
const run = async () => {
  await connectDB();

  // Create a person schema
  const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String],
  });

  const Person = mongoose.model("Person", personSchema);

  // Resetting the database
  console.log("----------------------------------------------------------------")
  console.log("Initial Database state : ", (await Person.find()).length)
  await Person.deleteMany();
  console.log("Reset Database state : ", (await Person.find()).length)
  console.log("We can start now")
  console.log("----------------------------------------------------------------")

  try {
    // Create and save a record
    const newPerson = new Person({
      name: "John Doe",
      age: 30,
      favoriteFoods: ["Pizza", "Burger"],
    });

    const savedPerson = await newPerson.save();
    console.log("New person saved:", savedPerson);

    // ------------------------------------------------------------------------------

    // Create many records
    const arrayOfPeople = [
      { name: "Alice", age: 25, favoriteFoods: ["Pasta", "Salad"] },
      { name: "Bob", age: 28, favoriteFoods: ["Steak", "Sushi"] },
    ];

    const createdPeople = await Person.create(arrayOfPeople);
    console.log("People created:", createdPeople);

    // ------------------------------------------------------------------------------

    // Find all people with a given name
    const peopleWithNameAlice = await Person.find({ name: "Alice" });
    console.log("People with name Alice:", peopleWithNameAlice);

    // ------------------------------------------------------------------------------

    // Find one person with a certain food in favorites
    const personWhoLikesBurger = await Person.findOne({
      favoriteFoods: "Burger",
    });
    console.log("Person who likes Burger:", personWhoLikesBurger);

    // ------------------------------------------------------------------------------

    // Find person by ID
    const personId = await Person.findOne({}, {}, { sort: { _id: -1 } }).then(
      (data) => data._id
    );
    const personById = await Person.findById(personId);
    console.log("Person by ID:", personById);

    // ------------------------------------------------------------------------------

    // Classic update - Add "Hamburger" to favoriteFoods
    const person = await Person.findById(personId);
    if (person) {
      person.favoriteFoods.push("Hamburger");
      const updatedPerson = await person.save();
      console.log("Updated person:", updatedPerson);
    } else {
      console.log("Person not found");
    }

    // ------------------------------------------------------------------------------

    // New update - Set age to 20 for a person by name
    const personName = "Alice";
    const personToUpdate = await Person.findOne({ name: personName });
    if (personToUpdate) {
      personToUpdate.age = 20;
      const updatedPersonByName = await personToUpdate.save();
      console.log("Updated person by name:", updatedPersonByName);
    } else {
      console.log("Person not found");
    }

    // ------------------------------------------------------------------------------

    // Delete a person by ID
    const removedPerson = await Person.deleteOne(personId);
    console.log("Removed person:", removedPerson);

    // ------------------------------------------------------------------------------

    // Delete many people by name
    // (4)
    const deletionResult = await Person.deleteMany({ name: "Mary" });
    console.log("Deleted:", deletionResult);

    // ------------------------------------------------------------------------------

    // Chain search query helpers
    // (5)
    const filteredAndSorted = await Person.find({ favoriteFoods: "Hamburger" })
      .sort("name")
      .limit(2)
      .select("-age");
    console.log("Filtered and sorted:", filteredAndSorted);
  } catch (error) {
    console.error(error);
  }

  // ------------------------------------------------------------------------------
};

// Call the async function to start execution
run();
