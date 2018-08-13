const Pet = require("./models");

function readOne(req, res)
{
    Pet.findById(req.params.id)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs))
}
function readAll(req, res)
{
    console.log("in readall")
    Pet.find().sort({})
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs))
}
function deleteOne(req, res) 
{
    Pet.findByIdAndRemove(req.params.id)
    .then(data=>res.json({status: 'good', data: data}))
    .catch(errs=>res.json({status: 'bad', errs: errs}))
}
function updateOne(req, res)
{
    Pet.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs))
}
function createOne(req, res)
{
    Pet.create(req.body)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs))
}
module.exports = {

    readAll: readAll,
    readOne: readOne,
    deleteOne: deleteOne,
    updateOne: updateOne,
    createOne: createOne
}