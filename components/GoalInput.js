import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const goalInput = props => {
    const [newGoal, setNewGoal] = useState('');
    const inputGoalHandler = input => setNewGoal(input);


    const addGoalHandler = () => {
        if (newGoal.length == 0)
            return;
        props.goalAdd(newGoal);
        setNewGoal('');
    };
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputView}>
                <TextInput
                    placeholder="New Goal"
                    style={styles.inputText}
                    onChangeText={inputGoalHandler}
                    value={newGoal} />
                <View style={styles.buttonLayout}>
                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color="red"
                            onPress={props.onCancel}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title="ADD"
                            onPress={addGoalHandler}
                        />
                    </View>


                </View>

            </View>
        </Modal>

    );

};
const styles = StyleSheet.create(
    {
        inputView: {
            flex: 1,
            alignItems: 'center',
            justifyContent: "center",
            

        },
        inputText: {
            borderColor: 'black',
            borderWidth: 1,
            padding: 5,
            width: '80%',
            marginBottom: 10,
            borderRadius: 15
        },
        buttonLayout: {
            flexDirection: 'row-reverse',
            justifyContent: "space-between",
            width: '60%'
        },
        button: {
            width: '40%'
        }
    }
)

export default goalInput;