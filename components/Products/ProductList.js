import React, { useContext, useLayoutEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Circle } from 'react-native-progress';
import UserContext from '../../context/UserContext';
import { useGetProductsQuery } from '../../hooks/useQueryHook';
import { FontAwesome, Ionicons, MaterialCommunityIcons, AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
export default function ProductList({ navigation, route, props }) {
  const item = route.params.item
  console.log(" navigation, route  ============= ", item)

  const [productData, setProductData] = useState([])
  const { data, loading, error } = useGetProductsQuery({ variables: { category: item.url }, skip: false });
  useLayoutEffect(() => {
    if (!loading && !error) {
      setProductData(data && data?.getProducts?.response)
    }
  }, [data, loading]);
  console.log(productData)
  const renderProductItem = ({ item }) => {
    const parts = item.image.split('3001');
    const fileName = parts[1];
    return <>
      <Pressable onPress={() => navigation.push("ProductInfo", { product: item })}>
        <View style={styles.productContainer}>
          <View>
            <ImageBackground source={{ uri: `http://192.168.8.124:3001${fileName}` }} style={{ width: 150, height: 150, resizeMode: 'contain' }} >
              <View style={[{
                width: 40, height: 40, borderRadius: 20, justifyContent: "center",
                alignItems: "center", flexDirection: "row", backgroundColor: "#e9e9e9cf",
                marginTop: "auto",
              }]} >
                <AntDesign name="hearto" size={24} color="black" />
              </View>
            </ImageBackground>
            <View style={{ flexDirection: 'column', marginTop: 10, gap: 5 }}>
              <Text style={{ width: 150 }}>{item.name}</Text>
              {item.discount ?
                <>
                  <Text style={{ fontSize: 14, lineHeight: '15px', color: 'black', fontWeight: 'bold' }}>SAR {item.discountedPrice} </Text>
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Text style={{ color: '#128a09', fontSize: 12, fontWeight: 'bold', textDecorationLine: 'line-through' }}>SAR {item.price} </Text>
                    <Text style={{ color: '#bc0025', fontSize: 12, fontWeight: 'bold', }}>{item.discount}% Off</Text>
                  </View>
                </> :
                <Text style={{ paddingBottom: 21, color: '#000', fontSize: 12, fontWeight: 'bold', }}>SAR {item.price} </Text>
              }
            </View>
            <View style={{ justifyContent: 'center', paddingTop: 10, }}>
              <Pressable onPress={() => console.log(" Pressed == <> :: ", item._id)} style={{ padding: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: "#6e61e4" }}>
                <Text style={{ color: "#fff" }}>Add To Cart</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Pressable>
    </>
  }
  return loading || error ? <Circle size={80} indeterminate={true} borderWidth={4} showsText={true} textStyle={styles.textStyle} />
    : <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
          <FlatList
            data={productData}
            numColumns={2}
            renderItem={renderProductItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    </>
}
const styles = StyleSheet.create({
  productContainer: { marginHorizontal: 20, marginVertical: 25, alignItems: 'center' },

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  productImage: {
    width: 150,
    height: 150,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});