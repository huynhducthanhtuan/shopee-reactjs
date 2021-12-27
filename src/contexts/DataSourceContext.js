import axios from "axios";
import { API1_URL, API2_URL, API3_URL } from "../apis";
import { useState, useEffect, createContext } from "react";

// Context
const DataSourceContext = createContext();

// Provider
function DataSourceContextProvider({ children }) {
  const [dataSource, setDataSource] = useState();

  // Fetch data
  useEffect(() => {
    async function fetchData() {
      const { data: data1 } = await axios.get(API1_URL);
      const { data: data2 } = await axios.get(API2_URL);
      const { data: data3 } = await axios.get(API3_URL);

      // Format data
      const wantedData1 = [...data1, ...data2, ...data3];
      const wantedData2 = {
        ...wantedData1[0],
        ...wantedData1[1],
        ...wantedData1[2],
      };

      // setState to pass dataSource to Consumers
      setDataSource(wantedData2);
    }

    fetchData();
  }, []);

  return (
    <DataSourceContext.Provider value={dataSource}>
      {children}
    </DataSourceContext.Provider>
  );
}

// Consumer
function DataSourceContextConsumer({ children }) {
  return <DataSourceContext.Consumer>{children}</DataSourceContext.Consumer>;
}

export {
  DataSourceContext,
  DataSourceContextProvider,
  DataSourceContextConsumer,
};
