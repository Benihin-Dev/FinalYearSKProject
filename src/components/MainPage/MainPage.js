import React, { useState } from "react";
import HomePage from "../HomePage/HomePage";
import APICalling from "../MiniComponents/APICalling";
import DataStore from "../MiniComponents/DataStore";

export default function MainPage() {
  const [data, setData] = useState([]);
  const [dataForIndicators, setDataForIndicators] = useState([
    {
      attribute: "Voltage",
      value: 0,
      lowValue: 5,
      alertValue: 12,
      warningValue: 15,
      maxValue: 20,
    },
    {
      attribute: "Current",
      value: 0,
      lowValue: 0,
      alertValue: 8,
      warningValue: 10,
      maxValue: 20,
    },
    {
      attribute: "Vibration",
      value: 0,
      lowValue: 0,
      alertValue: 120,
      warningValue: 150,
      maxValue: 200,
    },
    {
      attribute: "Temperature",
      value: 0,
      lowValue: 0,
      alertValue: 85,
      warningValue: 90,
      maxValue: 120,
    },
  ]);
  const [kwh, setKwh] = useState(0);
  const [lineChartData, setLineChartData] = useState([]);
  const [consoleMessageData, setConsoleMessageData] = useState(
    Array(5).fill(
      " ng elit. Natus commodi nisiveritatis alias quae, reprehenderit molestias aperiam fuga enim magnam provident eaque similique nesciunt dicta libero recusandae reiciendis odio voluptatum!"
    )
  );
  return (
    <div>
      <APICalling
        setDataForIndicators={setDataForIndicators}
        setKwh={setKwh}
        data={data}
        setData={setData}
      />
      <HomePage
        dataForIndicators={dataForIndicators}
        kwh={kwh}
        lineChartData={lineChartData}
        consoleMessageData={consoleMessageData}
      />
      <DataStore
        data={data}
        setLineChartData={setLineChartData}
        setConsoleMessageData={setConsoleMessageData}
      />
    </div>
  );
}
