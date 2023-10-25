import { Text, FlatList, Pressable, View } from 'react-native'
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export const GET_USERS = gql`
query {
  getUsers { 
    message response {      
      userID
      firstname
      lastname
      email
      joinedAt
    }
  }
}
`
export const GET_USERSx = gql`
query getUsers{
    getUsers { 
     response {      
      userID
      firstname
      lastname
      email
      joinedAt
    }
  }
}
`
export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;
export default function HomeScreen() {
    const { data, loading ,error} = useQuery(GET_USERS);  
    console.log(data.getUsers)
    const ContinentItem = ({ continent }) => {
        const { name, code } = continent;  

        return (
            <Pressable>
                <Text>{name}</Text> 
            </Pressable>
        );
    };

    if (loading) {
        return <Text>Fetching data...</Text>  
    }

    return (
        // <FlatList
        //     data={data.getProducts.response}
        //     renderItem={({ item }) => <View><Text>Hello</Text></View>}
        //     keyExtractor={(item, index) => index}
        // />
        <></>
    );
}

