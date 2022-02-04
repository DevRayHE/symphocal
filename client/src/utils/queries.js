import { gql } from '@apollo/client';

export const QUERY_CLASSES = gql`
  classes() {
    _id
    name
    description
    date
    startTime
    duration
    capacity
    cost
    room
    student {
      _id
      firstName
      lastName
      dateOfBirth
    }
  }
`;

export const QUERY_STUDENT = gql`
  student() {
    _id
    firstName
    lastName
    dateOfBirth
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      mobile
      postCode
      email
      children {
        _id
        firstName
        lastName
        dateOfBirth
      }
    }
  }
`;

