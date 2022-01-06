import { useState, useEffect } from "react";
import HeaderPart from "./HeaderPart";
import ContentPart from "./ContentPart";
import ConfirmationPart from "./ConfirmationPart";

function RegisterPage() {
  //#region Hooks
  const [headerPartRef, setHeaderPartRef] = useState(false);
  const [userPhoneNumber, setUserPhoneNumber] = useState(false);
  const [showConfirmationPart, setShowConfirmationPart] = useState(false);
  //#endregion

  //#region Handle side effects
  useEffect(() => {
    const updateWebsiteTitle = () => {
      document.title = "Đăng ký ngay | Shopee Việt Nam";
    };

    updateWebsiteTitle();
  }, []);
  //#endregion

  return (
    <div id="register-page">
      <HeaderPart setHeaderPartRef={setHeaderPartRef} />
      {showConfirmationPart ? (
        <ConfirmationPart
          headerPartRef={headerPartRef}
          userPhoneNumber={userPhoneNumber}
          setShowConfirmationPart={setShowConfirmationPart}
        />
      ) : (
        <ContentPart
          setUserPhoneNumber={setUserPhoneNumber}
          setShowConfirmationPart={setShowConfirmationPart}
        />
      )}
    </div>
  );
}

export default RegisterPage;
