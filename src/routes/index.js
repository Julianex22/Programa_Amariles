const express= require('express');
const cors = require('cors')
const router= express.Router();
const passport= require('passport')
const expressSession=require('express-session')
const mongoStore = require('connect-mongo')(expressSession);
const MONGO_URL= 'mongodb://localhost:27017/crud-mongo';
const passportConfig= require('../config/passport')
const moment=require('moment');

const path= require('path')

router.use(cors())

//moment().format();
//moment.locale('es');


router.use(expressSession({
    secret: 'cadena secreta',//cadena para cifrar los cookies
    resave:true,//Fuerza que cada llamada que se haga al servidor se guarde en la base de dartos
    saveUninitialized:true,
    store: new mongoStore({
        url:MONGO_URL,
        autoReconnect:true
    })
  }))

//passport
router.use(passport.initialize());
router.use(passport.session())

// Serve the static files from the React app
//router.use(express.static(path.join(__dirname, '../../frontend-app/public')));

const Task= require('../models/task');//requerimos el modelo
const Tarea =require('../models/tareas');// requerimos el otro modelo
const Usuario =require('../models/users');// requerimos el otro modelo
const Cobro = require('../models/cobros');// requerimos el otro modelo

const controladorUsuario= require('../controladores/usuario');

//var mongoose = require('mongoose');
  //var PruebaSchema = mongoose.Schema;
//var schemita = new PruebaSchema(
  //  {nombre:String}
  //);
  
  //var modelito= mongoose.model('prueba', schemita)




/*router.post('/register', async (req,res)=>{
    
    const user = new User();

   user.username=req.body.username
   user.password=req.body.password
   console.log(user)
   console.log(req.body) 
   await user.save();
         
    res.redirect('/');
})*/

/*const u = new Usuario({
    email:'jbuiles@live.com',
    password:'12345',
    nombre:'Julian'

})

  u.save()
  .then(()=>{
      console.log('Usuario guardado')

  })

  .catch((error)=>{
      console.log(error)
  });*/


router.get('/login', controladorUsuario.postLogin);
router.post('/signup', controladorUsuario.postSignup);
router.post('/login', controladorUsuario.postLogin);
router.get('/logout',passportConfig.estaAutenticado ,controladorUsuario.logout);

router.get('/usuarioInfo',passportConfig.estaAutenticado, (req,res)=>{
    res.json(req.user);
})

//ruta de prueba
router.get('/api/getList', (req,res) => {
    var list = [{"id": 1,
    "name": "Julian Builes",
    "username": "Builes Zapata"}];
    res.send(list);
    console.log('Sent list of items');
});

router.get('/activos', async (req,res)=>{
    const tasks= await Task.find({ "etapa.instancia": { $ne: "Terminado" }});
        res.render('index', {
        tasks:tasks
     });
       
});

router.get('/terminados', async (req,res)=>{
    const tasks= await Task.find({"etapa.instancia":"Terminado"});//Esta busqueda se ejecuta sobre un string por eso el valos del campo debe estar entre comillas
          
    
       res.render('index', {
        tasks:tasks
        
    })   
        });

router.get('/inicio2', async (req,res)=>{
    const tasks= await Task.find();
        res.render('index2', {
        tasks:tasks
     });
       
});


//Ruta inicial Logo
router.get('/', async (req,res)=>{
    const tasks= await Task.find();
    res.render('initial', {
        tasks:tasks
        
        });
});



router.get('/add',async (req,res)=>{
    const tasks= await Task.find();
    res.render('add', {
        tasks:tasks
         
    });
});



