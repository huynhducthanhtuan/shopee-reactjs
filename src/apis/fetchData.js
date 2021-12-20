import axios from "axios";
import { API1_URL, API2_URL, API3_URL } from "./apis";

async function fetchData() {
  const { data: responedData1 } = await axios.get(API1_URL);
  const { data: responedData2 } = await axios.get(API2_URL);
  const { data: responedData3 } = await axios.get(API3_URL);

  // Format data...
  const wantedData1 = [...responedData1, ...responedData2, ...responedData3];
  const wantedData2 = {
    ...wantedData1[0],
    ...wantedData1[1],
    ...wantedData1[2],
  };

  return wantedData2;
}

export default fetchData;
