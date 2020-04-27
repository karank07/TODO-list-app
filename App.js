import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  
  const goalAddHandler = (newGoal) => {
    setGoalsList(goals => [...goalsList, { key: Math.random().toString(), value: newGoal }]);
  };
  const removeGoalHandler = goalID =>{
    setGoalsList(goal=>{
      return goalsList.filter(goal => goal.key !== goalID);
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput goalAdd={goalAddHandler}/>
      <FlatList
        data={goalsList}
        renderItem={goal => <GoalItem goalID={goal.item.key} onDelete={removeGoalHandler} goalName={goal.item.value} />}
      />
    </View>
  );
}


const styles = StyleSheet.create(
  {
    screen: {
      padding: 50
    },
  }
);
