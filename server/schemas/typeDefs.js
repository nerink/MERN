// import gql from apollo server express
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Book {
    authors: [String]
    description: String
    bookId: ID
    image: String
    link: String
    title: String
  }

  input bookInput {
    authors: [String]
    description: String
    bookId: ID
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
 