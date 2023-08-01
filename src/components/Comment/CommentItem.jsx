import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CommentItem = ({ comment }) => {
    return (
        <View style={styles.comment}>
            <Text style={styles?.content}>{`${comment?.id} - ${comment?.content}`}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    comment: {
        padding: 10,
        backgroundColor: '#0CC4F5'
    },
    content: {
        fontSize: 25
    }
});

export default CommentItem;