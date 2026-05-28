const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const builder = new addonBuilder({
    id: "org.toonstream.addon",
    version: "1.0.0",
    name: "ToonStream",
    description: "Anime addon",
    resources: ["stream"],
    types: ["series", "movie"],
    idPrefixes: ["tt"]
});

builder.defineStreamHandler(async ({ id }) => {
    return {
        streams: [
            {
                title: "ToonStream",
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            }
        ]
    };
});

const port = process.env.PORT || 7000;

serveHTTP(builder.getInterface(), { port });
