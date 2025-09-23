import { View, Text, Button, StyleSheet } from 'react-native';

export default function NameScreen({ navigation }) {
 return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Vitoria Hillary Alarcon</Text>
        <Button style={styles.button}
            title="Image1"
            onPress={() => navigation.navigate('Image1')}
        />
        <Button style={styles.button}
            title="Image2"
            onPress={() => navigation.navigate('Image2')}
        />
        <Button style={styles.button}
            title="Icons"
            onPress={() => navigation.navigate('Icons')}
        />
    </View>
 );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
    titulo: { fontSize: 24, fontWeight: 'bold' },
    button: {width: '100%', maxWidth: 320, paddingVertical: 14, borderRadius: 10, marginTop: 10}
});
