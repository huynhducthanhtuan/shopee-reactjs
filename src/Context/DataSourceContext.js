import { useState, useEffect, createContext } from "react";

// Context
const DataSourceContext = createContext();

// Provider
function DataSourceContextProvider({ children }) {
  const [dataSource, setDataSource] = useState();

  //#region GET DATA SOURCE FROM APIS
  useEffect(() => {
    const promise1 = fetch("https://61bc99f0d8542f001782486b.mockapi.io/api/1")
      .then((response) => response.json())
      .then((datas) => datas);

    const promise2 = fetch("https://61bc99f0d8542f001782486b.mockapi.io/api/2")
      .then((response) => response.json())
      .then((datas) => datas);

    const promise3 = fetch("https://61bc99f0d8542f001782486b.mockapi.io/api/3")
      .then((response) => response.json())
      .then((datas) => datas);

    Promise.all([promise1, promise2, promise3])
      .then(([result1, result2, result3]) => {
        // Using spread & destructuring to get data source in valid format
        const data1 = [...result1, ...result2, ...result3];
        const data2 = { ...data1[0], ...data1[1], ...data1[2] };

        // Update state dataSource
        setDataSource(data2);
      })
      .catch((error) => {
        throw new Error("Failed to fetch");
      });
  }, []);
  //#endregion

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
