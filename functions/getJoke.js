const axios = require("axios");
const contentful = require("contentful-management");

exports.handler = (event, context, callback) => {
  // axios
  //   .get("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((res) => {
  //     callback(null, {
  //       statusCode: 200,
  //       body: res.data.title,
  //     });
  //   })
  //   .catch((err) => {
  //     callback(err);
  //   });
  async function connect() {
    let client = await contentful.createClient({
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    let space = await contentful.getSpace(CONTENTFUL_SPACE_ID);
    return await space.getEnvironment("master");
  }

  (async () => {
    let env = await connect();
    console.log(env);
  })();
};
