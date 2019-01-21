import gql from 'graphql-tag';

export default gql`
mutation loginUser($user: UserLoginInput) {
  loginUser(user: $user) {
    firstName
    id
    jwt
    lastName
    role
  }
}
`;
