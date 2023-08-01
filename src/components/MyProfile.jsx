import React from 'react';
import { StyleSheet, Text, SafeAreaView} from 'react-native';


const MyProfile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles?.text}>Name - Gauri Pawar</Text>
            <Text style={styles?.text}>Age - 27</Text>
            <Text style={styles?.text}>Address - ABC -1122, Pune</Text>
            <Text style={styles?.text}>Highest Qualification - B.E</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black'
    },
    text: {
        margin: 20,
        fontSize: 25
    }
});

export default MyProfile;
