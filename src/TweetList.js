import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// import axios from 'axios';

// const TWITTER_API_URL =
// 	'https://api.twitter.com/1.1/statuses/user_timeline.json';
var Token =
	'AAAAAAAAAAAAAAAAAAAAAFt9nAEAAAAAHi8c%2B3HymzAUxGxBNE6FEEF7slM%3Dc1AiHxdsh9cqaSSkSJqICPjVWZ36HM0zrNGw4LUrL4KCxjvigL';

const TweetList = ({ user, count }) => {
	const [tweets, setTweets] = useState([]);

	useEffect(() => {
		const fetchTweetsFromUser = async () => {
			const response = await fetch(
				`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}&count=${count}`,
				{
					headers: {
						Authorization: `Bearer ${Token}`,
					},
				}
			);
			const json = await response.json();
			setTweets(json);
			console.log(json);
		};

		fetchTweetsFromUser();
	}, []);

	const renderItem = ({ item }) => (
		<View style={styles.tweet}>
			<Text style={styles.tweetText}>{item.full_text}</Text>
			<Text style={styles.tweetDate}>{item.created_at}</Text>
		</View>
	);

	return (
		<FlatList
			data={tweets}
			keyExtractor={(item) => item.id_str}
			renderItem={renderItem}
		/>
	);
};

const styles = StyleSheet.create({
	tweet: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	tweetText: {
		fontSize: 16,
		lineHeight: 20,
	},
	tweetDate: {
		fontSize: 12,
		color: '#666',
		marginTop: 5,
	},
});

export default TweetList;
