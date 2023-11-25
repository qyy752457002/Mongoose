const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true })
  .then(() => {
    // All database operations should be performed inside this block

    // establish a fruitSchema
    const fruitSchema = new mongoose.Schema( {
        name: String,
        rating: Number,
        review: String
    }); 

    // estabish a Fruit mongoose model
    const Fruit = mongoose.model("Fruit", fruitSchema);

    // estabish a fruit object
    const fruit = new Fruit ({
        name: "Apple",
        rating: 7,
        review: "Peaches are so yummy!"
    }); 

    // fruit.save()
    //   .then(() => {
    //     console.log("Fruit saved successfully!");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // establish a personSchema
    const personSchema = new mongoose.Schema ( {
        name: String,
        age: Number,
        favouriteFruit: fruitSchema
    }); 

    // estabish a Person mongoose model
    const Person = mongoose.model("Person", personSchema);

    // establish a mango Fruit object
    const mango = new Fruit({
        name: "Mango",
        score: 6,
        review: "Decent fruit."
    });

    // establish a pineapple Fruit object
    const pineapple = new Fruit({
        name: "Pineapple",
        score: 9,
        review: "Great fruit."
    });

    // estabish a person Person object
    const person = new Person({
        name: "Amy",
        age: 12,
        favouriteFruit: pineapple
    });

    // person.save()
    //   .then(() => {
    //     console.log("Person saved successfully!");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // pineapple.save()
    //   .then(() => {
    //     console.log("Pineapple saved successfully!");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    mango.save()
      .then(() => {
        console.log("Mango saved successfully!");
      })
      .catch((err) => {
        console.log(err);
      });

    Fruit.updateOne({name: "John"}, {favouriteFruit: mango})
        .then((result) => {
          console.log("Successfully updated the document!");
        })
        .catch((err) => {
          console.log(err);
        });

    const kiwi = new Fruit({
        name: "Kiwi",
        score: 10,
        review: "The best fruit!"
    });
    
    const orange = new Fruit({
        name: "Orange",
        score: 4,
        review: "Too sour for me"
    });
    
    const banana = new Fruit({
        name: "Banna",
        score: 3,
        review: "Weird texture"
    });
    
    // Fruit.insertMany([kiwi, orange, banana])
    //     .then(() => {
    //         console.log("Successfully saved all the fruits to fruitsDB");
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });

    Fruit.find({})
        // fulfillment handler 
        .then((fruits) => {
            fruits.forEach((fruit) => {
                console.log(fruit.name);
            });
        })
        // rejection handler 
        .catch((err) => {
            console.log(err);
        });

    // Fruit.updateOne({ _id: "65615e7c45c6dd5e62e4c3f2" }, { name: "Peach" })
    //     .then((result) => {
    //       console.log("Successfully updated the document!");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });

    // Fruit.deleteOne({ name: "Peach" })
    //     // fulfillment handler 
    //     .then((result) => {
    //         console.log("Successfully deleted the document");
    //     })
    //     // rejection handler 
    //     .catch((err) => {
    //         console.log(err);
    //     });

    // Person.deleteMany({ name: "John" })
    //     // fulfillment handler 
    //     .then((result) => {
    //         console.log("Successfully deleted all the document");
    //     })
    //     // rejection handler 
    //     .catch((err) => {
    //         console.log(err);
    //     });

  })
  .catch((err) => {
    console.log(err);
  });