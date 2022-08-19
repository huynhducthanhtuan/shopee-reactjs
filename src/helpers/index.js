export const updateWebsiteTitle = (title) => {
  document.title = title;
};

export const handlePreventDefault = (event) => {
  event.preventDefault();
};

export const handleStopPropagation = (event) => {
  event.stopPropagation();
};

export const handlePreventScrolling = () => {
  document.querySelector("body").style.overflow = "hidden";
};

export const checkValidPhoneNumber = (phoneNumber) => {
  if (phoneNumber.length === 10) {
    // 1.check phoneNumber[0] = 0 && phoneNumber[1] != 0 ?
    const checkFirstTwoLetters =
      phoneNumber[0].charCodeAt() === 48 &&
      phoneNumber[1].charCodeAt() >= 49 &&
      phoneNumber[1].charCodeAt() <= 57;

    // 2.check phoneNumber[2->9] all is a integer character in range 0-9 ?
    const newPhoneNumber = phoneNumber.slice(2).split("");
    const checkAllLetters = newPhoneNumber.every(
      (a) => a.match(/[0-9]/g) && a.match(/[0-9]/g).length === 1
    );

    // 3.return result
    const result = checkFirstTwoLetters && checkAllLetters;
    return result;
  } else {
    return false;
  }
};
