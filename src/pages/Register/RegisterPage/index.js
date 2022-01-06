import { useState, useEffect } from "react";
import HeaderPart from "./HeaderPart";
import ContentPart from "./ContentPart";
import ConfirmationPart from "./ConfirmationPart";

function RegisterPage() {
  //#region Hooks
  const [showConfirmationPart, setShowConfirmationPart] = useState(false);
  //#endregion

  //#region Handle side effects
  const updateWebsiteTitle = () => {
    document.title = "Đăng ký ngay | Shopee Việt Nam";
  };

  useEffect(() => {
    updateWebsiteTitle();
  }, []);
  //#endregion

  return (
    <div id="register-page">
      <HeaderPart />
      {!showConfirmationPart ? (
        <ContentPart setShowConfirmationPart />
      ) : (
        <ConfirmationPart />
      )}
    </div>
  );
}

export default RegisterPage;
