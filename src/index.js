const express = require("express")
const app = express()

const user = require('./models/userModel.js');

//Conexion a BD
require("./database")

// Motor de Plantillas: EJS
app.set("view engine", "ejs")
app.set("views", __dirname + "/views");


//Usp de formato json
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("./src/public"))

const alumnoRouter = require("./routes/index.route.js")
app.use(alumnoRouter)

app.use(require("./routes/index.routes_users.js")) 
app.use(require("./routes/index.routes_auth.js")) 
app.use(require("./routes/index.route_register.js")) 
app.use(require("./routes/index.routes_publications.js")) 
app.use(require("./routes/index.routes_reviews.js"))
app.use(require("./routes/index.routes_products.js"))
app.use(require("./routes/index.routes_ratings.js"))
app.use(require("./routes/index.routes_comments.js"))

app.use(require("./models/userModel.js"));
app.use(require("./models/reviewModel.js"));
app.use(require("./models/publicationsModel.js"));

app.post('/register', (req, res) =>{
    const {username, password} = req.body;

    const user = new user({username, password});

    user.save(err =>{
        if(err){
           res.status(500).send('ERROR AL REGISTRAR AL USUARIO'); 
        }else{
           res.status(200).send('USUARIO REGISTRADO');
        }
    });
});
app.post('/authenticate', (req, res) =>{
    const {username, password} = req.body;

    user.findOne({username}, (err, user) =>{
        if(err){
            res.status(500).send('ERROR AL AUTENTICAR AL USUARIO'); 
         }else if(!user){
            res.status(500).send('EL USUARIO NO EXISTE');
         }else{
            user.isCorrectPassword(password, (err, result) =>{
                if(err){
                    res.status(500).send('ERROR AL AUTENTICAR AL USUARIO'); 
                }else if(result){
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
                }else{
                    res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
                }
            });
         }
    });
});

// Prueba de Respuesta en Pagina Inicial
app.get("/", (req, res)=>{
    res.send("Bienvenidos Alumnos :) !!!")
})

app.listen(3000, ()=>{
    console.log("¡Server UP! en http://localhost:3000/")
})