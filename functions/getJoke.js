const axios = require("axios");

exports.handler = (event, context, callback) => {
  axios
    .get("http://api.icndb.com/jokes/random1http://api.icndb.com/jokes/random")
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
