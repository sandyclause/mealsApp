import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Button title='go to details' onPress={() => {
        props.navigation.navigate({
          routeName: 'MealDetail'
        })
      }} />
      <Button 
        title='Go back'
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({

});

 export default CategoryMealsScreen;