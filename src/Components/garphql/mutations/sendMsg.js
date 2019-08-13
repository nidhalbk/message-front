import { gql } from 'apollo-boost';

const SEND_MSG = gql`
    mutation createMessage($body: String!, $sender:ID!, $reciever:ID!){
        createMessage(data:{body: $body, sender: $sender, reciever:$reciever}){
            body
            sender{
                _id
                userName
            }
            reciever{
                _id
                userName
            }
            createdAt
        }
    }
`;

export default SEND_MSG;
