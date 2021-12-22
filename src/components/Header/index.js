import HeaderCommonInfo from "./HeaderCommonInfo";
import HeaderSearchPart from "./HeaderSearchPart";

function Header({ inNotFoundPage }) {
  return (
    <header
      id="header"
      className={inNotFoundPage ? "header-in-not-found-page" : ""}
    >
      <HeaderCommonInfo />
      <HeaderSearchPart />
    </header>
  );
}

export default Header;
