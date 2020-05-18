import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, FlatList, ImageBackground } from 'react-native';

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
      
        <View style={styles.container}>
          <ImageBackground style={styles.img} source={{ uri: "https://www.wallpapermaiden.com/image/2018/11/13/green-leaves-close-up-plants-26872.jpeg" }}>
            <Text style={styles.text}>TODO APP</Text>
          </ImageBackground>

        </View>
        <View style={styles.input}>
          <Text style={styles.inptTxt}>What are you planning today?</Text>
          <View style={styles.button}>
            <Button color='white' title="ADD" onPress={() => setAddMode(true)} />
          </View>
        </View>
      
      <GoalInput visible={addMode} goalAdd={goalAddHandler} onCancel={cancelHandler} />
      <View style={styles.list}>
        <FlatList
          data={goalsList}
          renderItem={goal => <GoalItem goalID={goal.item.key} onDelete={removeGoalHandler} goalName={goal.item.value} />}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create(
  {
    screen: {
      flex: 1,
      
    },
    img: {
      height: '100%',
      width: '100%'
    },
    text: {
      color: 'white',
      textAlign: 'center',
      fontSize: 34,
      paddingVertical: 100

    },
    container: {
      height: 200,
      width: '100%'
    },
    input: {
      flexDirection: 'row',
      borderColor: 'black',
      borderWidth: 1,
      alignSelf: 'center',
      overflow: 'hidden',
      borderRadius: 20,
      alignItems: 'center',
      width: '69%',
      marginTop: 30
    },
    inptTxt: {
      fontSize: 16,
      padding: 8,
      textAlign: "center",
    },
    button: {
      backgroundColor: '#daa520'
    }
  }
);
