import React from 'react';
import {
TouchableOpacity,
Text,
StyleSheet
} from 'react-native';

export function SkillCard({title}){
  return (
  <TouchableOpacity 
  style={styles.buttonSkill}
  activeOpacity={0.7}
  onPress={() => {}}
  >
    <Text style={styles.textSkill}>
      {title}
    </Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
buttonSkill:{
  backgroundColor: '#1f1e25',
  padding: 20,
  borderRadius: 50,
  alignItems: 'center',
  marginBottom: 10,
},
textSkill: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
}
})