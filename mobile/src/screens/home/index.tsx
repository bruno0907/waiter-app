import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.text}>Waiter App!</Text>
      </View>
    </>
  );
}


