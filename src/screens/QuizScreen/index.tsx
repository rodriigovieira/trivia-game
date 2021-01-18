import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, Alert, Text, View, SafeAreaView,
} from 'react-native';

import { ApiURL } from '../../constants';
import { AnswerReportType, QuizScreenProps, AnswerFromAPIType } from '../../types';
import { styles } from './styles';
import {decodeHTMLEntities} from "../../utils/decode-html-entity"

let questions: AnswerFromAPIType[] = [];
let answerReports: AnswerReportType[] = [];

const QuizScreen = ({ navigation }: QuizScreenProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const currentQuestionText = decodeHTMLEntities(questions[currentQuestion]?.question)

  const handlePress = (userAnswer: boolean) => {
    if (answerReports.length === questions.length) return;
    
    const correctAnswer: boolean = questions[currentQuestion]?.correct_answer === "True"

    const answerReport: AnswerReportType = {
      id: String(currentQuestion),
      question: currentQuestionText,
      correctAnswer,
      userAnswer,
    }

    answerReports.push(answerReport)

    if (currentQuestion >= questions.length - 1) {
      return navigation.navigate('ResultScreen',
        {answerReports: answerReports}
      );
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const showErrorDialog = () => {
    Alert.alert(
      'Error',
      'There was an error fetching the information from the server. Please check your network connection or try again later.',
      [{
        onPress: navigation.goBack,
        text: 'Close',
      }],
    );
  }

  useEffect(() => {
    answerReports = [];

    fetch(ApiURL, {
      headers: {
        contentType: "application/json; charset=utf-8",
      }
    })
      .then(async (res) => {
        if (res.status === 200) {
          const data = await res.json();
          questions = data?.results;

          setLoading(false);
        } else {
         showErrorDialog();
        }
      })
      .catch(() => {
        showErrorDialog();
      });
  }, []);

  if (loading) {
    return (
      <View
        style={[styles.rootContainer, { justifyContent: 'center' }]}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text style={styles.headlineTextStyle}>
        {questions[currentQuestion]?.category}
      </Text>

      <View>
        <View style={styles.questionSquare}>
          <Text style={styles.questionTextStyle}>
            {currentQuestionText}
          </Text>
        </View>

        <Text style={styles.progressTextStyle}>
          {currentQuestion + 1}
          {' '}
          of 10
        </Text>
      </View>

      <View style={styles.answerContainer}>
        <Text
          onPress={() => handlePress(true)}
          style={[styles.answerTextStyle, styles.trueTextStyle]}
        >
          True
        </Text>

        <Text
          onPress={() => handlePress(false)}
          style={[styles.answerTextStyle, styles.falseTextStyle]}
        >
          False
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;
