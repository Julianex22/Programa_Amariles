const mongoose =require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
//Schemas
const Schema = mongoose.Schema;//instanciar schema

const TaskSchema = new Schema({// definimos nuevo schema

      datos_cliente:{
          nombre:String,
          tipo_proceso:String
      },
      datos_demandante:{
          nombre:String,
          cedula:String
      },
      status:{
       type:Boolean,
       default:false
   },
   datos_titular:{
    nombre:String,
    cedula:String,
    direccion:String,
    email:String,
    tel:{type:[],
        default:undefined},
    juzgado:String,
    radicado:String,
    subrogado:String,
    fecha_activacion:Date,
    fecha_finalizacion:Date,
    capital_adeudado:String
   
},
etapa:{instancia:{type:[String]}  ,  fecha:{type:[Date]}}
,
datos_contacto:{
    nombre:{type:[String],
        default:undefined},
    cedula:{type:[String],
        default:undefined},
    celular1:{type:[String],
        default:undefined},
        celular2:{type:[String],
            default:undefined},
            celular3:{type:[String],
                default:undefined},
                celular4:{type:[String],
                    default:undefined},
                    celular5:{type:[String],
                        default:undefined},
                        celular5:{type:[String],
                            default:undefined},
    email:{type:[String],
        default:undefined},

},
datos_codeudor: {
    nombre:{type:[String],
        default:undefined},
    cedula:{type:[String],
        default:undefined},
    celular0:{type:[],
                default:undefined,
                  celularere:{type:[String],
                       default:undefined}},
        celular1:{type:[String],
            default:undefined},
            celular2:{type:[String],
                default:undefined},
                celular3:{type:[String],
                    default:undefined},
                    celular4:{type:[String],
                        default:undefined},
                        celular5:{type:[String],
                            default:undefined},
                            celular6:{type:[String],
                                default:undefined},
                                celular7:{type:[String],
                                    default:undefined},
    direccion:{type:[String],
            default:undefined},
    email:{type:[String],
        default:undefined}
},

avance_proceso:{
observaciones:{type:[String],
        default:undefined},
        medidas:{type:[String],
            default:undefined},
            actuaciones:{type:[String],
                default:undefined},
                impulsos:{type:[String],
                    default:undefined}
                 
},
    
    

});

module.exports= mongoose.model('tasks', TaskSchema)//definimos el modulo y lo exportamos
//module.exports=mongoose.model('prueba', PruebaSchema)