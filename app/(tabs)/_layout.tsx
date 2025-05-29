import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import { StatusBar } from 'react-native';

export default function TabsLayout() {
  return (
    <>
      <StatusBar hidden={true} />
      <Tabs screenOptions={{ tabBarActiveTintColor: 'tomato' }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome name="home" color={color} size={20} />
          }}
        />
        <Tabs.Screen
          name="Login"
          options={{
            title: 'Login',
            tabBarIcon: ({ color }) => <FontAwesome5 name="door-open" size={20} color={color} />
          }}
        />
      </Tabs>
    </>
  );
}
