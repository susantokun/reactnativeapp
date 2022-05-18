/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Text, View, TouchableOpacity, useColorScheme, Button,
} from 'react-native';

import PushNotification from 'react-native-push-notification';
import DateTimePicker from '@react-native-community/datetimepicker';
import tw from 'twrnc';
import { axios } from '@/lib/axios';

import AppLayout from '@/components/Layouts/AppLayout';
import Card from '@/components/Card';

export default function Home() {
  const isDarkMode = useColorScheme() === 'dark';

  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);

  const getStartDate = `${dateStart.getFullYear()}-${dateStart.getMonth() + 1}-${dateStart.getDate()}`;
  const getEndDate = `${dateEnd.getFullYear()}-${dateEnd.getMonth() + 1}-${dateEnd.getDate()}`;

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [countDocumentCompleted, setCountDocumentCompleted] = useState(0);
  const [countPotentialProject, setCountPotentialProject] = useState(0);
  const [countOutstandingSPK, setCountOutstandingSPK] = useState(0);
  const [countOutstandingDocument, setCountOutstandingDocument] = useState(0);
  const [countOutstandingDocumentReqApproval, setCountOutstandingDocumentReqApproval] = useState(0);
  const [countOngoingDocument, setcountOngoingDocument] = useState(0);
  const [countReadyDocument, setCountReadyDocument] = useState(0);
  const [countOutstandingInvoice, setCountOutstandingInvoice] = useState(0);

  const getData = async () => {
    setIsLoading(true);
    const reqData = await axios.post('/api/count_index.php', {
      kd_prsh: 'SPS0',
      kd_kprd: 'SPSJKT',
      start_date: getStartDate,
      end_date: getEndDate,
    }).then((res) => res.data).catch((err) => err.response);
    const resData = await reqData.data;
    setMessage(reqData.message);
    setCountDocumentCompleted(resData.document_completed);
    setCountPotentialProject(resData.potential_project);
    setCountOutstandingSPK(resData.outstanding_spk);
    setCountOutstandingDocument(resData.outstanding_document);
    setCountOutstandingDocumentReqApproval(resData.outstanding_document_req_approval);
    setcountOngoingDocument(resData.ongoing_document);
    setCountReadyDocument(resData.ready_document);
    setCountOutstandingInvoice(resData.outstanding_invoice);

    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'Hello!',
      message: 'You clicked',
      color: 'red',
      id: 1,
    });

    setIsLoading(false);
  };

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowStartDate(false);
    setDateStart(currentDate);
  };

  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowEndDate(false);
    setDateEnd(currentDate);
  };

  const showDatepickerStartDate = () => {
    setShowStartDate('date');
  };

  const showDatepickerEndDate = () => {
    setShowEndDate('date');
  };

  // PushNotification.localNotification({
  //   channelId: 'test-channel',
  //   title: 'Hello!',
  //   message: 'You clicked',
  //   color: 'red',
  //   id: 1,
  // });

  // PushNotification.localNotificationSchedule({
  //   channelId: 'test-channel',
  //   title: 'Alarm',
  //   message: 'You clicked',
  //   date: new Date(Date.now() + 20 * 100),
  //   allowWhileIdle: true,
  // });

  useEffect(() => {
    getData();

    return () => {
      setMessage(0);
      setCountDocumentCompleted(0);
      setCountPotentialProject(0);
      setCountOutstandingSPK(0);
      setCountOutstandingDocument(0);
      setCountOutstandingDocumentReqApproval(0);
      setcountOngoingDocument(0);
      setCountReadyDocument(0);
      setCountOutstandingInvoice(0);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppLayout>
      <View style={tw`${isDarkMode ? 'bg-black' : 'bg-white'} p-4 h-auto`}>

        <View style={tw`${isDarkMode ? 'border-gray-300' : 'border-red-300'} rounded-md flex flex-col w-full items-center justify-center p-4 border`}>
          <View style={tw`flex w-full items-center justify-center flex-row py-2`}>
            <View style={tw`mr-2`}>
              <Button onPress={showDatepickerStartDate} title="Start Date" />
            </View>
            <View style={tw`ml-2`}>
              <Button onPress={showDatepickerEndDate} title="End Date" />
            </View>
            {(showStartDate) && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dateStart}
              mode="date"
              is24Hour
              onChange={onChangeStartDate}
            />
            )}
            {(showEndDate) && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dateEnd}
              mode="date"
              is24Hour
              onChange={onChangeEndDate}
            />
            )}
          </View>
          <View style={tw`flex flex-row`}>
            <Text>Filter: </Text>
            <Text style={tw`font-bold`}>{getStartDate}</Text>
            <Text> sampai </Text>
            <Text style={tw`font-bold`}>{getEndDate}</Text>
          </View>
        </View>

        <View style={tw`flex w-full items-center justify-center flex-row pb-2 pt-6`}>
          <TouchableOpacity
            style={tw`${isDarkMode ? 'bg-white' : 'bg-red-500'} px-4 rounded-md shadow py-2`}
            onPress={getData}
            disabled={isLoading}
          >
            <Text style={tw`${isDarkMode ? 'text-black' : 'text-white'} font-semibold`}>GET DATA</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row w-full items-center justify-center my-4`}>
          <View style={tw`${isDarkMode ? 'bg-white shadow-white' : 'bg-red-400 shadow-red-600'} p-4 rounded-full shadow h-28 w-28 items-center justify-center shadow-md`}>
            <Text style={tw`${isDarkMode ? 'text-gray-700' : 'text-gray-100'} font-bold text-3xl`}>{!isLoading ? countDocumentCompleted : '...'}</Text>
          </View>
        </View>

        <View style={tw`flex w-full flex-row items-center justify-center px-2`}>
          <Card styles="w-1/2 mr-2" isLoading={isLoading} title="Potential Project" count={countPotentialProject} />
          <Card styles="w-1/2 ml-2" isLoading={isLoading} title="Outstanding SPK" count={countOutstandingSPK} />
        </View>

        <View style={tw`flex w-full flex-row items-center justify-center px-2 mt-4`}>
          <Card styles="w-1/2 mr-2" isLoading={isLoading} title="Outstanding Document" count={countOutstandingDocument} countReqApproval={countOutstandingDocumentReqApproval} />
          <Card styles="w-1/2 ml-2" isLoading={isLoading} title="Ongoing Document" count={countOngoingDocument} />
        </View>

        <View style={tw`flex w-full flex-row items-center justify-center px-2 mt-4`}>
          <Card styles="w-1/2 mr-2" isLoading={isLoading} title="Ready Document" count={countReadyDocument} />
          <Card styles="w-1/2 ml-2" isLoading={isLoading} title="Ongoing Invoice" count={countOutstandingInvoice} />
        </View>

        {/* <View style={tw`${isDarkMode ? 'border-gray-300' : 'border-red-300'} mt-4 border p-4 flex items-center justify-center rounded-lg`}>
          <Text style={tw`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {!isLoading ? message : 'Loading...'}
          </Text>
        </View> */}
      </View>
    </AppLayout>
  );
}
