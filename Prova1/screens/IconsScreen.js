import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function IconsScreen() {
 return (
     <View style={styles.container}>
        <View style={styles.row}>
            <FontAwesome name="home" size={40} color="blue" />
            <AntDesign name="apple" size={40} color="black" />
            <Ionicons name="settings" size={40} color="gray" />
        </View>
    </View>
 );
}
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', alignItems: 'center',  },
 row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    width: '100%',
  },
});
