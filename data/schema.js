import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        language: String
        gender: Gender
        age: Int
        email: String!
        contacts: [Contact]
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Contact {
        firstName: String
        lastName: String
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input ContactsInput {
        firstName: String
        lastName: String
    }

    input FriendInput {
        id: ID,
        firstName: String
        lastName: String
        language: String
        gender: Gender
        age: Int
        email: String
        contacts:[ContactsInput]
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id:ID):String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
