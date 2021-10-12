const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const getVoters = (array) =>
  array.reduce(
    (acc, current) => {
      if (current.age >= 18 && current.age <= 25) {
        return {
          ...acc,
          numYoungVotes: current.voted
            ? acc.numYoungVotes + 1
            : acc.numYoungVotes,
          numYoungPeople: acc.numYoungPeople + 1,
        };
      } else if (current.age >= 26 && current.age <= 35) {
        return {
          ...acc,
          numMidVotesPeople: current.voted
            ? acc.numMidVotesPeople + 1
            : acc.numMidVotesPeople,
          numMidPeople: acc.numMidPeople + 1,
        };
      } else if (current.age >= 36 && current.age <= 55) {
        return {
          ...acc,
          numOldVotesPeople: current.voted
            ? acc.numOldVotesPeople + 1
            : acc.numOldVotesPeople,
          numOldPeople: acc.numOldPeople + 1,
        };
      }
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidPeople: 0,
      numOldVotesPeople: 0,
      numOldPeople: 0,
    }
  );

console.log(getVoters(voters));
