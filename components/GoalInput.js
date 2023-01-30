import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native'
import {useState} from 'react'


function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
      };
    
      function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
      }

      console.log('works')

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <Image 
          style={styles.image} 
          source={require('../assets/images/goal.png')} 
        />
        <TextInput style={styles.textInput} placeholder='course goal' onChangeText={goalInputHandler} value={enteredGoalText} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title='add goals' onPress={addGoalHandler} color='#b180f0' />
        </View>
        <View style={styles.button}>
        <Button title='cancel' onPress={props.onCancel} color='#f31282' />
        </View>
      </View>
      </View>
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        padding: 16,
        
        backgroundColor: '#311b6b'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 6,
        width: '95%',
        backgroundColor: '#e4d0ff',
        padding: 16,
        color: '#120438'
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
});