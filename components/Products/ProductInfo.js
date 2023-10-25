import { Dimensions, FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons, MaterialCommunityIcons, AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-ratings';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
export default function ProductInfo({ navigation, route, }) {
    const item = route.params.item;
    const product = route.params.product;
    const { width } = Dimensions.get("window")
    const height = (width * 100) / 100
    const parts = !!product && product.image.split('3001');
    const fileName = parts[1];

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { value: "UK6(XS)", label: 'UK6(XS)' },
        { value: "UK8(S)", label: 'UK8(S)' },
        { value: "UK10(M/S)", label: 'UK10(M/S)' },
        { value: "UK12(M)", label: 'UK12(M)' },
        { value: "UK14(L)", label: 'UK14(L)' },
        { value: "UK16(XL)", label: 'UK16(XL)' },
    ]);
    const calculateAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) { return 0; }
        const totalRating = reviews.reduce((acc, review) => acc + parseInt(review.rating), 0); return totalRating / reviews.length;
    };
    const averageRating = calculateAverageRating(product && product.reviews);

    return <>
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <View>
                <View style={[styles.section, { backgroundColor: "#6e61e4", flexDirection: "row" }]}>
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 7, gap: 10, height: 38, flex: 1, backgroundColor: '#fff', borderRadius: 3 }}>
                        <FontAwesome style={styles.iconsBttn} name="search" size={24} color="black" />
                        <TextInput placeholder='Waht are you looking for?' />
                    </Pressable>
                    <Ionicons name="md-mic-outline" size={24} color="black" />
                </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {!!item ? <>
                    {item.carouselImages.map((item, index) =>
                        <ImageBackground style={{ width, height, marginTop: 25, resizeMode: "contain" }} source={{ uri: item }} key={index} >
                            {/* <View style={{ padding: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", }} >
                                <View style={[styles.itemContainer, { backgroundColor: "#C60C30", }]} >
                                    <Text style={{ color: "white", textAlign: "center", fontWeight: "600", fontSize: 12, }} >
                                        {route.params.item.offer}
                                    </Text>
                                </View>

                            </View> */}

                            <View style={[styles.itemContainer, { backgroundColor: "#f21f24b3", marginTop: "auto", marginLeft: 20, marginBottom: 20, }]} >
                                <Text style={{ color: "white", textAlign: "center", fontWeight: "600", fontSize: 12, }} >
                                    {route.params.item.offer}
                                </Text>
                            </View>
                        </ImageBackground>
                    )}
                </>
                    : <ImageBackground style={{ width, height, marginTop: 25, resizeMode: "contain" }} source={{ uri: `http://192.168.8.124:3001${fileName}` }}  >
                        {product.discount ? <View style={[styles.itemContainer, { backgroundColor: "#f21f24b3", marginTop: "auto", marginLeft: 20, marginBottom: 20, }]} >
                            <Text style={{ color: "white", textAlign: "center", fontWeight: "600", fontSize: 12, }} >
                                <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold', }}>{product.discount}% Off</Text>
                            </Text>
                        </View> :
                            <View style={{ backgroundColor: "#E0E0E0", width: 220, height: 20, borderBottomRightRadius: 20, justifyContent: "center", alignItems: "center", flexDirection: "row", }} >
                                <Text style={{ color: "#000", textAlign: "center", fontWeight: "bold", fontSize: 12, }} >
                                    NEW
                                </Text>
                            </View>
                        }
                    </ImageBackground>
                }
            </ScrollView>
            <View style={styles.items}>
                <View style={{ padding: 10, backgroundColor: "#000", color: '#fff' }}>
                    <Text style={{ color: '#fff' }}>Best Seller</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center', justifyContent: 'flex-end', }}>
                    <View style={[styles.itemContainer, { backgroundColor: "#e9e9e9", marginTop: "auto", }]} >
                        <Feather name="share" size={24} color="black" />
                    </View>
                    <View style={[styles.itemContainer, { backgroundColor: "#e9e9e9", marginTop: "auto", }]} >
                        <AntDesign name="hearto" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View style={styles.items}>
                <View style={{ padding: 10, flexDirection: 'column', gap: 3 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 15 }}>COOL & {'Color Full' || route.params.item.color}</Text>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 11 }}>Desgined React Native Cor component</Text>
                    <Text style={{ color: '#777', fontWeight: 'bold', fontSize: 11 }}>WE_2345</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 6 }}>
                <AirbnbRating
                    count={5}
                    defaultRating={averageRating || !!item && item.rating}
                    size={20}
                    showRating={false}
                    isDisabled
                />
                <Text style={styles.ratingText}>
                    ({averageRating || !!item && item.rating || 0} ratings)
                </Text>
            </View>
            {!!product && product.size &&
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 6 }}>
                    <View style={{ marginHorizontal: 10, marginTop: 40, width: "45%", marginBottom: open ? 50 : 15, }} >
                        <DropDownPicker style={{ borderColor: "#B7B7B7", height: 'auto', marginBottom: open ? 120 : 15, }}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            zIndex={3000}
                            zIndexInverse={1000}
                        />
                    </View>
                </View>
            }
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 12, paddingBottom: 22, padding: 11 }}>
                <View style={{ flex: 1, padding: 10, backgroundColor: "#E0E0E0", flexDirection: 'row', gap: 5 }}>
                    {!!product && product.discount || !!item ?
                        <>
                            <Text style={{ color: '#000', fontSize: 12, fontWeight: 'bold', textDecorationLine: 'line-through' }}>SAR {!!product && product.price || item.oldPrice} </Text>
                            <Text style={{ fontSize: 12, lineHeight: 13, color: '#df1e22', fontWeight: 'bold' }}>SAR {!!product && product.discountedPrice || item.price} </Text>
                        </> :
                        <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold', }}>SAR {!!product ? product.price : route.params.item.price} </Text>
                    }
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Pressable style={{ flex: 1, backgroundColor: "#6e61e4", justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#fff' }}>Add To Cart</Text>
                    </Pressable>
                </View>
            </View>
            {/* <View>
                <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />
                <View style={{ padding: 10 }}>
                    <Text style={{ color: "#00CED1", fontWeight: 'bold' }}>FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins</Text>
                    <View style={{ flexDirection: "row", marginVertical: 5, alignItems: "center", gap: 5, }} >
                        <Ionicons name="location" size={24} color="black" />
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>Deliver To Saudi Arabia - Riyadh, 125648</Text>
                    </View>
                </View>
                <Text style={{ color: "green", marginHorizontal: 10, fontWeight: "500" }}> IN Stock </Text>
                <Pressable
                    onPress={() => addItemToCart(route?.params?.item)}
                    style={{ backgroundColor: "#FFC72C", padding: 10, borderRadius: 20, justifyContent: "center", alignItems: "center", marginHorizontal: 10, marginVertical: 10, }} >
                    {addedToCart ? (
                        <View>
                            <Text>Added to Cart</Text>
                        </View>
                    ) : (
                        <Text>Add to Cart</Text>
                    )}
                </Pressable>
                <Pressable style={{ backgroundColor: "#FFAC1C", padding: 10, borderRadius: 20, justifyContent: "center", alignItems: "center", marginHorizontal: 10, marginVertical: 10, }} >
                    <Text>Buy Now</Text>
                </Pressable>
            </View> */}
        </ScrollView >
    </>
}

const styles = StyleSheet.create({
    itemContainer: { width: 40, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", flexDirection: "row", },
    section: { padding: 10, alignItems: 'center' },
    items: { padding: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12 },
    sectionText: { fontSize: 20, fontWeight: 'bold' },
    iconsBttn: { marginRight: 2, marginLeft: 5 },
    ratingText: { marginLeft: 5, color: 'gray', fontSize: 14, },
})