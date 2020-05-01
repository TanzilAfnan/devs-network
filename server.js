const dotenv = require("dotenv");
const app = require("./app");

// initialize configuration
dotenv.config();
const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Listening on port ${port}`));
