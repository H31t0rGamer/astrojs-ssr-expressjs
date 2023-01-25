const express = require("express");
const api = require("./api");
const app = express();

(async () => {
    if(process.env.npm_lifecycle_event == "dev"){
      console.log("> [SERVER - ASTROJS] Servidor em modo de desenvolvimento. Não haverá nenhum frontend.");
      return;
    };

    console.log("> [SERVER - ASTROJS] Servidor em modo de produção.");
    try {
        const { handler } = await import("../frontend/dist/server/entry.mjs");

        app.use(express.static("./frontend/dist/client"));
        app.use(handler);

        console.log("> [SERVER - ASTROJS] Frontend configurado.");
    } catch (err) {
      console.log("> [SERVER - ASTROJS] Não há nenhum frontend. Adicione um frontend astrojs(build) em ./frontend");
    }
})();

app.use("/api", api);
console.log("> [SERVER] Rota /api configurada.");

module.exports = app;
