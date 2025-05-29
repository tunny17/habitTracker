import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../authContext';

export default function Index() {
  const { signOut } = useAuth();
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

      <TouchableOpacity onPress={signOut} className="border px-5 py-2 rounded-md mt-5">
        <Text className="text-4xl">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
