import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const goalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.goalID)}>
            <View style={styles.list}>
                <Text >{props.goalName}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create(
    {
        list: {
            padding: 10,
            marginVertical: 10,
            backgroundColor: '#ccc',
            borderWidth: 1
        }
    }
);
export default goalItem;