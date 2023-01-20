import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native-web';

const TaskCard = ({ tsk, handleTaskDeletion, itemId}) => {
    return (
        <>
         <Pressable onPress={()=> handleTaskDeletion(itemId)}>
         <View
                style={styles.taskWrapper}>
            <Text style={styles.taskText}>{tsk}</Text>
            {/* <Button style={styles.closeBtn} title="X" /> */}
        </View>
         </Pressable>
        </>
    )
}
const styles = StyleSheet.create({
    // taskWrapper:(pick)=> {
    //     return {
    //         height: 'auto',
    //         width: '100%',
    //         padding: 10,
    //         margin:7,
    //         backgroundColor:pick,
    //     }
    // },
    taskWrapper: {
        height: 'auto',
        width: '100%',
        padding: 10,
        marginBottom:15,
        borderRadius:2,
        backgroundColor: '#b3f3fc',
    },
    taskText: {
        fontSize: 18
    }
})

export default TaskCard;
