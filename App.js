import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const goalAddHandler = (newGoal) => {
    setGoalsList(goals => [...goalsList, { key: Math.random().toString(), value: newGoal }]);
    setAddMode(false);
  };
  const removeGoalHandler = goalID => {
    setGoalsList(goal => {
      return goalsList.filter(goal => goal.key !== goalID);
    });
  };
  const cancelHandler = () => setAddMode(false);

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setAddMode(true)} />
      <GoalInput visible={addMode} goalAdd={goalAddHandler} onCancel={cancelHandler}/>
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
      padding: 70
    },
  }
);
