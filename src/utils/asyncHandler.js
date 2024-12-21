const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    try {
      const result = await Promise.resolve(requestHandler(req, res, next));
      return result;
    } catch (error) {
      next(error); // Pass the error to the next middleware for handling
    }
  };
};

export { asyncHandler };

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
