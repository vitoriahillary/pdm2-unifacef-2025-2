import React, { useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { dayAppointments } from '../data/appointments';

const Item = React.memo(({ item }) => (
  <View style={styles.card}>
    <Text style={styles.time}>{item.time}</Text>
    <Text style={styles.title}>{item.title}</Text>
  </View>
));

export default function DayScreen() {
  const renderItem = useCallback(({ item }) => <Item item={item} />, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>11/11 (terca)</Text>
        <Text style={styles.name}>Vitoria Hillary Alarcon 24102</Text>
        <Text style={styles.class}>Ciência da Computação 8º Semestre</Text>
      </View>

      <FlatList
        data={dayAppointments}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        initialNumToRender={5}
        windowSize={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { alignItems: 'center', marginBottom: 10 },
  container: { flex: 1, padding: 10 },
  card: { backgroundColor: '#fff', padding: 10, marginVertical: 8, borderRadius: 20, elevation: 1 },
  title: { color: '#333' },
});