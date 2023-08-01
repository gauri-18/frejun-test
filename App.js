import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import store from './src/redux/store';
import Home from './src/components/Home';
import SignIn from './src/components/SignIn';
import AddPost from './src/components/Post/AddPost';
import PostList from './src/components/Post/PostList';
import PostDetail from './src/components/Post/PostDetail';
import MyProfile from './src/components/MyProfile';
import AddComment from './src/components/Comment/AddComment';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Sign In"
            component={SignIn}
          />
          <Stack.Screen
            name="Post List"
            component={PostList}
          />
          <Stack.Screen
            name="My Profile"
            component={MyProfile}
          />
          <Stack.Screen
            name="Post Detail"
            component={PostDetail}
          />
          <Stack.Screen
            name="Add Post"
            component={AddPost}
          />
          <Stack.Screen
            name="Add Comment"
            component={AddComment}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
