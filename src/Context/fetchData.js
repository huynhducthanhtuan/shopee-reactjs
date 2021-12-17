let FETCH_DATA = null;

const promise1 = fetch("https://61bc99f0d8542f001782486b.mockapi.io/api/1")
  .then((response) => response.json())
  .then((datas) => datas);

const promise2 = fetch("https://61bc99f0d8542f001782486b.mockapi.io/api/2")
  .then((response) => response.json())
  .then((datas) => datas);

const promise3 = fetch("https://61bc99f0d8542f001782486b.mockapi.io/api/3")
  .then((response) => response.json())
  .then((datas) => datas);

Promise.all([promise1, promise2, promise3]).then(
  ([result1, result2, result3]) => {
    const ketqua1 = [...result1, ...result2, ...result3];
    const ketqua2 = { ...ketqua1[0], ...ketqua1[1], ...ketqua1[2] };
    // console.log(ketqua2);
    FETCH_DATA = ketqua2;
  }
);

export default FETCH_DATA;
