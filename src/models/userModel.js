const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
console.log("(userModel) Crear la variable mongoose");

const saltRounds = 10;

const usersSchema = new mongoose.Schema(
    {
        username: { type:String, require: true, unique: true},
        name: { type:String},
        email: { type:String},
        password: {type:String, require: true},
        active: { type: Boolean, default: true },
        role: { type:String}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

usersSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        
        const document = this;
        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
            if(err){
                next(err);
            }else{
                document.password=hashedPassword;
                next();                
            }
        });
    }else{
        next();
    }
});

usersSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err,same);
        }
    });
}

const ModelUser = mongoose.model("users", usersSchema);

module.exports = ModelUser;
