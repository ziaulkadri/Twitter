import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

// const TWITTER_API_URL =
// 	'https://api.twitter.com/1.1/statuses/user_timeline.json';

const TweetList = ({ user }) => {
	const [tweets, setTweets] = useState([]);

	useEffect(() => {
		const fetchTweets = async () => {
			const response = await axios.get(TWITTER_API_URL, {
				params: {
					screen_name: user,
					count: 10, // Replace with the desired number of tweets to display
					tweet_mode: 'extended',
				},
				headers: {
					Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAFt9nAEAAAAAcjXtzju4MZVYsf2P9wnbHtLLsnk%3DSWhyIf5mSnMSIvH2sHxYIVwRUhGMrl44zeMKYYR9SS8ttOzrm9`, // Replace with your Twitter API bearer token
				},
			});
			setTweets(response.data);
		};

		fetchTweets();
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
