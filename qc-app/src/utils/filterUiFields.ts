export const filterUiFields = (diff: any, allowedFields: string[]) => {
  const result: any = {};

  Object.keys(diff).forEach((key) => {
    if (allowedFields.includes(key)) {
      result[key] = diff[key];
    }
  });

  return result;
};
