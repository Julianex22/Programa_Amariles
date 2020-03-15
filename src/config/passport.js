const passport= require('passport')
const LocalStrategy= require('passport-local')
const Usuario= require('../models/users');

passport.serializeUser((usuario,done)=>{
    done(null, usuario._id);
})


passport.deserializeUser((id,done)=>{
    Usuario.findById(id,(err,usuario)=>{
        done(err,usuario)
    })

})

passport.use(new LocalStrategy(
    {usernameField:'email'},
    (email,password,done)=>{
        Usuario.findOne({email},(err,usuario)=>{
            if (!usuario){
                return done(null,false, {message:`Èste ${email} no esta registrado`});
              }
              else{
                  usuario.compararPassword(password,(err,sonIguales)=>{
                  if (sonIguales){
                      return done(null, usuario);
                    }
                      else{
                        return done(null, false, {message:'La contraseña no es valida'});
                      }
                    })
             }
        })
    }
))

exports.estaAutenticado= (req,res,next)=>{
    if (req.isAuthenticated()){
        return next();
    }
    res.status(401).send('Tienes que hacer login para acceder a este recurso')
}