import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.mainTitle, {color: 'green'}]}>Vipin Singh APP !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    marginTop: 40,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'tomato',
  }
});
