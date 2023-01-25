const http = require("http");
const app = require("./routes/_app");

(async () => {
    const server = http.createServer(app);

    server.listen(8080, () => {
        console.log("> [SERVER] Ouvindo em http://localhost:8080")
    });
})();