import { gql } from 'apollo-boost';

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      name
      userName
      onLine
      pic
    }
  }
`;
export default GET_USER;
