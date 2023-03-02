export const lengthValidator = (str) => {
  return str.length < 6 && "La contraseña es muy corta";
};

export const passwordValidator = (pass, repPass) => {
  return pass !== repPass && "La contraseña es diferente";
};

export const checkForNumber = (str) => {
  const ex = str.replaceAll(" ", "").split("");
  const numbers = ex.map(el => Number(el));
  const isNumbers = numbers.some(el => !isNaN(el));
  return isNumbers;
};