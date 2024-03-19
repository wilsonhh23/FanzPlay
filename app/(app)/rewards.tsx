import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const RewardsPage = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 2,
                    marginBottom: 5
                }}
            >
                <Text style={styles.prizes}>My Rewards</Text>
            </View>
            <Image
                source={require('../../assets/mock_rewards.png')}
                style={styles.image}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#253031',
        padding: 20
    },
    image: {
        margin: 15
    },
    prizes: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
        padding: 5,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        width: 360
    }
});

export default RewardsPage;