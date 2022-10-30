const logger = (status, msg) => {
  switch(status) {
    case "error": 
      console.log(`[ERROR]: ${msg}`);
    case "info":
      console.log(`[INFO]: ${msg}`);
  }
};

exports.logger = logger;