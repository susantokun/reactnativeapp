import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import tw from 'twrnc';

export default function Header(props) {
  const isDarkMode = useColorScheme() === 'dark';
  const { title } = props;

  return (
    <View style={tw`${isDarkMode ? 'bg-red-400' : 'bg-red-400'} h-24 flex w-full items-center justify-center`}>
      <Text style={tw`${isDarkMode ? 'text-black' : 'text-white'} font-bold`}>{title || 'React Native App'}</Text>
    </View>
  );
}
