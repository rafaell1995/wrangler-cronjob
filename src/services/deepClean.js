const deepClean = (obj) => {
  for (let key in obj) {
    if (obj[key] === undefined || obj[key] === null || obj[key] === "") {
      delete obj[key];
    } else if (typeof obj[key] === "object") {
      deepClean(obj[key]);
    }
  }
  return obj;
};

export default deepClean