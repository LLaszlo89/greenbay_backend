export const createError = (code, errMessage) => {
  const err = new Error();
  err.status = code;
  err.message = errMessage;
  return err;
};

