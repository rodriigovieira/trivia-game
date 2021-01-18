import React from 'react';
import {
  ScrollView, Text, View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnswerReport from '../../components/AnswerReport';
import { AnswerReportType, ResultScreenProps } from '../../types';
import { styles } from './styles';

const ResultScreen = ({ navigation, route }: ResultScreenProps) => {
  const handlePress = () => {
    navigation.navigate('HomeScreen');
  };

  const answerReports: AnswerReportType[] = route.params?.answerReports

  const getScore = (): number => {
    let currentScore = 0;

    answerReports?.forEach((answerReport) => {
      const isUserAnswerCorrect = answerReport.correctAnswer === answerReport.userAnswer;

      if (isUserAnswerCorrect) currentScore += 1;
    })

    return currentScore;
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.rootContainer}>
        <View>
          <Text style={styles.headlineText}>You scored</Text>
          <Text style={styles.headlineText}>{getScore()} / 10</Text>
        </View>

        <View style={styles.answerReportContainer}>
          {answerReports.map((answerReport: AnswerReportType) => (
            <AnswerReport
              key={answerReport.id}
              correctAnswer={answerReport.correctAnswer}
              userAnswer={answerReport.userAnswer}
              question={answerReport.question}
            />
          ))}
        </View>

        <Text
          style={styles.playAgainTextStyle}
          onPress={handlePress}
        >
          PLAY AGAIN?
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ResultScreen;
