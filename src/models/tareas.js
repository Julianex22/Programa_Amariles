const mongoose =require('mongoose');
var tasks = mongoose.model('tasks');
var ObjectId = mongoose.Schema.Types.ObjectId;
//Schemas
const schema_tareas = mongoose.Schema;

const Tarea_Schema = new schema_tareas({
    status:{
        type:Boolean,
        default:false
    },
    demandado:String,
    tipo_proceso:String,
      descripcion:String,
      fecha:Date,
      //recordar:Number,
      proceso: { type: schema_tareas.Types.ObjectId
    },
    observaciones:String,
    fecha_ejecucion:Date,
    creado_por:String
      });

module.exports= mongoose.model('tarea', Tarea_Schema)
