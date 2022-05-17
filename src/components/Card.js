import React from 'react';
import { Text, View, useColorScheme } from 'react-native';

import tw from 'twrnc';

export default function Card(props) {
  const isDarkMode = useColorScheme() === 'dark';
  const {
    isLoading, title, count, countReqApproval, styles,
  } = props;

  return (
    <View style={tw`${styles} ${isDarkMode ? 'border-gray-300' : 'border-red-200'} rounded-lg border p-4 flex items-start justify-start`}>
      <Text style={tw`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-xs`}>{title}</Text>
      <Text style={tw`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-bold text-lg`}>
        {!isLoading ? count : '...'}
        {' '}
        {countReqApproval && `/${!isLoading ? countReqApproval : '...'}`}
      </Text>
    </View>
  );
}
