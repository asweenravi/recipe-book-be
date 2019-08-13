const routes = require('./recipe-routes/recipe')

module.exports = (app) => {
    app.use(
        "/v0",
        routes
    );
}