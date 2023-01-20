import { StyleSheet, View, Button } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TaskList from './components/TaskList';
import { StatusBar } from 'expo-status-bar';

export default function App(){
  //top level state
  const [taskArr, setTaskArr] = useState([]);
  const [openTaskInput, setOpenTaskInput] = useState(false);

  console.log("App running");

  return (
    // these are the native elements to the expo rn app, it is diff for ios and android native sdks
   <>
   <StatusBar style="dark"/>
    <View style={styles.appWrapper}>
      <Header />
      <View style={{ marginVertical: 20 }}>
        <Button
          onPress={() => setOpenTaskInput(!openTaskInput)}
          color="#24e3e0"
          title={openTaskInput ? "Close" : "Add new task"} />
      </View>
      {
        openTaskInput ?
          <Input
            setOpenTaskInput={setOpenTaskInput}
            setTaskArr={setTaskArr}
            taskArr={taskArr}
          /> : ""
      }
      {
        taskArr?.length > 0 ?
          <TaskList 
          setTaskArr={setTaskArr}
          taskArr={taskArr}/> : ""
      }
    </View>
   </>
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
});
