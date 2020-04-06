class Friend {
  constructor(id, { firstName, lastName, gender, language, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
  }
}

const friendDatabase = {};

const resolvers = {
  getFriend: ({id}) => {
    return new Friend(id, friendDatabase[id]);
  },
  // friend: () => {
  //   return {
  //     id: 654654,
  //     firstName: 'Manny',
  //     lastName: 'Henri',
  //     gender: "Male",
  //     language: "English",
  //     email: [
  //       { email: "me@me.com" },
  //       { email: "another@me.com" }
  //     ]
  //   }
  // },
  createFriend: ({ input }) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    friendDatabase[id] = input;
    return new Friend(id, input);
  }
};

export default resolvers;