import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function Image2Screen({ navigation }) {
 return (
 <View style={styles.container}>
 <Text style={styles.titulo}>Image 2</Text>
 <Image source={require('../assets/cat1.jpg')} style={styles.imagem} />
 <Button title="Voltar" onPress={() => navigation.goBack()} />
 </View>
 );
}

const styles = StyleSheet.create({
 container: { backgroundColor: 'pink', flex: 1, justifyContent: 'center', alignItems: 'center' },
 titulo: { fontSize: 24, color: '#007AFF' },
 imagem: { width: 200, height: 200, resizeMode: 'contain' }
});
