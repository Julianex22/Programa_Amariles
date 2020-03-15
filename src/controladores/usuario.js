const passport = require('passport');

const passportConfig= require('../config/passport')
const Usuario = require('../models/users');

exports.postSignup=(req,res,next)=>{
    const usuario = new Usuario({

        email:req.body.email,
        nombre:req.body.nombre,
        password:req.body.password

    });

    console.log(req.body)

    Usuario.findOne({email:req.body.email}, (err, usuarioExistente)=>{
        if (usuarioExistente){
        return res.status(400).send('Ya ese email esta registrado');
    }

usuario.save((err)=>{
        if(err) {
            next(err);
        }
        req.logIn(usuario,(err)=>{
            if (err){
                next(err);
            }
            res.send('Usuario creado exitosamente');

        })

    })

    })

}

exports.postLogin = (req,res,next)=>{
passport.authenticate('local', (err,usuario,info)=>{
    if (err) {
        next(err)
    }
    if (!usuario){
        return res.status(400).send('Email o contraseña no validos');
    }

    req.login(usuario, (err)=>{
        if(err) {
            next(err);
        }
        res.render('bienvenida')
        /*req.session.cuenta= req.session.cuenta ?  req.session.cuenta + 1 : 1;
    res.render('index', {
        cuenta:`esta es el numero de veces que un usuario ha vista la pagina web " ${req.session.cuenta}"`

    })*/
    })
})(req,res,next);


}

exports.logout= (req,res)=>{
    req.logout();
    res.render('initial')
}




    

   