import { useState, useEffect, createContext } from "react";
import fetchData from "../apis/fetchData";

// Context
const DataSourceContext = createContext();

// Provider
function DataSourceContextProvider({ children }) {
  const [dataSource, setDataSource] = useState();

  // fetchData
  useEffect(async () => {
    // fetching...
    const data = await fetchData();

    // setState to pass data source to Consumers (child components)
    setDataSource(data);
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
