import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { useEffect } from 'react';
import ProduitService from "../pages/services/ProduitService";

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

  ProduitService.statistiqueJ().then((res)=>{
    setStatJ(res.data.totalQuantite);
  })
  ProduitService.statistiqueF().then((res)=>{
    setStatF(res.data.totalQuantite);
  })
  ProduitService.statistiqueM().then((res)=>{
    setStatMars(res.data.totalQuantite);
  })
  ProduitService.statistiqueA().then((res)=>{
    setStatA(res.data.totalQuantite);
  })
  ProduitService.statistiqueMai().then((res)=>{
    setStatMai(res.data.totalQuantite);
  })
  ProduitService.statistiqueJn().then((res)=>{
    setStatJn(res.data.totalQuantite);
  })
  ProduitService.statistiqueJll().then((res)=>{
    setStatJll(res.data.totalQuantite);
  })
  ProduitService.statistiqueAu().then((res)=>{
    setStatAu(res.data.totalQuantite);
  })
  ProduitService.statistiqueS().then((res)=>{
    setStatS(res.data.totalQuantite);
  })
  ProduitService.statistiqueO().then((res)=>{
    setStatO(res.data.totalQuantite);
  })
  ProduitService.statistiqueN().then((res)=>{
    setStatN(res.data.totalQuantite);
  })
  ProduitService.statistiqueD().then((res)=>{
    setStatD(res.data.totalQuantite);
  })

  const data = {
    labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septempre', 'Octobre', 'Novembre', 'Decembre'],
    datasets: [
      {
        label: 'Statistique par mois',
        data: [statJ, statF, statMars, statA, statMai, statJn, statJll, statAu, statS, statO, statN, statD],
        backgroundColor: '#6E744C',
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
    <div style={{ height: "450px", marginLeft: "7%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default MyChart;
