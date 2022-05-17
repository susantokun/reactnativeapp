import React, { useState, useEffect } from 'react';
import {
  Text, View, TouchableOpacity, useColorScheme,
} from 'react-native';

import tw from 'twrnc';
import { axios } from '@/lib/axios';

import AppLayout from '@/components/Layouts/AppLayout';
import Card from '@/components/Card';

export default function Home() {
  const isDarkMode = useColorScheme() === 'dark';

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [countDocumentCompleted, setCountDocumentCompleted] = useState(0);
  const [countPotentialProject, setCountPotentialProject] = useState(0);
  const [countOutstandingSPK, setCountOutstandingSPK] = useState(0);
  const [countOutstandingDocument, setCountOutstandingDocument] = useState(0);
  const [countOutstandingDocumentReqApproval, setCountOutstandingDocumentReqApproval] = useState(0);
  const [countOngoingDocument, setcountOngoingDocument] = useState(0);
  const [countReadyDocument, setCountReadyDocument] = useState(0);
  const [countOngoingInvoice, setCountOngoingInvoice] = useState(0);

  const getData = async () => {
    setIsLoading(true);

    const reqData = await axios.post('/api/counts', {
      kd_prsh: 'SPS0',
      kd_kprd: 'SPSJKT',
    }).then((res) => res.data).catch((err) => err.response);
    const resData = await reqData.data;
    setTimeout(() => {
      setMessage(reqData.message);
      setCountDocumentCompleted(resData.count_document_completed);
      setCountPotentialProject(resData.count_potential_project);
      setCountOutstandingSPK(resData.count_outstanding_spk);
      setCountOutstandingDocument(resData.count_outstanding_document);
      setCountOutstandingDocumentReqApproval(resData.count_outstanding_document_req_approval);
      setcountOngoingDocument(resData.count_ongoing_document);
      setCountReadyDocument(resData.count_ready_document);
      setCountOngoingInvoice(resData.count_ongoing_invoice);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getData();

    return () => {
      setMessage(0);
      setCountDocumentCompleted(0);
      setCountPotentialProject(0);
      setCountOutstandingSPK(0);
      setCountOutstandingDocument(0);
      setcountOngoingDocument(0);
      setCountReadyDocument(0);
      setCountOngoingInvoice(0);
    };
  }, []);

  return (
    <AppLayout>
      <View style={tw`${isDarkMode ? 'bg-black' : 'bg-white'} p-4 h-full`}>
        <View style={tw`flex w-full items-center justify-center flex-row py-2`}>
          <TouchableOpacity
            style={tw`${isDarkMode ? 'bg-white' : 'bg-red-500'} px-4 rounded-md shadow py-2`}
            onPress={getData}
            disabled={isLoading}
          >
            <Text style={tw`${isDarkMode ? 'text-black' : 'text-white'} font-semibold`}>Refresh</Text>
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
          <Card styles="w-1/2 ml-2" isLoading={isLoading} title="Ongoing Invoice" count={countOngoingInvoice} />
        </View>

        <View style={tw`${isDarkMode ? 'border-gray-300' : 'border-red-300'} mt-4 border p-4 flex items-center justify-center rounded-lg`}>
          <Text style={tw`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {!isLoading ? message : 'Loading...'}
          </Text>
        </View>
      </View>
    </AppLayout>
  );
}
