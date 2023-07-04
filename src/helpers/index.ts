export const updateWebsiteTitle = (title: string) => {
  document.title = title;
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const handlePreventDefault = (event) => {
  event.preventDefault();
};

export const handleStopPropagation = (event) => {
  event.stopPropagation();
};

export const handlePreventScrolling = () => {
  document.querySelector('body').style.overflow = 'hidden';
};

export const checkValidPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length === 10) {
    // check phoneNumber[0] = 0 && phoneNumber[1] != 0 ?
    const checkFirstTwoLetters =
      phoneNumber[0].charCodeAt(0) === 48 &&
      phoneNumber[1].charCodeAt(1) >= 49 &&
      phoneNumber[1].charCodeAt(1) <= 57;

    // check phoneNumber[2->9] all is a integer character in range 0-9 ?
    const newPhoneNumber = phoneNumber.slice(2).split('');
    const checkAllLetters = newPhoneNumber.every(
      (a) => a.match(/[0-9]/g) && a.match(/[0-9]/g).length === 1
    );

    // return result
    const result = checkFirstTwoLetters && checkAllLetters;
    return result;
  } else {
    return false;
  }
};
