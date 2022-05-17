import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function Header(props) {
  const { title } = props;
  return (
    <View style={tw`bg-red-400 h-24 flex w-full items-center justify-center`}>
      <Text style={tw`text-gray-800 font-bold`}>{title || 'React Native App'}</Text>
    </View>
  );
}
