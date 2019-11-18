import React, { useContext, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import ExpenseContext from "../../context/expense/expenseContext";

const ExpenseChart = () => {
  const expenseContext = useContext(ExpenseContext);

  const {
    chartData,
    chartDataLabels,
    getExpenses,
    updateChartData
  } = expenseContext;

  useEffect(async () => {
    await getExpenses();
    updateChartData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='chart'>
      <Pie
        data={{
          labels: chartDataLabels,
          datasets: [
            {
              label: "Population",
              data: chartData,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)"
              ]
            }
          ]
        }}
        options={{
          title: {
            display: true,
            text: "Your Expenses",
            fontSize: 25
          },
          legend: {
            display: true,
            position: "right"
          }
        }}
      />
    </div>
  );
};

export default ExpenseChart;
