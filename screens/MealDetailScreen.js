import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meal deals Screen</Text>
      <Button
        title='go back to categories'
        onPress={() => {
          props.navigation.popToTop()
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({

});

 export default MealDetailScreen;