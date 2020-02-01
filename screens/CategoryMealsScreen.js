import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoriesScreen from './CategoriesScreen';

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

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  }
}

const styles = StyleSheet.create({

});

 export default CategoryMealsScreen;