function zipStrings(strA, strB) {
  // Your Code here
  let strLength = "";
  let arrA = [];
  arrA = strA.split("");
  let arrB = [];
  arrB = strB.split("");
  let arrResult = [];
  let arrEndResult = [];

  if (strA.length > strB.length) {
    strLength += strA;
  } else {
    strLength += strB;
  }

  for (let i = 0; i < strLength.length; i++) {
    arrResult.push(arrA[i], arrB[i]);
  }

  for (let i = 0; i < arrResult.length; i++) {
    if (arrResult[i] !== undefined) {
      arrEndResult.push(arrResult[i]);
    }
  }

  console.log(arrEndResult);
  const strResult = arrEndResult.join("");
  console.log(strResult);

  return strResult;
}
