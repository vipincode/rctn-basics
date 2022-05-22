import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {flex: 1, }]}>Step One !</Text>
      <Text style={[styles.title, {flex: 1, marginVertical: 15}]}>Step Two !</Text>
      <Text style={[styles.title, {flex: 1, }]}>Step Three !</Text>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dff9fb',
    // paddingHorizontal: 24,
    marginTop: 40,
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#30336b',
    backgroundColor: '#6ab04c',
    // marginVertical: 15
  }
});
