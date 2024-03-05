"use client";
import { colors } from "@/styles/theme";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const RadialChart = () => {
  const [series, setSeries] = useState([56, 44]);

  const options = {
    colors: ["#FF2D46B2", "#565656"],
    labels: [`여성 ${series[0]}%`, `남성 ${series[1]}%`],
    legend: {
      show: false,
    },
    plotOptions: {
      radialBar: {
        inverseOrder: false,
        startAngle: -30,
        endAngle: 330,
        offsetX: 0,
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
          size: "35%",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "22px",
            fontFamily: "Noto Sans KR",
            offsetY: 0,
          },
        },
      },
    },
    fill: {
      type: ["gradient", "gradient"],
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#FF5B6FB2", "#b4b4b4"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },

    stroke: {
      lineCap: "round",
    },
  };

  return (
    <>
      <div className="donut">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          width="330"
          height="330"
        />
      </div>
      <LabelRegion>
        <LabelWrapped>
          <Circle color={"#FF5B6F"} />
          {`여성 ${series[0]}%`}
        </LabelWrapped>
        <LabelWrapped>
          <Circle color={"#b4b4b4"} />
          {`남성 ${series[1]}%`}
        </LabelWrapped>
      </LabelRegion>
    </>
  );
};

export default RadialChart;

const LabelRegion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-top: 1.8rem;
`;
const LabelWrapped = styled.div`
  display: inline-flex;
  color: ${colors.grey4};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  justify-content: center;
  align-items: center;
  gap: 0.38rem;
`;
const Circle = styled.div<{ color: string }>`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
`;
