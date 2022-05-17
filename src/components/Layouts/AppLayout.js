import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import Header from './Header';
// import Footer from './Footer';

export default function AppLayout(props) {
  const { children } = props;
  const [title, setTitle] = useState('');

  const getConfiguration = () => {
    setTitle('KKAps');
  };

  useEffect(() => {
    getConfiguration();
    return () => {
      setTitle('');
    };
  }, []);

  return (
    <View>
      <Header title={title} />
      <View>
        { children }
      </View>
      {/* <Footer /> */}
    </View>
  );
}
