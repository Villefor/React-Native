import React, {useState} from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Platform, 
  TextInput ,
  TouchableOpacity,
} from 'react-native';
import { AddSkill } from '../components/AddSkill';
import { Button } from '../components/Button';

export function Home () {

  const [newSkill, setSkill] = useState();
  const [skills, setMySkills] = useState([]);

 const handleSkill = () => {
    setMySkills(addedSkills => [...addedSkills, newSkill])
    setSkill('')
  }

  return (
    <View style={ styles.container }>

      <Text style={ styles.title }>React App</Text>

      <TextInput 
        style={ styles.input }
        placeholder="New Skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={setSkill}
      />

      <Button 
        onPress={handleSkill}

      />

      <Text 
      style= { [styles.title, { marginVertical: 50 }] }
      >
      Skills List
      </Text> 

      {
        skills.map(skill => (
          <AddSkill skill= {skill}/>
        )) 
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 15,
    marginTop: 30,
    borderRadius: 7,
  },
  skill: {
    color: '#fff',
    backgroundColor: '#1F1E25',
    padding: 5,
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 5,
    borderRadius: 50,
    marginTop: 10,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
})