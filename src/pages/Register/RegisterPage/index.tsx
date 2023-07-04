import HeaderPart from './HeaderPart';
import ContentPart from './ContentPart';
import ConfirmationPart from './ConfirmationPart';
import { TITLE } from 'constants/index';
import { updateWebsiteTitle } from 'helpers';
import React, { useState, useEffect } from 'react';

function RegisterPage() {
  const [headerPartRef, setHeaderPartRef] = useState(false);
  const [userPhoneNumber, setUserPhoneNumber] = useState(false);
  const [showConfirmationPart, setShowConfirmationPart] = useState(false);

  useEffect(() => updateWebsiteTitle(TITLE.REGISTER_PAGE), []);

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
