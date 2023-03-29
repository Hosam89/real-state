export const emailCheck = (email) => {
  let symPos;
  let symCount = 0;
  let dotPos;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      symCount++;
      symPos = i;
      if (symPos === dotPos + 1) {
        return `${email} is not valid. Dot was found before @`;
      }
    }
    if (email[i] === ".") {
      dotPos = i;
      if (dotPos === symPos + 1) {
        return `${email} is not valid. @ was found before dot `;
      }
      if (email[dotPos + 1] === ".") {
        return `${email} is not valid. Consecutive dots `;
      }
    }
  }
  if (symCount !== 1 || symPos === 0 || symPos === email.length - 1) {
    return `${email} is not valid. Syntax error.`;
  } else if (
    email[0] === "." ||
    dotPos < symPos ||
    dotPos === email.length - 1
  ) {
    return `${email} is not valid. Syntax error.`;
  } else {
    return `${email} is valid.`;
  }
};