//Ruta para agregar
router.post("/add", async (req,res)=>{
    try{
   const task = new Task();
   
   task.datos_cliente.nombre = req.body.cliente
   task.datos_cliente.tipo_proceso=req.body.tipo_proceso

   task.datos_demandante.nombre=req.body.nombre_demandante
   task.datos_demandante.cedula=req.body.cedula_demandante
    

   task.datos_titular.nombre=req.body.nombre
   task.datos_titular.cedula=req.body.cedula
   task.datos_titular.direccion=req.body.direccion
   task.datos_titular.email=req.body.email
   task.datos_titular.tel=req.body.tel
   task.datos_titular.capital_adeudado=req.body.capital
   task.datos_titular.juzgado=req.body.juzgado
   task.datos_titular.radicado=req.body.radicado

   task.etapa.instancia = req.body.instancia
   task.etapa.fecha=req.body.fecha_etapa
   //task.etapa.Admisión=req.body.Admisión
   //task.etapa.Notificación=req.body.Notificación
   //task.etapa.Sentencia=req.body.Sentencia
   //task.etapa.Proceso_fallido=req.body.Proceso_fallido
   
   
   task.datos_titular.subrogado=req.body.subrogado
   task.datos_titular.fecha_activacion=req.body.fecha_activacion
   task.datos_titular.fecha_finalizacion=req.body.fecha_finalizacion


   task.datos_contacto.nombre=req.body.contacto_nombre
   task.datos_contacto.cedula=req.body.contacto_cedula
   task.datos_contacto.celular1=req.body.contacto_celular1
   task.datos_contacto.celular2=req.body.contacto_celular2
   task.datos_contacto.celular3=req.body.contacto_celular3
   task.datos_contacto.celular4=req.body.contacto_celular4
   task.datos_contacto.celular5=req.body.contacto_celular5
   task.datos_contacto.celular6=req.body.contacto_celular6
   task.datos_contacto.celular7=req.body.contacto_celular7
   task.datos_contacto.celular8=req.body.contacto_celular8
   task.datos_contacto.email=req.body.contacto_email

   task.datos_codeudor.nombre=req.body.codeudor_nombre
   task.datos_codeudor.cedula=req.body.codeudor_cedula
   task.datos_codeudor.celular0=req.body.codeudor_tel0
   task.datos_codeudor.celular1=req.body.codeudor_tel1
   task.datos_codeudor.celular2=req.body.codeudor_tel2
   task.datos_codeudor.celular3=req.body.codeudor_tel3
   task.datos_codeudor.celular4=req.body.codeudor_tel4
   task.datos_codeudor.celular5=req.body.codeudor_tel5
   task.datos_codeudor.celular6=req.body.codeudor_tel6
   task.datos_codeudor.celular7=req.body.codeudor_tel7
   task.datos_codeudor.celular8=req.body.codeudor_tel8




   task.datos_codeudor.direccion=req.body.codeudor_dir
   task.datos_codeudor.email=req.body.codeudor_email

  

   task.avance_proceso.observaciones=req.body.observaciones
   task.avance_proceso.medidas=req.body.medidas
   task.avance_proceso.actuaciones=req.body.actuaciones
   task.avance_proceso.impulsos=req.body.impulsos
   console.log(`esta es la fecha de cobro ${req.body.fecha_activacion}` )
   console.log(typeof req.body.fecha_activacion)
   console.log(`Este seria el objeto task ${task}`)  
      
   await task.save();
   
    }
    catch (error) { 
        console.error(`este es el ${error}`)
    }
     console.log(req.body) 
     
    res.redirect('/activos');
})


//ruta para cambiar el status 
router.get('/turn/:id',  async (req,res)=>{
    const {id}= req.params;
    const task = await Task.findById(id)
task.status=!task.status;
     await task.save();
    res.redirect('/initial');
    })

    //ruta para cambiar el status de las tareas
router.get('/turn_tareas/:id',  async (req,res)=>{
    const {id}= req.params;
    const task = await Tarea.findById(id)
task.status=!task.status;
task.fecha_ejecucion= moment.utc()
     await task.save();
    res.redirect('/listar_tareas');
    //res.send(task)
    //console.log(` este es un ${typeof task}` )
    })
    
//ruta para mostrar la informacion
router.get('/show/:id', async(req,res)=>{
    const {id}= req.params;
    const task = await Task.findById(id);
     
    
    res.render('show',{
        task
                    
    });console.log(task.etapa.instancia.length)
    });

//ruta para editar solo las etapas
router.get('/edit_etapa/:id', async(req,res)=>{
    const {id}= req.params;
    const task = await Task.findById(id);
    res.render('edit_etapa',{
        task
    });
   

    });

//ruta para guardar etapa editada
router.post('/edit_etapa/:id', async(req,res)=>{
    const {id} = req.params;
    await Task.updateMany({_id:id},{$push:{'etapa.instancia' : req.body.instancia, 'etapa.fecha' : req.body.fecha_etapa}});
    //db.collection.update( <query>,{ $push: { <field>: <value> } })
    console.log(req.body);
    res.redirect('/activos')

});

    //ruta para editar
    router.get('/edit/:id', async(req,res)=>{
        const {id}= req.params;
        const task = await Task.findById(id);
        res.render('edit',{
            task
        });
       

        });
        //ruta para guardar lo editado
       router.post('/edit/:id', async(req,res)=>{
           const {id} = req.params;
           await Task.updateOne({_id:id}, req.body);
           const task = await Task.findById(id);
           console.log(req.body);
           /* res.redirect('/activos') */ 
           res.render('edit',{
               task
        }) 

       });

       //ruta para borrar
router.get('/delete/:id',async (req,res)=>{
    const {id} = req.params;
    await Task.remove({_id:id});
        res.redirect('/activos')
        
    });

    //ruta para borrar tareas
