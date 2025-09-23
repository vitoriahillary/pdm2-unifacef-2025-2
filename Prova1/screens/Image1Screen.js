import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function Image1Screen({ navigation }) {
 return (
 <View style={styles.container}>
 <Text style={styles.titulo}>Image 1</Text>
<Image
 source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
 style={{ width: 100, height: 100 }}
/>
 <Button title="Voltar" onPress={() => navigation.goBack()} />
 </View>
 );
}

const styles = StyleSheet.create({
 container: { backgroundColor: 'pink', flex: 1, justifyContent: 'center', alignItems: 'center' },
 titulo: { fontSize: 24, color: '#007AFF' }
});
