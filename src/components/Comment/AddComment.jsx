import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, Button, TextInput, StyleSheet } from 'react-native';

import { setNewComment } from '../../redux/actions/PostActions';

const AddComment = (props) => {
    const dispatch = useDispatch();
    const [newCommentContent, setNewCommentContent] = useState('');
    const { comments = [] } = useSelector(state => state.post);

    const handleAddNewCommentAction = () => {
        dispatch(setNewComment({ id: comments?.length + 1, content: newCommentContent }));
        props.navigation.navigate('Post List');
    };

    return (
        <SafeAreaView>
            <TextInput
                style={styles?.input}
                placeholderTextColor="#9a73ef"
                placeholder='Enter Comment Content'
                onChangeText={(commentContent) => setNewCommentContent(commentContent)}
            />
            <Button title='Submit' onPress={handleAddNewCommentAction} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        minWidth: 300,
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 1,
        padding: 10
    }
});

export default AddComment;