import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

export function AddSkill ({ skill }) {
    return(
            <TouchableOpacity
            key={skill}
            style= {styles.buttonSkill}
            >
              <Text
               style= { [styles.skill, ] }
               >
               {skill}
              </Text> 
            </TouchableOpacity>   
    )
}

const styles = StyleSheet.create({
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