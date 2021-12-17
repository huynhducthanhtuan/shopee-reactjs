import { useState, useEffect, createContext } from "react";
import DataSource from "./fetchData";

// Context
const DataSourceContext = createContext();

// Provider
function DataSourceContextProvider({ children }) {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetch("/db/db.json")
      .then((response) => response.json())
      .then((datas) => setDataSource(datas));

    // console.log("DataSource:", DataSource);
    // setDataSource(DataSource);
  }, []);

  return (
    <DataSourceContext.Provider value={dataSource}>
      {children}
    </DataSourceContext.Provider>
  );
}

// Consumer
// function DataSourceContextConsumer({ children }) {
//   return <DataSourceContext.Consumer>{children}</DataSourceContext.Consumer>;
// }

export { DataSourceContext, DataSourceContextProvider };
