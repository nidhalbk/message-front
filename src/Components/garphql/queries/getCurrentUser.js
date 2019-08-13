import { gql } from 'apollo-boost';

const CURRENT_USER = gql`
query GetCurrentUser {
    currentUser @client {
        user {
            __typename
            _id
            name
            userName
            pic
            onLine
        }

    }
}
`;
export default CURRENT_USER;
