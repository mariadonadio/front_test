import { Schema, model, Document } from 'mongoose';
import { Provider } from '../interfaces/provider';

interface ProviderModel extends Provider, Document {}

export const ModelClienteSchema = new Schema
({
  name:{
    type: String,
    required: true,
    default:'nuevo'
  },
  cuit:{
    type: Number,
    required: true,
    default:null
  },
  email:{
    type: String,
    required:true,
    default:null
  },
  address:{
    type: String,
    required:true,
    default:null
  },
  phone:{
    type: Number,
    required: true,
    default:null
  },
  ri:{
    type:Boolean,
    required: true,
    default:null
  } },
  { collection : 'provider' } 
);

export default model<ProviderModel>('provider',ModelClienteSchema);
