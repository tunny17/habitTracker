import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useAuth } from './authContext';

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const { signIn, signUp } = useAuth();
  const router = useRouter();

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleAuth = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setError(null);

    if (isSignUp) {
      const error = await signUp(email, password);
      if (error) {
        setError(error);
      }
    } else {
      const error = await signIn(email, password);
      if (error) {
        setError(error);
      }

      router.replace('/');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-[#f5f5f5] flex-col"
    >
      <View className="flex flex-col gap-3 p-10 justify-center">
        <Text className="mb-5 text-3xl w-full font-semibold text-center">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </Text>

        <TextInput
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
          mode="outlined"
          onChangeText={setEmail}
        />

        <TextInput
          label="Password"
          autoCapitalize="none"
          secureTextEntry
          mode="outlined"
          onChangeText={setPassword}
        />

        {error && <Text className="text-red-500 text-center my-2">{error}</Text>}

        <Button mode="contained" onPress={handleAuth}>
          {isSignUp ? 'Sign up' : 'Sign in'}
        </Button>

        <Button mode="text" onPress={handleSwitchMode} className="mt-2">
          {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
