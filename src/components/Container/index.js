import Content from "./Content";

function Container({ dataSource }) {
  return (
    <div id="container">
      <Content dataSource={dataSource} />
    </div>
  );
}

export default Container;
