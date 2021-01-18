/**
 * All types related to the navigation
 * and its screens are in this file.
 */
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// QuizScreen Props
type QuestionType = {
  question: string,
  correctAnswer: string,
  category: string,
}

// Define screens and their params
export type RootStackParamList = {
  HomeScreen: undefined,
  QuizScreen: QuestionType | undefined,
  ResultScreen: { answerReports: AnswerReportType[] },
};

// Route Props
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;
type QuizScreenRouteProp = RouteProp<RootStackParamList, 'QuizScreen'>;
type ResultScreenRouteProp = RouteProp<RootStackParamList, 'ResultScreen'>;

// Navigation Props
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;
type QuizScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'QuizScreen'
>;
type ResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ResultScreen'
>;

// Exporint Props
export type HomeScreenProps = {
  route: HomeScreenRouteProp,
  navigation: HomeScreenNavigationProp
};
export type QuizScreenProps = {
  route: QuizScreenRouteProp,
  navigation: QuizScreenNavigationProp
};
export type ResultScreenProps = {
  route: ResultScreenRouteProp,
  navigation: ResultScreenNavigationProp
};

// Other types
export type AnswerReportType = {
  correctAnswer: boolean,
  userAnswer: boolean,
  question: string,
  id: string,
}

// Modelling API's response
export type AnswerFromAPIType = {
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
  question: string,
  type: string,
}

