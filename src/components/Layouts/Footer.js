import React from 'react';
import { Text, View, useColorScheme } from 'react-native';

import tw from 'twrnc';

export default function Footer() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={tw`${isDarkMode ? 'bg-red-400' : 'bg-red-400'} flex items-center justify-center w-full py-1 border-t border-red-500`}>
      <Text style={tw`${isDarkMode ? 'text-black' : 'text-white'} text-xs font-medium`}>I am Footer</Text>
    </View>
  );
}
