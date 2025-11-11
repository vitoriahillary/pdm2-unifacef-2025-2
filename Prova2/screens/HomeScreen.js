import React from 'react';
import { View, Text, Button, StyleSheet, useWindowDimensions } from 'react-native';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      <Text>Vitoria Hillary Alarcon 24102</Text>
      <Text>Ciência da Computação 8 Semestre</Text>

      <View style={styles.buttons}>
        <Button title="Compromissos do Dia" onPress={() => navigation.navigate('Dia')} />
      </View>

      <View style={styles.buttons}>
        <Button title="Compromissos da Semana" onPress={() => navigation.navigate('Semana')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', gap: 10, paddingTop: 20 },
  title: { fontSize: 15, fontWeight: 'bold' },
  banner: { backgroundColor: '#f0f0f0', marginVertical: 10 },
  buttons: { width: '80%', marginVertical: 8 },
});