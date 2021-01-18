import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 80,
  },

  headlineTextStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  questionSquare: {
    padding: 50,
    paddingVertical: 80,
    borderColor: 'black',
    borderWidth: 1,
  },

  questionTextStyle: {
    fontSize: 28,
    textAlign: 'center',
  },

  answerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  answerTextStyle: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  trueTextStyle: {
    color: 'green',
  },

  falseTextStyle: {
    color: 'red',
  },

  progressTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
