import { gql } from 'apollo-boost';

export default gql`
query getConversation($user1:ID!, $user2:ID!){
    getConversation(user1:$user1, user2:$user2){
        _id
        body
        createdAt
        sender{
            _id
            pic
            }
        reciever{
            _id
            pic
            }
    }
}
`;
