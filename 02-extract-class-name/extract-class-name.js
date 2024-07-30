function extractClassName(sessionTitle) {
  // Add you solution here
  let strResult = null;

  const myObject = { Maerz: "03", März: "03", Januar: "01", September: "09" };

  let strSplit = sessionTitle.slice(19);
  console.log(strSplit);
  let strYear = strSplit.slice(0, 4);
  console.log(strYear);
  let strMonth = strSplit.slice(5);
  console.log(strMonth);

  if (strYear.length === 4) {
    strResult = strYear;
  }

  if (Object.hasOwn(myObject, strMonth)) {
    strResult += "-" + myObject[strMonth];
  } else {
    strResult = null;
  }

  console.log(strResult);

  return strResult;
}
