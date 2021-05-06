import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
    mutation Register($email: String!, $username: String!, $password1: String!, $password2: String!) {
        register(email: $email, username: $username, password1: $password1, password2: $password2) {
            success
            errors
            token
            refreshToken
        }
    }
`;

export const VERIFY_USER = gql`
    mutation VerifyAccount($token: String!) {
        verifyAccount(token: $token) {
            success
            errors
        }
    }
`;

export const LOGIN = gql`
    mutation TokenAuth($username: String!, $password: String!) {
        tokenAuth(username: $username, password: $password) {
            success
            errors
            unarching
            token
            refreshToken
            user {
                id
                username
            }
        }
    }
`;
