import { useContext } from "react";
import { DataSourceContext } from "../contexts";

function useDataSourceContext(key) {
  const dataSourceContext = useContext(DataSourceContext);
  return key ? dataSourceContext[key] : dataSourceContext;
}

export default useDataSourceContext;
