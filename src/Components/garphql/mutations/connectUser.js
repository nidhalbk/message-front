import { gql } from 'apollo-boost';

const CONNECT_USER = gql`
mutation connectUser($id: ID!, $name:String!, $userName: String!, $pic: String, $onLine: String){
  connectUser(__typename:"currentUser",user:{_id:$id, name:$name, userName:$userName, pic:$pic, onLine:$onLine}) @client
}
`;
export default CONNECT_USER;
