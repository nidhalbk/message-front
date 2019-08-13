import { gql } from 'apollo-boost';

const GET_ALL_CONVERSATION = gql`
    query getAllConversation($user:ID!){
        getAllConversation(user:$user){
            _id
            participants {
                _id
                name
                pic
                userName
                onLine
            }
        }
    }
`;
export default GET_ALL_CONVERSATION;
