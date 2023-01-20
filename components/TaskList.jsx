import React, { useEffect, useState } from 'react';
import { StyleSheet, Text,FlatList, View } from 'react-native';
import TaskCard from './TaskCard';

const TaskList = ({taskArr, setTaskArr}) => {
    const [date, setDate] = useState("");

    const handleTaskDeletion = (deleteId) => {
        setTaskArr(
        taskArr.filter((item, index) => index !== deleteId));
        console.log(`Item with id ${deleteId} deleted!`);
    }

    useEffect(() => {
        setDate(new Date().toDateString());
    }, []);

    return (
        <View style={styles.tasksWrapper}>
            <Text style={styles.tasksDate}>{date}</Text>
            <FlatList
                style={{ width: '100%' }}
                data={taskArr}
                renderItem={(itemObj, index) => {
                    return (
                        <>
                            <TaskCard
                                // our arr element is wrapped with obj by flatlist internally
                                handleTaskDeletion={handleTaskDeletion}
                                key={index}
                                itemId={itemObj.index}
                                tsk={itemObj.item} />
                        </>
                    )
                }} />
        </View>
    )
}
const styles = StyleSheet.create({
    tasksWrapper: {
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        borderRadius: 8,
    },
    tasksDate: {
        fontSize: 18,
        margin: 10,
    }
});

export default TaskList;
