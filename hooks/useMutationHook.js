import { ApolloError, useMutation, useQuery, ApolloLink, Operation, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export function useMutationHook({ mutation, url, refetchQueries, refetchVariables, accessToken }) {
    const [mutationRes, { data, error, loading }] = useMutation(mutation, {
        // re-render the UI
        refetchQueries: refetchQueries,
    });
    let responseData = {
        status: true,
        responseBody: {},
        message: '',
        token: ''
    };
    const authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        const token = localStorage.getItem('Admin-Authorization');
        console.log("setContext TOKEN :: :: :: ", token)
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${token}`,
            }
        }
    }); // NOT EMPLEMNTED YET;
    
    const executeMutation = async (variables) => {
        try {
            const { data } = await mutationRes({
                variables,
                context: authLink,
            });
            // Extract the response data for the specified endpoint
            const { [url]: { token, response, message } } = data;
            responseData.responseBody = response;
            responseData.status = true;
            responseData.message = message;
            responseData.token = token;

            console.log('Response Data:', responseData);
            return responseData;
        } catch (error) {
            if (error instanceof ApolloError) {
                // Handle ApolloError (GraphQL error)
                responseData.status = false;
                responseData.message = error.message; // Capture the error message
            } else {
                // Handle other types of errors
                responseData.status = false;
                responseData.message = 'An error occurred';
            }
            console.error('Response Error:', responseData);
            return responseData;
        }
    };
    return { executeMutation, data, error, loading };
}

