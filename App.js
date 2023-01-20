import { StyleSheet, ScrollView, FlatList, Text, View, Button, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import TaskCard from './components/TaskCard';

export default function App() {
  useEffect(() => {
    console.log("Running app");
  }, []);
  // const colors = ["#fafa", "#adad", "#fe8f"];
  // states for our tasks
  const [task, setTask] = useState("");
  // state management for tasks
  const [taskArr, setTaskArr] = useState([]);

  const handleTaskInput = (textInput) => {
    setTask(textInput);
  }

  const handleTaskAddition = (e) => {
    e.preventDefault();
    setTaskArr([...taskArr, task]);
    setTask("");
  }

  const handleTaskDeletion = (deleteId) => {
    setTaskArr(
      taskArr.filter((item,index) => index !== deleteId));
    console.log(`Item with id ${deleteId} deleted!`);
  }

  return (
    // these are the native elements to the expo rn app, it is diff for ios and android native sdks
    <View style={styles.appWrapper}>
      <Text style={styles.appHeading}>Create your tasks</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          maxLength={30}
          value={task}
          onChangeText={handleTaskInput}
          required
          placeholder="Enter your task" />
        <Button
          onPress={handleTaskAddition}
          style={styles.btn}
          title="Add task" />
      </View>

      <View style={styles.tasksWrapper}>
        <Text style={styles.tasksHeading}>Your tasks</Text>
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
    fontSize: 24,
    fontFamily: 'serif',
    padding: 10,
    // backgroundColor:'red',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  btn: {
    padding: 10
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 9,
    marginRight: 4,
    borderRadius: 8,
    color: 'black',
    fontSize: 17,
  },
  tasksWrapper: {
    flex: 5,
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
  tasksHeading: {
    fontSize: 20,
    marginBottom: 12,
  }
});
