import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<any>([]);

  const addTask = () => {
    if (task.length > 0) {
      setTaskList([...taskList, { id: Math.random().toString(), value: task } ]);
      setTask('');
    }
  };

  const removeTask = (taskId: any) => {
    setTaskList(taskList.filter((task: any) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TextInput
        placeholder="Digite sua tarefa"
        style={styles.input}
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Adicionar Tarefa" onPress={addTask} />
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <TouchableOpacity onPress={() => removeTask(itemData.item.id)}>
            <View style={styles.taskItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  taskItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
