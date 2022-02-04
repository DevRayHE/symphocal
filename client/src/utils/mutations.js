import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!,
    $lastName: String!,
    $mobile: String!,
    $postCode: String!,
    $email: String!,
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      mobile: $mobile
      postCode: $postCode
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String!,
    $lastName: String!,
    $mobile: String!,
    $postCode: String!,
    $email: String!,
    $password: String!
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      mobile: $mobile
      postCode: $postCode
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;