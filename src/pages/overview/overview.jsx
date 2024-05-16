import React from "react";
import Container from "./Container";
import MetricCard from "./MetricCard";
import LineChart from "./LineChart";
import { lineChartData } from "./chartData";
import PieChart from "./PieChart";
import { iconsImgs } from "../../utils/images";

export default function Overview() {
  const seriesData = [
    {
      name: "Completed",
      data: lineChartData.map((data) => {
        return data?.completed;
      }),
    },
    {
      name: "Disputed",
      data: lineChartData.map((data) => {
        return data?.disputed;
      }),
    },
    {
      name: "Cancelled",
      data: lineChartData.map((data) => {
        return data?.cancelled;
      }),
    },
    {
      name: "Pending",
      data: lineChartData.map((data) => {
        return data?.pending;
      }),
    },
  ];

  const categories = lineChartData.map((data) => {
    return data?.month.toString();
  });
  return (
    <div className="text-primary text-xl font-medium mt-4">
      Overview
      <Container heading="Wallet">
        <div className="flex gap-4 w-full pb-8">
          <MetricCard
            iconSrc={iconsImgs.totalEscrowIcon}
            escrowType="Total"
            amount={"45,943"}
          />
          <MetricCard
            iconSrc={iconsImgs.completedEscrowIcon}
            escrowType="Completed"
            amount={"45,943"}
          />
          <MetricCard
            iconSrc={iconsImgs.disputedEscrowIcon}
            escrowType="Disputed"
            amount={"45,943"}
          />
          <MetricCard
            iconSrc={iconsImgs.canceledEscrowIcon}
            escrowType="Canceled"
            amount={"45,943"}
          />
        </div>
      </Container>
      <div className="flex !items-start gap-4 w-full h-[450px] overflow-hidden">
        <Container heading="Transaction Performance" className="w-[150%" hasSelect>
          <div className="h-fit">
            <LineChart series={seriesData} categories={categories} />
          </div>
        </Container>
        <Container heading="Chart" hasSelect className="h-full w-[40%]">
          <div className="h-full">
          <PieChart
            data={{
              labels: [
                "Completed Escrow",
                "Pending Escrow",
                "Disputed Escrow",
                "Cancelled Escrow",
              ],
              datasets: [
                {
                  label: "Escrow",
                  data: [70, 20, 8, 2],
                  backgroundColor: ["#53BB81", "#F1F1A6", "#DB1A1A", "#000000"],
                  hoverOffset: 4,
                },
              ],
            }}
            options={{
              aspectRatio: 1,
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    useBorderRadius: true,
                    borderRadius: 50,
                  },
                },
              },
            }}
          />
          </div>
        </Container>
      </div>
    </div>
  );
}