router.get('/delete_tareas/:id',async (req,res)=>{
    const {id} = req.params;
    await Tarea.remove({_id:id});
        res.redirect('/listar_tareas')
        
    });

    //ruta para mostrar formulario de edicion.
    router.get('/edit_tareas/:id',async(req,res)=>{
        const {id}= req.params;
    const task = await Tarea.findById(id);
    res.render('edit_tareas',{
        task
    })
    })

    //ruta para guardar tareas editadas
    router.post('/edit_tareas/:id', async(req,res)=>{
        const {id} = req.params;
        await Tarea.update({_id:id}, req.body);
        console.log(req.body);
        res.redirect('/listar_tareas')

    });


     router.get('/prueba_tabla', (req,res)=>{
         res.render('prueba_tabla')
     })

    router.get('/find', async (req,res)=>{
        const tasks= await Task.find();
        res.render('partials/find', {
            tasks:tasks,
        });
    });

    router.get('/find/cedula', async (req,res)=>{
        const tasks= await Task.find();
        res.render('partials/cedula', {
            tasks:tasks,
        });
    });

//ruta para buscar
router.post('/find',async(req,res)=>{
   console.log(req.body)
    //task=await Task.find(req.body);
       var tasks= await Task.find({"datos_titular.nombre":{$regex:(req.body.nombre_titular),$options:"$i"}})//esta es una regex con un case insensitive $options:"$i"
       console.log(req.body.nombre_titular);
       console.log(`este es el objeto encontrado ${tasks.length}`)
try{

    if (tasks === []){
        throw("No encontrado")
    }
}
catch(error){
     res.render('error',{
         error,
        

        })
}

    res.render('index',{
    tasks
});
});



router.post('/find/cedula',async(req,res)=>{
    console.log(req.body)
        var tasks=await Task.find({ $or: [ {"datos_titular.cedula" : {$regex:(req.body.cedula),$options:"$i"} }, { price: 10 } ] })  //esta es una regex con un case insensitive $options:"$i"
        console.log(` este es el req.body.cedula_titular${req.body.cedula_titular}`);
       console.log(`este es Tasks${tasks}`)
 res.render('present',{
     tasks
 });
 
 });




 //ruta para buscar por cualquier criterio
router.post('/busquedageneral',async(req,res)=>{
    console.log(req.body)
    var tasks=await Task.find({"datos_titular.cedula":{$regex:(req.body.cedula),$options:"$i"}})  //esta es una regex con un case insensitive $options:"$i"
    res.send(tasks)
})





router.get('/cobro', async (req,res)=>{
    const tasks= await Task.find();
          
    
       res.render('gestion', {
        tasks:tasks,
        fecha:moment().toString()
        
              
        });
       console.log(fecha)
});

//ruta para mostrar el formulario que crea las tareas
router.get('/tareas/:id', async (req,res)=>{
    
    const {id}= req.params;
    const task = await Task.findById(id);
        res.render('tareas', {
        task
        
              
        });
        //console.log(task)
       
});

//Ruta que guarda las tareas
router.post('/tareas/:id', async (req,res)=>{
    const {id}= req.params;
    const tarea = new Tarea();
   const ownerCaso = await Task.findById(id)
   tarea.demandado=ownerCaso.datos_titular.nombre
   tarea.tipo_proceso=ownerCaso.datos_cliente.tipo_proceso
   tarea.descripcion=req.body.descripcion
   tarea.fecha=req.body.fecha
   tarea.proceso = id
   tarea.creado_por= req.body.creado_por
   //console.log(id)
   //console.log(tarea)
   /* console.log(req.body)  */
   console.log(`Este el dueño del caso ${ownerCaso}`)
   console.log(`Esta es la tarea ${tarea}`)
   await tarea.save();
       // res.status(200).send( {message:'hola'})
    res.redirect('/listar_tareas');
   
     
})

//Ruta que lista todas las tareas
router.get('/listar_tareas', async (req,res)=>{
    const tasks= await Tarea.find({status:false});
    const caso = await Task.find();
    
          
       res.render('listar_tareas', {
        tasks:tasks,
        caso
    });
    /* console.log(tasks)
    console.log(caso)  */
   
 
});

//Ruta que lista las tareas por caso
router.get('/tareas_caso/:id', async (req,res)=>{
    const {id}= req.params
    const tarea = await Tarea.find({proceso:id});
    const tasks = await Task.find({_id:id});
          
       res.render('tareas_caso', {
        cliente:tasks[0].datos_cliente.nombre,
        proceso:tasks[0].datos_cliente.tipo_proceso,
        demandado:tasks[0].datos_titular.nombre,
        cedula:tasks[0].datos_titular.cedula,
        tasks:tasks,
        tarea
        
    });
    console.log(tarea)
    console.log(tasks)
 
});
router.get('/authentic', async (req,res)=>{
    const tasks= await Task.find();
          
    
       res.render('authentic', {
        tasks:tasks
        
              
        });
       
});

router.use('/user', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
  }, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
  });
  
router.get('/user', function (req, res, next) {
    res.send('USER');
  });


//ruta para pruebas recorrer array y objeto
router.post('/prueba', async (req,res)=>{

    var tasks=await Task.find({title:{$regex:(req.body.title),$options:"$i"}});//esta es una regex con un case insensitive $options:"$i"
     res.render('present', {
         tasks:tasks
     }) 
});






       

module.exports = router;


