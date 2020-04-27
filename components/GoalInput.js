import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const goalInput = props => {
    const [newGoal, setNewGoal] = useState('');
    const inputGoalHandler = input => setNewGoal(input);

    return (
        <View style={styles.inputView}>
            <TextInput
                placeholder="New Goal"
                style={styles.inputText}
                onChangeText={inputGoalHandler}
                value={newGoal} />
            <Button
                title='ADD'
                onPress={props.goalAdd.bind(this, newGoal)} />
        </View>
    );

};
const styles = StyleSheet.create(
    {
        inputView: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        inputText: {
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            padding: 5,
            width: '80%'
        }
    }
)

export default goalInput;