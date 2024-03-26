import { View, Text, StyleSheet } from 'react-native';
import { Game } from '../types/Game';
import { Team } from '../types/Team';
import React from 'react';
import { BarChart, Grid } from 'react-native-svg-charts';

interface LeaderboardScreenProps {
    game: Game;
    team: Team;
    playerScore: number;
    currentQuestion: number;
}

const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({
    game,
    team,
    playerScore,
    currentQuestion,
}) => {
    const team1Score = game.team1score / game.team1responses * 100;
    const team2Score = game.team2score / game.team2responses * 100;

    const data = [
        {
            value: team1Score,
            svg: { fill: game.team1.color1 },
            label: game.team1.name,
        },
        {
            value: team2Score,
            svg: { fill: game.team2.color1 },
            label: game.team2.name,
        },
    ];

    return (
        <View style={[styles.container, styles.dark]}>
            <View style={styles.header}>
                <Text style={styles.leaderboardText}>Leaderboard</Text>
            </View>
            <Text style={styles.answerText}>
                The correct answer to the previous question was:
            </Text>
            <Text style={styles.answer}>
                {game.questions[currentQuestion].answers[game.questions[currentQuestion].correctAnswer]}
            </Text>
            <Text style={styles.currentScoreText}>Current Standings:</Text>
            <BarChart
                style={styles.chart}
                data={data}
                yAccessor={({ item }) => item.value}
                svg={{ fill: 'grey' }}
                contentInset={{ top: 30, bottom: 30 }}
                gridMin={0}
            >
                <Grid direction={Grid.Direction.HORIZONTAL} />
            </BarChart>
            <View style={styles.scoreLabels}>
                {data.map((item, index) => (
                    <Text key={index} style={styles.scoreText}>
                        {item.label}: {item.value.toFixed(2)}%
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    dark: {
        backgroundColor: '#253031',
    },
    header: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginBottom: 10,
    },
    leaderboardText: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
    },
    answerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400',
        marginTop: 10,
        marginBottom: 10,
    },
    answer: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '400',
        marginBottom: 20,
        fontSize: 20,
    },
    currentScoreText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 10,
    },
    chart: {
        height: 200,
        width: '100%',
        marginBottom: 10,
    },
    scoreLabels: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    scoreText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        margin: 5,
    },
});

export default LeaderboardScreen;