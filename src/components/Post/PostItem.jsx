import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

const PostItem = ({ navigate, post }) => {
    const handlePostClick = (currentPost) => {
        navigate('Post Detail', currentPost);
    };

    return (
        <View style={styles?.post}>
            <Text style={styles?.content} onPress={() => handlePostClick(post)}>{post?.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    post: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    content: {
        fontSize: 32,
    }
});

export default PostItem;