let findTheOldest = function (people) {
    people.sort((a, b) => {
        return a.yearOfBirth - b.yearOfBirth;
    })
    return people[0];
}

module.exports = findTheOldest

