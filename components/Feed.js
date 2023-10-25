import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
 
import { useNavigation } from '@react-navigation/native'
import assets from '../assets'
import Tweet from './Tweet'
import { tweets } from '../data/tweets'
export default function Feed() {
    const navigate = useNavigation()
    useLayoutEffect(() => {
        navigate.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigate.openDrawer()}>
                    <Image
                        source={assets.icons.avatar}
                        style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
                    />
                </Pressable>
            ),
        });
    }, []);
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={tweets.slice(0.30)}
                keyExtractor={(item) => { return item.id }}
                renderItem={({ item }) => { return <Tweet tweet={item} /> }}

                ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    divider: {
        width: "100%",
        height: StyleSheet.hairlineWidth,
        backgroundColor: "#DDD",
    },
})