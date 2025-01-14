import React, { useEffect, useState } from "react";
import axios from "axios";

export default function APICalling({
  setDataForIndicators,
  setKwh,
  data,
  setData,
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API call using axios
        const response = await axios.get(
          "https://api.thingspeak.com/channels/2757288/feeds.json?api_key=JE47ASKC5E1OY8W2&results=120"
        );

        const reversedData = [...response.data.feeds].reverse(); // Create a new reversed array
        console.log(reversedData); // Console log the reversed array
        setData(reversedData);
        setDataForIndicators([
          {
            attribute: "Voltage",
            value: reversedData[0].field2,
            lowValue: 9,
            alertValue: 14,
            warningValue: 16,
            maxValue: 20,
          },
          {
            attribute: "Current",
            value: reversedData[0].field3,
            lowValue: 0,
            alertValue: 6,
            warningValue: 10,
            maxValue: 20,
          },
          {
            attribute: "Vibration",
            value:
              reversedData[0].field5 *
              reversedData[0].field6 *
              reversedData[0].field7,
            lowValue: 0,
            alertValue: 120,
            warningValue: 150,
            maxValue: 200,
          },
          {
            attribute: "Temperature",
            value: reversedData[0].field1,
            lowValue: 0,
            alertValue: 85,
            warningValue: 90,
            maxValue: 120,
          },
        ]);
        setKwh(reversedData[0].field4); // Set the reversed array to state
        setLoading(false);
      } catch (err) {
        setError(err.message || "Something went wrong");
        setLoading(false);
      }
    };

    // Initial fetch
    fetchData();

    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const data2 = [
    {
      created_at: "2024-11-22T04:40:30Z",
      entry_id: 1,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:23Z",
      entry_id: 6,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "2" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:30Z",
      entry_id: 1,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:23Z",
      entry_id: 6,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "2" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:30Z",
      entry_id: 1,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:23Z",
      entry_id: 6,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:30Z",
      entry_id: 1,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:23Z",
      entry_id: 6,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "2" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:30Z",
      entry_id: 1,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:23Z",
      entry_id: 6,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "2" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:30Z",
      entry_id: 1,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:23Z",
      entry_id: 6,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:30Z",
      entry_id: 1,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:23Z",
      entry_id: 6,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "2" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:30Z",
      entry_id: 1,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:23Z",
      entry_id: 6,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "2" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:30Z",
      entry_id: 1,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:23Z",
      entry_id: 6,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:30Z",
      entry_id: 1,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:23Z",
      entry_id: 6,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "2" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:40:53Z",
      entry_id: 2,
      field1: "4" /* other fields */,
    },

    {
      created_at: "2024-11-22T04:42:23Z",
      entry_id: 6,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "2" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:16Z",
      entry_id: 3,
      field1: "1" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:41:38Z",
      entry_id: 4,
      field1: "8" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:01Z",
      entry_id: 5,
      field1: "5" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:23Z",
      entry_id: 6,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "2" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "9" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "4" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "3" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "7" /* other fields */,
    },
    {
      created_at: "2024-11-22T04:42:46Z",
      entry_id: 7,
      field1: "3" /* other fields */,
    },
  ];

  return (
    <div
    // onClick={() => {
    //   processField1Data(data2, 120);
    // }}
    // className=" h-10 bg-white"
    ></div>
  );
}
