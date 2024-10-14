import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import uuid from 'react-native-uuid';

const App = () => {
  //inputun icerisinde ki deger
  const [todo, setTodo] = useState('');
  //eklenilen todolar
  const [todos, setTodos] = useState([]);

  const saveTodos = saveTodo => {
    try {
      AsyncStorage.setItem('todos', JSON.stringify(saveTodo));
    } catch (error) {
      console.log(error);
    }
  };

  //add butonuna basildiginda calisacak olan fonksiyon
  const addTodo = () => {
    //yeni bir todo objesi olurstur ve todo stateine aktar
    setTodos([...todos, {id: uuid.v4(), text: todo}]);
    saveTodos();
  };
  console.log(todos);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.headerText}>React Native Async Storage</Text>

        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={text => setTodo(text)}
            placeholder="Type a Todo"
            style={styles.input}
          />
          <TouchableOpacity
            onPress={addTodo}
            style={[styles.button, styles.addButton]}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={todos}
          keyExtractor={item => item?.id.toString()}
          renderItem={({item}) => (
            <View style={styles.todoItem}>
              <Text style={{color: '#000000'}}>{item?.text}</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.deleteButton]}>
                    <Text style={styles.buttonText}> Delete</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.updateButton]}>
                    <Text style={styles.buttonText}> Update</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderRadius: 10,
    borderColor: 'gray',
  },
  button: {
    marginLeft: 10,

    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  buttonText: {
    color: 'white',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  buttonContainer: {},
  deleteButton: {
    padding: 10,
    backgroundColor: 'red',
  },
  updateButton: {
    backgroundColor: 'green',
    padding: 10,
  },
});
