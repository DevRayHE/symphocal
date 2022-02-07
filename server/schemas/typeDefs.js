const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Student {
    _id: ID 
    firstName: String 
    lastName: String 
    dateOfBirth: String
  }

  type User {
    _id: ID
    firstName: String 
    lastName: String 
    mobile: String 
    postCode: String 
    email: String
    children: [Student]
  }

  type Class {
    _id: ID 
    name: String 
    description: String 
    date: String 
    startTime: String 
    duration: Int 
    capacity: Int 
    cost: Int 
    room: Int
    student: [Student]
  }

  type Auth {
    token: ID 
    user: User
  }

  type Query {
    classes: [Class]
    student: [Student]
    user: User
  }

  type Mutation {
    createUser(
      firstName: String!,
      lastName: String!,
      mobile: String!,
      postCode: String!,
      email: String!,
      password: String!
    ): Auth
  
    updateUser(
      firstName: String!,
      lastName: String!,
      mobile: String!,
      postCode: String!,
      email: String!
    ): User

    login(
      email: String!,
      password: String!
    ): Auth

    addChild(
      firstName: String!,
      lastName: String!,
      dateOfBirth: String!
    ): Student

    enrolStudent(
      classId: ID,
      studentId: ID
    ): Class
  }
`;

module.exports = typeDefs;