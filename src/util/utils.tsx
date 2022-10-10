export const flatten = (obj: any) => {
  let result: any = {};
  for (const i in obj) {
    if((typeof obj[i]) === 'object' && !Array.isArray(obj[i])) {
      const temp: any = flatten(obj[i]);
      for(const j in temp) {
        result[i] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }
  return result;
};