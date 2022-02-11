const { User, Student, Class } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
// const { UPDATE_USER } = require('../../client/src/utils/mutations');

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find().populate('student');
    },
    student: async () => {
      return await Student.find().populate('classes');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
        
        // .populate({
        //   path: 'children',
        //   populate: 'children'
        // });

        // Lily's solution
        // .populate('children')
				// .populate({ path:'children', populate: 'classes'});

        //Thank you Ben!
        .populate({ path: "children", populate: { path: "classes" } });

        // another purposed solution:
        // .populate([{path: 'children',
        //   populate: {
        //     path: 'classes',
        //   }},])

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
    addChild: async (parent, args, context) => {
      // create new student
      const student = await Student.create(args);

      if (context.user) {
        const user = await User.findByIdAndUpdate(context.user._id,  { $push: { children: student._id } });
      } else { throw new AuthenticationError('Not logged in!'); }

      return student;
    },
    enrolStudent: async (parent, args) => {
      // enrol a student to a class
      const updatedClass = await Class.findByIdAndUpdate(args.classId,  { $push: { student: args.studentId },  new: true });

      const student = await Student.findByIdAndUpdate(args.studentId,  { $push: { classes: args.classId },  new: true });

      return updatedClass;
    },
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