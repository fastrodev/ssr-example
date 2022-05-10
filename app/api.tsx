import application, { response } from "https://deno.land/x/fastro@v0.57.0/server/mod.ts";
import rendering from "https://deno.land/x/fastro@v0.57.0/server/ssr.ts";
import App from "./app.tsx";

const ssr = rendering().component(<App />);

const app = application(ssr)
    .static("/static")
    .get("/", () => {
        return response(ssr).render({ title: "Hello world" });
    });

console.log("Listening on: http://localhost:8000");

await app.serve();