import React, { useEffect } from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    Text,
    Button
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CommentItem from './CommentItem';
import { setCommentData } from '../../redux/actions/PostActions';

const CommentList = ({ postId, navigate }) => {
    const dispatch = useDispatch();
    const { comments = [] } = useSelector(state => state.post);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(commentsData => dispatch(setCommentData(commentsData)));
    }, []);

    const handleAddNewCommentAction = () => {
        navigate('Add Comment');
    };

    return (
        <SafeAreaView style={styles?.commentContainer}>
            {comments.length ?
                <FlatList
                    data={comments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <CommentItem comment={item} />}
                /> :
                <Text>No comments</Text>
            }
            <Button
                style={styles?.button}
                title='+ Add New Comment'
                onPress={handleAddNewCommentAction} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    commentContainer: {
        flex: 1,
        marginTop: 10
    },
    comment: {
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9c2ff'
    },
    content: {
        fontSize: 32,
    },
    button: {
        alignSelf: 'flex-end'
    }
});

export default CommentList;