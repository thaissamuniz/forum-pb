export const isAdult = (birthday) => {
  const today = new Date();
  const birthdayObj = new Date(birthday);
  const age = today.getFullYear() - birthdayObj.getFullYear();
  const monthDifference = today.getMonth() - birthdayObj.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthdayObj.getDate())
  ) {
    return age - 1;
  }

  return age;
};
