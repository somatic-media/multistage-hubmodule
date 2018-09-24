const request = require("request").defaults({
  json: true
  // qs: {
  //   hapikey: HAPIKEY
  // }
});

const execute = (options, callback) => {
  console.log(
    `Making ${options.method.toUpperCase() || "get"} API call to ${options.uri}`
  );
  if (options.body) {
    console.log(`with body ${JSON.stringify(options.body, null, 2)}`);
  }

  const sep = options.uri.indexOf("?") === -1 ? "?" : "&";
  options.uri = `${options.uri}${sep}hapikey=${HAPIKEY}`;
  request(options, (error, response, body) => {
    if (callback) {
      return callback(error, response, body);
    } else {
      if (error) {
        console.error("==> Oh no! Something went wrong", error);
      } else {
        console.log("==> Result:");
        console.log(response.statusCode);
        console.log(JSON.stringify(body, null, 2));
      }
    }
  });
};

module.exports = {
  execute: execute
};
