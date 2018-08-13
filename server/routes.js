const api = require("./controllers");
const bp = require("body-parser");
function router(app)
{
    app.use(bp.json());
    app.get('/api/pets', api.readAll);
    app.get('/api/pets/:id', api.readOne);
    app.delete('/api/pets/:id', api.deleteOne);
    app.patch('/api/pets/:id', api.updateOne);
    app.post('/api/pets', api.createOne);
    app.get('/');
}

module.exports = router;