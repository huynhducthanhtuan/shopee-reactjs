import axios from "axios";
import { API1_URL, API2_URL, API3_URL, historyListInfoApi } from "apis";
import { useState, useEffect, createContext } from "react";

// Context
const DataSourceContext = createContext();

// Provider
function DataSourceContextProvider({ children }) {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data: data1 } = await axios.get(API1_URL);
      const { data: data2 } = await axios.get(API2_URL);
      const { data: data3 } = await axios.get(API3_URL);
      
      const historyListInfo = await historyListInfoApi.get();

      // Format data
      const resultData1 = [...data1, ...data2, ...data3];
      const resultData2 = {
        ...resultData1[0],
        ...resultData1[1],
        ...resultData1[2],
        headerSearchHistoryListInfo: historyListInfo,
      };

      // Pass dataSource to Consumers
      setDataSource(resultData2);
    };

    fetchData();
  }, []);

  return (
    <DataSourceContext.Provider value={dataSource}>
      {children}
    </DataSourceContext.Provider>
  );
}

export { DataSourceContext, DataSourceContextProvider };
