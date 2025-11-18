import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      <Text style={styles.ident}>[Seu nome]</Text>
      <Text style={styles.ident}>[Sua turma]</Text>
      <View style={styles.spacing}></View>
      <Button
        title="Compromissos do dia"
        onPress={() => navigation.navigate('Compromissos do dia')}
      />
      <Button
        title="Compromissos da semana"
        onPress={() => navigation.navigate('Compromissos da semana')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  ident: {
    textAlign: 'center'
  },
  spacing: {
    marginBottom: 50
  }
});
