import { useState, useEffect } from "react";
import HeaderPart from "./HeaderPart";
import ContentPart from "./ContentPart";
import ConfirmationPart from "./ConfirmationPart";
import { REGISTER_PAGE_TITLE } from "../../../constants";
import { updateWebsiteTitle } from "../../../helpers";

function RegisterPage() {
  // Hooks
  const [headerPartRef, setHeaderPartRef] = useState(false);
  const [userPhoneNumber, setUserPhoneNumber] = useState(false);
  const [showConfirmationPart, setShowConfirmationPart] = useState(false);

  // Handle side effects
  useEffect(() => {
    updateWebsiteTitle(REGISTER_PAGE_TITLE);
  }, []);

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
