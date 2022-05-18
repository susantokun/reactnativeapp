import React from 'react';
import { View, ScrollView, useColorScheme } from 'react-native';

import tw from 'twrnc';

import Header from './Header';
import Footer from './Footer';

export default function AppLayout(props) {
  const { children } = props;
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={tw`${isDarkMode ? 'bg-black' : 'bg-white'} h-full flex w-full justify-between`}>
      <ScrollView>
        <Header />
        <View>
          { children }
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
