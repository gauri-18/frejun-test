import React, { useEffect } from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import PostItem from './PostItem';
import { setPostData } from '../../redux/actions/PostActions';

const PostList = (props) => {
    const dispatch = useDispatch();
    const { route = {} } = props;
    const { posts = [] } = useSelector(state => state.post);

    const fetchPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(postsData => dispatch(setPostData(postsData)));
    };

    useEffect(() => {
        fetchPost();
    }, []);

    useEffect(() => {
        if (route?.params?.refreshPost) {
            fetchPost();
        }
    }, [route?.params?.refreshPost]);

    const handleAddNewPostAction = () => {
        props.navigation.navigate('Add Post');
    };

    const handleMyProfileAction = () => {
        props.navigation.navigate('My Profile');
    };

    return (
        <>
            <SafeAreaView style={styles.buttonsContainer}>
                <View style={styles.parent}>
                    <Button
                        title='My Profile'
                        onPress={handleMyProfileAction}
                    />
                    <Button
                        title='+ Add New Post'
                        onPress={handleAddNewPostAction}
                    />
                </View>
            </SafeAreaView>
            <SafeAreaView style={styles.postContainer}>
                {posts.length ?
                    <FlatList
                        data={posts}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <PostItem
                                post={item}
                                navigate={props.navigation.navigate}
                            />
                        }
                    /> :
                    <Text>No posts available.</Text>
                }
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        height: '20%',
    },
    parent: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 20,
        paddingBottom: 20
    },
    postContainer: {
        height: '80%'
    },
    post: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    content: {
        fontSize: 32
    }
});

export default PostList;