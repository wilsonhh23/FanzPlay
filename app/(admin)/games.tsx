import { Link, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import AdminGameCard from '../../components/AdminGameCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useGames from '../../services/gamesFetcher';
import { LinearGradient } from 'expo-linear-gradient';

const auth = FIREBASE_AUTH;

const GamesPage = () => {
    const router = useRouter();
    const { games, loading: gamesLoading } = useGames();
    const [text, onChangeText] = React.useState('');

    return (
        <View style={styles.background}>
            <LinearGradient colors={['#000000', '#253031']} style={styles.gradient}>
                <ScrollView contentContainerStyle={styles.games}>
                    {games.map((game, index) => (
                        <AdminGameCard key={index} game={game} />
                    ))}
                </ScrollView>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    gradient: {
        flex: 1
    },
    games: {
        justifyContent: 'flex-start',
        alignItems: 'center', // Ensure the games are centered in the scroll view
    }
});

export default GamesPage;