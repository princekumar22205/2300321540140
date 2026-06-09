require("dotenv").config();

const Log = require("./logger");

(async () => {
    const result = await Log(
        "backend",
        "error",
        "handler",
        "received string, expected bool"
    );

    console.log(result);
})();