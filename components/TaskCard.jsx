import { Appearance, View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native-web';

const TaskCard = ({ tsk, handleTaskDeletion, itemId }) => {

    const colorScheme = Appearance.getColorScheme();
    // console.log(colorScheme);

    return (
        <>
            <View
                style={styles.taskWrapper(colorScheme)}>
                <Pressable android_ripple={{color:'#ffffff'}} onPress={() => handleTaskDeletion(itemId)}>
                    <Text style={styles.taskText}>{tsk}</Text>
                    {/* <Button style={styles.closeBtn} title="X" /> */}
                </Pressable>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    taskWrapper: (colorScheme) => {
        return {
            height: 'auto',
            width: '100%',
            marginBottom: 15,
            borderRadius: 2,
            backgroundColor: '#24e3e0'
        }
    },
    taskText: {
        padding: 10,
        fontSize: 16
    }
})

export default TaskCard;
