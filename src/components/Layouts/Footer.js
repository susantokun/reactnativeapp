import React from 'react';
import { Text, View, useColorScheme } from 'react-native';

import tw from 'twrnc';

export default function Footer() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={tw`${isDarkMode ? 'bg-blue-400 border-blue-500' : 'bg-red-400 border-red-500'} flex items-center justify-center w-full py-1 border-t`}>
      <Text style={tw`${isDarkMode ? 'text-black' : 'text-white'} text-xs font-medium`}>I am Footer</Text>
    </View>
  );
}
