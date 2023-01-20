import { StyleSheet, Alert, FlatList, Text, View, Button, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import TaskCard from './components/TaskCard';

export default function App() {
  // const colors = ["#fafa", "#adad", "#fe8f"];
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const [openTaskInput, setOpenTaskInput] = useState(false);
  const [date, setDate] = useState("");

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
  }

  const handleTaskDeletion = (deleteId) => {
    setTaskArr(
      taskArr.filter((item, index) => index !== deleteId));
    console.log(`Item with id ${deleteId} deleted!`);
  }

  useEffect(() => {
    console.log("App running");
    const date = new Date().toDateString();
    setDate(date);
  }, []);

  return (
    // these are the native elements to the expo rn app, it is diff for ios and android native sdks
    <View style={styles.appWrapper}>
      <Text style={styles.appHeading}>Taskoid'23</Text>
      <Text style={styles.appHint}>
        Taskoid is helping you to stay disciplined and help you with your task management
      </Text>
      <Text style={styles.appHint}>
        Made with love by Suman Roy
      </Text>
      <View style={{marginVertical:20}}>
      <Button
        onPress={() => setOpenTaskInput(!openTaskInput)}
        color="#24e3e0"
        title={openTaskInput ? "Close" : "Add new task"} />
      </View>
      {
        openTaskInput ?
          (
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
          :
          ""
      }

      {
        taskArr?.length > 0 ?
          (
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
          :
          ""
      }
    </View>
  );
}

const styles = StyleSheet.create({
  // using StyleSheet module and using .create to create an object (styling object) which hits an UI element of rn
  appWrapper: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7'
  },
  appHeading: {
    fontSize: 25,
    fontFamily: 'serif',
    padding: 8,
    // backgroundColor:'red',
  },
  appHint: {
    fontSize: 16,
    padding: 8,
    margin: 4
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    backgroundColor: 'white',
    margin: 6,
    padding: 10,
    borderRadius: 8,
  },
  textInput: {
    width: '70%',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#24e3e0',
    padding: 8,
    borderRadius: 8,
    color: 'black',
    fontSize: 17,
  },
  tasksWrapper: {
    flex: 3,
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
