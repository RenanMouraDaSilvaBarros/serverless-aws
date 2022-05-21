class ResponseUtils {

    static done = (error, response) => {

        if (error) {
            console.log("Error", error);
          } else {
            console.log("Success", JSON.stringify(response));
          }
    }
}

module.exports = ResponseUtils
