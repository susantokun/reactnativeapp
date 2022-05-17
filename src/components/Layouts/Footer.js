import React from 'react';
import { Text, View } from 'react-native';

import tw from 'twrnc';

export default function Footer() {
  return (
    <View style={tw`flex items-center justify-center w-full mt-20`}>
      <Text>I am Footer</Text>
    </View>
  );
}
