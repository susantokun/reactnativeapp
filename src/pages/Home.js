import React, { useState, useEffect } from 'react';
import {
  Text, View, Button,
} from 'react-native';

import tw from 'twrnc';
import axios from 'axios';

import AppLayout from '@/components/Layouts/AppLayout';

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const reqData = await axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => res.data);
    const resData = await reqData;
    const min = 1;
    const max = 100;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setTimeout(() => {
      setData(resData[random]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getData();
    return () => {
      setData([]);
    };
  }, []);

  return (
    <AppLayout>
      <View style={tw`p-4`}>
        <View style={tw`flex w-full items-center justify-center flex-row`}>
          <Button
            title="Refresh"
            onPress={getData}
            disabled={isLoading}
          />
        </View>
        <View style={tw`mt-4 border p-4 rounded-lg border-red-300`}>
          {!isLoading ? (
            <Text>
              {data.id}
              {' '}
              -
              {' '}
              {data.title}
            </Text>
          ) : (
            <Text>
              Loading....
            </Text>
          )}
        </View>
      </View>
    </AppLayout>
  );
}
