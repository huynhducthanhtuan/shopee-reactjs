import { useContext } from "react";
import { DataSourceContext } from "contexts";

function useDataSourceContext() {
  const dataSourceContext = useContext(DataSourceContext);
  return dataSourceContext;
}

export default useDataSourceContext;
