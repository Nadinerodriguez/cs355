require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new Schema({
  name: { 
    type: String, 
    required: true },
  age: Number,
  favoriteFoods: [String]
});
const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const data = { 
    name: "Nadine", 
    age: 21, 
    favoriteFoods: ["Chicken", "Paste", "Sushi", "Pizza"] }
  const person = new Person({ name: data.name, age: data.age, favoriteFoods: data.favoriteFoods });
  person.save(data, (err, dataPerson) => {
    return err ? done(err) : done(null, dataPerson);
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, dataPerson) => {
    return err ? done(err) : done(null, dataPerson);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, arrayOfPeople) => {
    return err ? done(err) : done(null, arrayOfPeople);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    return err ? done(err) : done(null, person);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, (err, person) => {
    return err ? done(err) : done(null, person);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById({ _id: personId }, (err, data) => {
    if (err) return console.log(err);
    data.favoriteFoods.push(foodToAdd);
    data.save((err, newData) => {
      if (err) done(err);
      done(null, newData);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    {name: personName},
    {$set: {age: ageToSet}},
    {"new": true},
    (err, data) => {
      err ? done(err) : done(null, data);
    });
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, data) => err ? done(err) : done(null, data));
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, out) => {
    err ? done(err) : done(null, out);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods: foodToSearch})
    .sort({name: 1})
    .limit(2)
    .select({age: 0})
    .exec((err, nextDdata) => {
      err ? done(err) : done(null, nextDdata)
    });
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
