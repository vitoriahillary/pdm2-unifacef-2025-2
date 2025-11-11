import React, { useCallback } from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { weekAppointments } from '../data/appointments';

const Row = React.memo(({ item }) => (
  <View style={styles.row}>
    <Text style={styles.rowTime}>{item.time}</Text>
    <Text style={styles.rowTitle}>{item.title}</Text>
  </View>
));

export default function WeekScreen() {
  const renderItem = useCallback(({ item }) => <Row item={item} />, []);
  const renderSectionHeader = useCallback(({ section }) => (
    <Text style={styles.header}>{section.title}</Text>
  ), []);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>Vitoria Hillary Alarcon 24102</Text>
        <Text style={styles.class}>Ciência da Computação 8º Semestre</Text>
      </View>

      <SectionList
        sections={weekAppointments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  header: { fontSize: 20, backgroundColor: '#eee', padding: 10, textAlign: 'center', },
  info: { alignItems: 'center', marginBottom: 10 },
  row: { padding: 15, borderBottomWidth: 0.7, borderColor: '#ddd' },
  rowTime: { fontWeight: '600' },
  rowTitle: { color: '#333' },
});