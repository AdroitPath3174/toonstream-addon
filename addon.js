const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const manifest = {
    id: "org.toonstream.addon",
    version: "1.0.0",
    name: "ToonStream",
    description: "Watch cartoons and anime",
    resources: ["stream"],
    types: ["movie", "series"],
    catalogs: [],
    idPrefixes: ["tt"]
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(async () => {
    return {
        streams: [
            {
                title: "Test Stream",
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            }
        ]
    };
});

const port = process.env.PORT || 7000;

serveHTTP(builder.getInterface(), { port });
