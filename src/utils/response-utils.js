class ResponseUtils {

    static done = (error, response) => {
        console.log(JSON.stringify(response))
    }
}

module.exports = ResponseUtils
