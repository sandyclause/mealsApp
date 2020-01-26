import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button title='go to meals' onPress={() => {
        props.navigation.navigate({
          routeName: 'CategoryMeals'
        })
      }} />
    </View>
  )
};

const styles = StyleSheet.create({

});

 export default CategoriesScreen;