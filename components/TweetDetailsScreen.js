import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import TweetContent from './TweetContent'

export default function TweetDetailsScreen() {
    const route = useRoute()
    const nav = useNavigation()
    const { params } = route
    useLayoutEffect(() => {
        nav.setOptions({
            headerTitle: params.tweet.author.name
        });
    }, [])
    return (
        <SafeAreaView>
            <TweetContent tweet={params.tweet} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})