export const errorHandler = (err, req, res, next) => {
    console.error(err);
  
    // Default error status code
    let statusCode = 500;
    let errorMessage = 'Server Error';
  
    // Customize error handling based on the error type
    if (err instanceof CustomError) {
      // Handle custom errors with specific status codes and messages
      statusCode = err.statusCode;
      errorMessage = err.message;
    }
  
    res.status(statusCode).json({ error: errorMessage });
  };
  