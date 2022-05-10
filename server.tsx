import rendering from "https://deno.land/x/fastro@v0.57.6/server/ssr.ts";
import application, {
  response,
} from "https://deno.land/x/fastro@v0.57.6/server/mod.ts";
import App from "./components/app.tsx";

const component = rendering(<App />);

const app = application(component)
  .static("/static")
  .get("/", () => {
    return response(component).render({ title: "Hello world" });
  });

console.log("Listening on: http://localhost:8000");

await app.serve();
