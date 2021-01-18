import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { HomeScreenProps } from '../../types';
import { styles } from './styles';

function HomeScreen({ navigation }: HomeScreenProps) {
  function handlePress() {
    navigation.navigate('QuizScreen');
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text
        style={[styles.commonTextStyles, styles.boldText]}
      >
        Welcome to the Trivia Challenge!
      </Text>

      <Text style={[styles.commonTextStyles]}>
        You will be presented with 10 True or False questions.
      </Text>

      <Text style={[styles.commonTextStyles]}>
        Can you score 100%?
      </Text>

      <Text
        onPress={handlePress}
        style={[styles.commonTextStyles, styles.boldText]}
      >
        BEGIN
      </Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
