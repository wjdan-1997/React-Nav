import { ApolloProvider } from '@apollo/client';
import { StyleSheet } from 'react-native';
import client from './apollo/apolloClient';
import StackNavigations from './navigations/StackNavigations';

export default function App() {
  return <>
    <ApolloProvider client={client}>
      <StackNavigations />
    </ApolloProvider>
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
