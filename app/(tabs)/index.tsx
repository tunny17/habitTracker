import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Link href={'/Login'} asChild className="border px-5 py-2 rounded-md">
        <TouchableOpacity>
          <Text className="text-4xl">Login</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
