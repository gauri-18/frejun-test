import { StyleSheet, Text, SafeAreaView } from 'react-native';

import UserAuthorisation from './UserAuthorisation';

const Home = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles?.welcomeMsg}>Welcome</Text>
            <UserAuthorisation navigate={props.navigation.navigate} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black'
    },
    welcomeMsg: {
        margin: 20
    }
});

export default Home;
