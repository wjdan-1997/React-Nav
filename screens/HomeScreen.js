// @ts-ignore
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList, Image, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { imagesSlider } from '../data/imagesSlider';
import { productsCategories } from '../data/prodcutCategories';
// @ts-ignore
import { useLayoutEffect } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { productDeals } from '../data/dealsList';
import { FeaturedProduct } from '../data/featuredProducts';
import { offers } from '../data/offers';
import { useGetProductsQuery } from '../hooks/useQueryHook';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [category, setCategory] = useState("jewelery");
    // const { userId, setUserId } = useContext(UserType);
    const [selectedAddress, setSelectedAdress] = useState("");
    const [productData, setProductData] = useState([])
    const { data, loading, error } = useGetProductsQuery({ variables: { category: 'all' }, skip: false });
    useLayoutEffect(() => {
        if (!loading && !error) {
            setProductData(data && data?.getProducts?.response)
        }
    }, [data, loading]);

    const [items, setItems] = useState([
        { label: "Men's clothing", value: "men's clothing" },
        { label: "jewelery", value: "jewelery" },
        { label: "electronics", value: "electronics" },
        { label: "women's clothing", value: "women's clothing" },
    ]);
    return <>
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0, flex: 1, backgroundColor: "#fff" }}>
            <ScrollView>
                <View style={[styles.section, { backgroundColor: "#6e61e4", flexDirection: "row" }]}>
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 7, gap: 10, height: 38, flex: 1, backgroundColor: '#fff', borderRadius: 3 }}>
                        <FontAwesome style={styles.iconsBttn} name="search" size={24} color="black" />
                        <TextInput placeholder='Waht are you looking for?' />
                    </Pressable>
                    <Ionicons name="md-mic-outline" size={24} color="black" />
                </View>
                <View style={[styles.section, { backgroundColor: "#bfb9f3", flexDirection: "row" }]}>
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 7, gap: 10, height: 38, flex: 1, borderRadius: 3 }}>
                        <Ionicons style={styles.iconsBttn} name="location-outline" size={24} color="black" />
                        <Text>Deliver To Saudi Arabia Riyadh, 125648</Text>
                        <Ionicons name="chevron-down-sharp" size={24} color="black" />
                    </Pressable>
                </View>
                <View style={[styles.section, { backgroundColor: "#fff", flexDirection: "row" }]}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <FlatList
                            data={productsCategories}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <Pressable style={{ margin: 10, flexDirection: 'column', alignItems: 'center', gap: "11" }}>
                                    <Image source={{ uri: item.image }} style={{ width: 50, height: 50, }} />
                                    <Text>{item.name}</Text>
                                </Pressable>
                            )}
                        />
                    </ScrollView>
                </View>
                <View style={[styles.section, { backgroundColor: "#fff", flexDirection: "row" }]}>
                    <SliderBox images={imagesSlider} autoPlay={true} circleLoop={true} dotColor={'#777'} ImageComponentStyle={{ width: '100%' }} />
                </View>

                <Text style={styles.sectionText}> Deals Of The Week</Text>
                <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap", paddingTop: 15 }}>
                    {productDeals.map((item, idx) => <Pressable style={{ marginVertical: 10, flexDirection: "row", alignItems: "center", }}
                        onPress={() => { }}>
                        <Image source={{ uri: item.image }} style={{ width: 180, height: 180, resizeMode: "contain" }} />
                    </Pressable>
                    )}
                </View>
                <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 2, marginTop: 15, marginBottom: 15, }} />
                <View style={{ backgroundColor: "#fff", paddingTop: 15 }}>
                    <Text style={styles.sectionText}> Today's Deals</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {offers.map((item, idx) => <Pressable style={{ marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => navigation.navigate("ProductInfo", { item: item })}>
                            <Image source={{ uri: item.image }} style={{ width: 150, height: 150, resizeMode: "contain" }} />
                            <View style={{ backgroundColor: '#ef7375', marginTop: 10, paddingVertical: 5, width: 130, justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
                                <Text style={{}}>{item.offer}</Text>
                            </View>
                        </Pressable>
                        )}
                    </ScrollView>
                </View>

                <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 2, marginTop: 15, marginBottom: 15, }} />
                <Text style={styles.sectionText}> Featured Products</Text>
                <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap", paddingTop: 15, gap: 11, }}>
                    {FeaturedProduct.map((item, idx) => <Pressable style={{ marginVertical: 10, flexDirection: "row", alignItems: "center", }}
                        onPress={() => navigation.navigate("ProductCategory", { item: item })}>
                        <View style={{ flexDirection: "column", }}>
                            <Image source={item.image} style={{ width: 180, height: 180, resizeMode: "contain", borderRadius: 14 }} />
                            <Text style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 10 }}>{item.name}</Text>
                            <Text style={{ fontSize: 10, color: 'gray' }}>Check out our exclusive collection</Text>
                        </View>
                    </Pressable>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    section: { padding: 10, alignItems: 'center' },
    sectionText: { fontSize: 20, fontWeight: 'bold' },
    iconsBttn: { marginRight: 2, marginLeft: 5 }
})