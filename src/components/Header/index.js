import HeaderCommonInfo from "./HeaderCommonInfo";
import HeaderSearchPart from "./HeaderSearchPart";

function Header({ dataSource }) {
  return (
    <header id="header">
      <HeaderCommonInfo />
      <HeaderSearchPart dataSource={dataSource} />
    </header>
  );
}

export default Header;
