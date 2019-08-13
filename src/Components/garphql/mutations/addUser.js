import { gql } from 'apollo-boost';

const ADD_USER = gql`
mutation addUser($name:String!,$userName:String!,$pic:String){
    createUser(data:{name:$name,userName:$userName,pic:$pic,onLine:true}){
        _id
        name
        userName
        onLine
        pic
        createdAt
        updatedAt
    }
}
`;
export default ADD_USER;
