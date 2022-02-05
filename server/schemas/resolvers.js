const { User, Student, Class } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find().populate('student');
    },
    student: async () => {
      return await Student.find();
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'children',
          populate: 'children'
        });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return { token, user };
    },
    // TODO: addChild: async (parent, args) => {

    // },
    updateUser: async (parent, args, context) => {
      if (context.User) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in!');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user) {
        throw new AuthenticationError('Incorrect email');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user);

      return { token, user};
    }
  }
};

module.exports = resolvers;