import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useState } from 'react';

const Input = ({taskArr,setTaskArr, setOpenTaskInput}) => {
    const [task, setTask] = useState("");

    const handleTaskInput = (taskInput) => {
        setTask(taskInput);
    }

    const handleTaskAddition = (e) => {
        e.preventDefault();
        if (task?.trim().length === 0) {
            Alert.alert('Invalid input', 'Empty tasks are not allowed. Check if you are entering the text in the field! ', [
                {
                    text: 'OK',
                    onPress: () => console.log("ok pressed")
                }
            ]);
            return;
        }
        setTaskArr([...taskArr, task.trim()]);
        setTask("");
        setOpenTaskInput(false);
    }

    return (
        <View style={styles.inputWrapper}>
            <TextInput
                style={styles.textInput}
                maxLength={30}
                value={task}
                onChangeText={handleTaskInput}
                placeholder="Enter your task" />
            <Button
                onPress={handleTaskAddition}
                color="#24e3e0"
                title="Add task" />
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        flex:0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        // backgroundColor: 'white',
        // margin: 6,
        padding: 10,
        borderRadius: 8,
    },
    textInput: {
        width: '70%',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#24e3e0',
        padding: 10,
        backgroundColor:'white',
        borderRadius: 2,
        color: 'black',
        fontSize: 17,
    },
})

export default Input;
