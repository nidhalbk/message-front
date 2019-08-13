import { gql } from 'apollo-boost';

const GET_ALL_MESSAGES = gql`
    query getMessagesForConversation($id:ID!){
        getMessagesForUser(id:$id){
            _id
            body
            sender{userName}
            reciever{userName}
            createdAt
        }
    }
`;
export default GET_ALL_MESSAGES;
