"use client";
import { colors } from "@/styles/theme";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const RadialChart = () => {
  const [series, setSeries] = useState<number[]>([56, 44]);

  const options = {
    colors: [colors.main, colors.secondary],
    labels: [` 여성 ${series[0]}%`, ` 남성 ${series[1]}%`],
    legend: {
      show: true,
      position: "left" as "left",
      floating: true,
      fontSize: "14px",
      fontFamily: "Noto Sans KR",
      fontWeight: 400,
      labels: {
        colors: colors.white,
      },
    },
    plotOptions: {
      radialBar: {
        inverseOrder: false,
        startAngle: -30,
        endAngle: 330,
        offsetX: 50,
        offsetY: 0,
        track: {
          show: true,
          background: "#323232",
          strokeWidth: "97%",
          opacity: 1,
          margin: 10,
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        hollow: {
          size: "35%", // 내부 원 크기
        },
        dataLabels: {
          show: false, // 가운데 값 안보이게
          name: {
            show: true,
            fontSize: "22px",
            fontFamily: "Noto Sans KR",
            offsetY: 0,
          },
        },
      },
    },
    // fill: {
    //   type: ["gradient", "gradient"],
    //   gradient: {
    //     shade: "dark",
    //     type: "vertical",
    //     shadeIntensity: 0.5,
    //     gradientToColors: ["#FF5B6FB2", "#b4b4b4"],
    //     inverseColors: true,
    //     opacityFrom: 1,
    //     opacityTo: 1,
    //     stops: [0, 100],
    //   },
    // },
    stroke: {
      lineCap: "round" as "round",
    },
  };

  return (
    <>
      <Label>
        {series[0] > series[1] ? `여성 ${series[0]}%` : `남성 ${series[1]}%`}
      </Label>
      <div className="donut">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          width="330"
          height="330"
        />
      </div>
    </>
  );
};

export default RadialChart;

const Label = styled.div`
  color: ${colors.grey5};
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 0.78rem;
`;
