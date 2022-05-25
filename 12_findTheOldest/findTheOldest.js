const findTheOldest = (people) => {
  let currentYear = new Date().getFullYear();
  return people
    .map((person) => {
      if (!person.yearOfDeath) {
				person.age = currentYear - person.yearOfBirth;
      } else {
				person.age = person.yearOfDeath - person.yearOfBirth;
      }
      return person;
    })
    .sort((a, b) => {
      return a.age > b.age ? -1 : 1;
    })[0]
};
// Do not edit below this line
module.exports = findTheOldest;
