import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import styleB from "../styles/BottomBox.module.css";
import StatistiqueService from "../pages/services/StatistiqueService";

Chart.register(CategoryScale);

const MyChart = () => {

  const [statJ, setStatJ] = useState();
  const [statF, setStatF] = useState();
  const [statMars, setStatMars] = useState();
  const [statA, setStatA] = useState();
  const [statMai, setStatMai] = useState();
  const [statJn, setStatJn] = useState();
  const [statJll, setStatJll] = useState();
  const [statAu, setStatAu] = useState();
  const [statS, setStatS] = useState();
  const [statO, setStatO] = useState();
  const [statN, setStatN] = useState();
  const [statD, setStatD] = useState();
  const idSec = JSON.parse(localStorage.getItem("user-session-id"));

  StatistiqueService.statistiqueJ(idSec).then((res)=>{
    setStatJ(res.data.totalQuantite);
  })
  StatistiqueService.statistiqueF(idSec).then((res)=>{
    setStatF(res.data.totalQuantite);
  })
  StatistiqueService.statistiqueM(idSec).then((res)=>{
    setStatMars(res.data.totalQuantite);
  })
  StatistiqueService.statistiqueA(idSec).then((res)=>{
    setStatA(res.data.totalQuantite);
  })
  StatistiqueService.statistiqueMai(idSec).then((res)=>{
    setStatMai(res.data.totalQuantite);
  })
  StatistiqueService.statistiqueJn(idSec).then((res)=>{
    setStatJn(res.data.totalQuantite);
  })
  StatistiqueService.statistiqueJll(idSec).then((res)=>{
    setStatJll(res.data.totalQuantite);
  })
  StatistiqueService.statistiqueAu(idSec).then((res)=>{
    setStatAu(res.data.totalQuantite);
  })
  StatistiqueService.statistiqueS(idSec).then((res)=>{
    setStatS(res.data.totalQuantite);
  })
  StatistiqueService.statistiqueO(idSec).then((res)=>{
    setStatO(res.data.totalQuantite);
  })
  StatistiqueService.statistiqueN(idSec).then((res)=>{
    setStatN(res.data.totalQuantite);
  })
  StatistiqueService.statistiqueD(idSec).then((res)=>{
    setStatD(res.data.totalQuantite);
  })

  const data = {
    labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septempre', 'Octobre', 'Novembre', 'Decembre'],
    datasets: [
      {
        label: 'Statistique par mois',
        data: [statJ, statF,statMars, statA,statMai,statJn,statJll,statAu,statS,statO,statN,statD],
        backgroundColor: '#DC9551',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
      },
    },
  };

  return (
      <Bar data={data} options={options}/>
  );
};

export default MyChart;
