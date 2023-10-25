import React from 'react';
import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const avatar = (author) => {
  const imageUrl = author.avatar.replace("_normal", "");
  return <Image style={styles.avatar} source={{ uri: imageUrl }} />;
}
const tweetAction = (retweets, comments, likes) => {
  const theme = useColorScheme();
  return <>
    <View style={[styles.rowAction, styles.actionBar]}>
      <View style={styles.elementAction}>
        <EvilIcons
          style={styles.actionBttn}
          name='comment'
          size={22}
          color={'#000'}
        />
        <Text style={styles.actionText}>{comments}</Text>
      </View>
      <View style={styles.elementAction}>
        <EvilIcons
          style={styles.actionBttn}
          name='retweet'
          size={22}
          color={'#000'}
        />
        <Text style={styles.actionText}>{retweets}</Text>
      </View>
      <View style={styles.elementAction}>
        <EvilIcons
          style={styles.actionBttn}
          name='heart'
          size={22}
          color={'#000'}
        />
        <Text style={styles.actionText}>{likes}</Text>
      </View>
      <View style={styles.elementAction}>
        <EvilIcons
          style={styles.actionBttn}
          name='like'
          size={22}
          color={'#000'}
        />
      </View>
    </View>
  </>
}
export default function TweetContent({ tweet }) {
  const theme = useColorScheme();

  return (
    <View style={styles.singleItem}>
      <View style={styles.row}>
        {avatar(tweet.author)}
        <View style={styles.tweetContentContainer}>
          <View style={styles.rowTop}>
            <Text numberOfLines={1} style={[styles.header, { color: theme === "dark" ? "#000" : "#000" },]}>{tweet.author.name}</Text>
            <Text style={[styles.author, styles.grayText]} numberOfLines={1}>
              @{tweet.author.screenName}.
            </Text>
            <Text style={[styles.author, styles.grayText]} numberOfLines={1}>
              6h
            </Text>
          </View>
          <Text>{tweet.fullText}</Text>
          <View style={styles.rowAction}>
            {tweetAction(
              tweet.retweetCount,
              tweet.replyCount,
              tweet.favoriteCount
            )}
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  singleItem: { paddingHorizontal: 16, minHeight: 44, flex: 1, padding: 16 },
  row: { flexDirection: "row" },
  author: { flexShrink: 1 },
  avatar: { height: 44, width: 44, borderRadius: 22, marginRight: 16, flexShrink: 0, marginTop: 4 },
  tweetContentContainer: { flexShrink: 1, flexGrow: 1 },
  rowTop: { flexDirection: "row", },
  header: { fontSize: 14, fontWeight: 'bold', paddingRight: 4, paddingBottom: 4, color: "#ccc" },
  grayText: { color: "#777", fontSize: 13, paddingRight: 2 },

  rowAction: { flexGrow: 1, justifyContent: 'space-between', flexDirection: 'row' },
  actionBar: { marginTop: 8, justifyContent: 'space-between', marginRight: 8 },
  actionText: { fontSize: 12, color: '#444' },
  actionBttn: { width: 18, height: 18, marginRight: 8 },
  elementAction: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }
})