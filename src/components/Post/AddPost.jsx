import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, Button, TextInput, StyleSheet } from 'react-native';

import { setNewPost } from '../../redux/actions/PostActions';

const AddPost = (props) => {
    const dispatch = useDispatch();
    const [newPostContent, setNewPostContent] = useState('');
    const { posts = [] } = useSelector(state => state.post);

    const handleAddNewPostAction = () => {
        dispatch(setNewPost({ id: posts?.length + 1 || 1, content: newPostContent }));
        props.navigation.navigate('Post List');
    };

    return (
        <SafeAreaView>
            <TextInput
                style={styles?.input}
                placeholderTextColor="#9a73ef"
                placeholder='Enter Post Content'
                onChangeText={(postContent) => setNewPostContent(postContent)}
            />
            <Button title='Submit' onPress={handleAddNewPostAction} />
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

export default AddPost;