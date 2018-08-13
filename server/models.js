const mongoose = require("mongoose");

var PetSchema = new mongoose.Schema({
    name:  { 
        type: String, 
        required: [true, 'pet requited a name'], 
        minlength: [3, 'Pet name must be longer than 3 characters.']},

        type:  { 
            type: String, 
            required: [true, 'pet requited a type'],  
            minlength: [3, 'Pet type must be longer than 3 characters.']},
    
        description:  { 
            type: String, 
            required: [true, 'pet requited a description'],  
            minlength: [3, 'Description must be longer than 3 characters.']},
    
        skills: {
                skill1: { 
                    type: String},
                skill2: { 
                    type: String},
                skill3: { 
                    type: String},
                },
                
            likes: {
                type: Number, 
                default: 0},

}, {timestamps: true });


mongoose.connect("mongodb://localhost:27017/petsdb", {useNewUrlParser: true}, 
function(err) {
    if(err) {
        console.log("\x1b[31m", '___mongoose connection error ',err, "\x1b[0m");
    } else {
        console.log('\x1b[35m', "___ mongoose is connected " +  "\x1b[0m" );
    }
})

const Pet = mongoose.model('pets', PetSchema)

module.exports = Pet;