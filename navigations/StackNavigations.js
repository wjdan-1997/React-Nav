import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Pressable, View } from 'react-native';

import React from 'react';

import assets from '../assets';
import ProductDetail from '../components/Products/ProductDetail';
import ProductInfo from '../components/Products/ProductInfo';
import ProductList from '../components/Products/ProductList';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WishlistScreen from '../screens/WishlistScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer"
import SimpleDrawer from '../components/SimpleDrawer';
import { AddressTab, Dashboard, OrdersTab } from '../components/ProfileTopTabs';
import Feed from '../components/Feed';
import TweetDetailsScreen from '../components/TweetDetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator()

function SettengDrawer() {
    const navigate = useNavigation()
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: "right",
            }}
            drawerContentOptions={{
                activeTintColor: 'red',
                itemStyle: { marginVertical: 5 },
            }} >
            <Drawer.Screen name='ProfileTabs' component={ProfileTopTab} options={{
                headerShown: true,

            }} />
            <Drawer.Screen name='SimpleDrawer' component={SimpleDrawer} options={{ headerShown: true }} />
        </Drawer.Navigator>
    );
}

function ProfileTopTab() {
    return <TopTab.Navigator screenOptions={{
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" },
        tabBarIndicatorStyle: { height: 2, borderRadius: 5, backgroundColor: 'black' }
    }}>
        <TopTab.Screen name="Orders Tab" component={OrdersTab} />
        <TopTab.Screen name="Dashboard" component={Dashboard} />
        <TopTab.Screen name="Address Tab" component={AddressTab} />
    </TopTab.Navigator>
}
function ProductTopTab() {
    return <TopTab.Navigator screenOptions={{
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" },
        tabBarIndicatorStyle: { height: 2 , backgroundColor: 'black' },
    }}>
        <TopTab.Screen name="Home" component={HomeScreen} />
        <TopTab.Screen name="Women" component={HomeScreen} />
        <TopTab.Screen name="Men" component={HomeScreen} />
        <TopTab.Screen name="ForYou" component={Feed} />
    </TopTab.Navigator>
}

function HomeBttnTabNavigation() {
    const navigate = useNavigation()
    return <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, focused, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    return <Image source={{ uri: "https://assets.stickpng.com/thumbs/5a32ba09cb9a85480a628fdf.png" }} style={{ width: 35, height: 50 }} />
                }
                if (route.name === 'Cart') { iconName = focused ? "shopping" : "shopping-outline" }
                if (route.name === 'Wishlist') { iconName = focused ? "cards-heart" : 'cards-heart-outline' }
                if (route.name === 'Profile') { iconName = focused ? 'account-circle' : 'account-circle-outline' }
                if (route.name === 'Search') { iconName = focused ? "card-search" : "card-search-outline" }

                return <MaterialCommunityIcons name={iconName} size={22} color={focused ? "#6e61e4" : "#777"} />
            },
            tabBarActiveTintColor: "#6e61e4"
        })}
    >
        <Tab.Screen name="Home" component={ProductTopTab} options={{ headerShown: true, }} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Search" component={CartScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
        <Tab.Screen name="Profile" component={SettengDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="tweetDetails" component={TweetDetailsScreen} options={{ presentation: 'card' }} />

    </Tab.Navigator>
}

const StackNavigations = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={HomeBttnTabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="ProductCategory" component={ProductList} options={{ title: 'Products' }} />
            <Stack.Screen name="ProductInfo" component={ProductInfo} options={{ title: 'ProductInfo' }} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Product Detail' }} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default StackNavigations