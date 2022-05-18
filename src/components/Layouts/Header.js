import React from 'react';
import {
  View, useColorScheme, Image, StyleSheet,
} from 'react-native';
import tw from 'twrnc';

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default function Header() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={tw`${isDarkMode ? 'bg-blue-400 border-blue-500' : 'bg-red-400 border-red-500'} relative h-24 flex w-full items-center justify-center border-b`}>
      <Image
        style={styles.cover}
        source={{
          uri: 'https://towasoftware.com/wp-content/uploads/2019/05/React-Native-Titre.png',
        }}
      />
    </View>
  );
}
