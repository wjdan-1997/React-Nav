import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet } from 'react-native';
import TweetContent from './TweetContent';

export default function Tweet(props) {
  const { navigate } = useNavigation()
  return (
    <Pressable onPress={() => { navigate("tweetDetails", { tweet: props.tweet }) }}>
      <TweetContent tweet={props.tweet} />
    </Pressable>
  )
}

const styles = StyleSheet.create({})