import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import CommentList from '../Comment/CommentList';

const PostDetail = ({ route, navigation }) => {
    const { params = {} } = route;

    return (
        <SafeAreaView style={styles?.post}>
            <Text style={styles?.content}>{params?.content}</Text>
            <Text style={styles?.commentSection}>Comments</Text>
            <CommentList postId={params?.id} navigate={navigation?.navigate} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    post: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height: '100%'
    },
    commentSection: {
        fontSize: 25,
        paddingTop: 15,
        paddingBottom: 15
    },
    content: {
        fontSize: 32,
        backgroundColor: '#0CF5F1'
    }
});

export default PostDetail;