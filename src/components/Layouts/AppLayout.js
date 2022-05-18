import React from 'react';
import { View, ScrollView } from 'react-native';

import tw from 'twrnc';

import Header from './Header';
import Footer from './Footer';

export default function AppLayout(props) {
  const { children } = props;

  return (
    <View style={tw`bg-red-500 h-full flex w-full`}>
      <ScrollView>
        <Header />
        <View style={tw`bg-green-500`}>
          { children }
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
