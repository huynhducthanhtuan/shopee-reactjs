import { useState, useEffect, createContext } from "react";

// Context
const DataSourceContext = createContext();

// Provider
async function Provider({ children }) {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetch("/db/db.json")
      .then((response) => response.json())
      .then((datas) => setDataSource(datas));
  }, []);

  return (
    <DataSourceContext.Provider value={dataSource}>
      {children}
    </DataSourceContext.Provider>
  );
}

export { DataSourceContext, Provider };
