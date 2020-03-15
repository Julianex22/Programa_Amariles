const mongoose =require('mongoose');//rrequerimos mongoose
/* var cobros = mongoose.model('cobros');// guardamos en la variable "cobros" este es el modelo que vamos a utilzar */
var ObjectId = mongoose.Schema.Types.ObjectId;
//Schemas
const schema_cobros = mongoose.Schema;

const Cobro = new schema_cobros({
    status:{
        type:Boolean,
        default:false
    },
      descripcion:String,
      fecha:Date,
      //recordar:Number,
      proceso: { type: schema_cobros.Types.ObjectId
    },
    observaciones:String,
    creado_por:String
      });

module.exports= mongoose.model('cobro', Cobro)
