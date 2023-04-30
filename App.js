import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TweetList from './src/TweetList';

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<TweetList user="elonmusk" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
