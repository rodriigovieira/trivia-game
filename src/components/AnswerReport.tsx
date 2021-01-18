import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type AnswerReportProps = {
  correctAnswer: boolean,
  userAnswer: boolean,
  question: string,
}

const styles = StyleSheet.create({
  answersReport: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 40,
  },

  plusOrLessSignStyle: {
    marginRight: 20,
    fontSize: 28,
    width: 20
  },

  answerReportStyleText: {
    fontSize: 20,
  },
});

const AnswerReport = ({
  correctAnswer, userAnswer, question,
}: AnswerReportProps) => {
  const isUserAnswerCorrect = correctAnswer === userAnswer;

  return (
    <View style={styles.answersReport}>
      <Text
        style={
          [styles.plusOrLessSignStyle, {
            color: isUserAnswerCorrect ? 'green' : 'red',
          }]
        }
      >
        {isUserAnswerCorrect ? '+' : '-'}
      </Text>
      <Text style={styles.answerReportStyleText}>{question}</Text>
    </View>
  );
};

export default AnswerReport;
