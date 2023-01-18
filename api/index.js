const app = require('../index');
const route = require('../routes/blogRoutes')

app.use('/',route);

module.exports = app;