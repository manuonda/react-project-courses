import app from "./app"

app.listen(app.get("port"), () => {
   console.log(`list port ${app.get("port")}`);
}) 