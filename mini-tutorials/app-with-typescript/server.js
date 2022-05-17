const jsonserver = require('json-server')
const server = jsonserver.create();
const router = jsonserver.router('subs.json')
const middlewares = jsonserver.defaults()


server.use(middlewares)
server.use(router)
server.listen(3001, () => {
    console.log("JSON SERVER Online");
});