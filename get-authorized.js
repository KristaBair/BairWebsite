const fs = require("fs");
const path = require("path");

exports.handler = async function () {
  try {
    const filePath = path.resolve(__dirname, "../../data/authorized.json");
    const data = fs.readFileSync(filePath, "utf-8");
    return {
      statusCode: 200,
      body: data,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to load authorized list." })
    };
  }
};
