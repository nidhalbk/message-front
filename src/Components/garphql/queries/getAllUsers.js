import { gql } from 'apollo-boost';

const GET_ALL_USERS = gql`
  query {
    getAllUser {
      name
      userName
      onLine
      pic
      _id
    }
  }
`;
export default GET_ALL_USERS;
