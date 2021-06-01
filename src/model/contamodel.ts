import {Schema, model} from 'mongoose';

const ContaSchema = new Schema({
    email:{
        type: String,
        required:true,
        lowercase: true,


    },
    senha:{
        type: String,
        required: true,
        louwercase: true

    },
    cc:{
        type: String,
        required: true,
        louwercase: true

    },
    ag:{
        type: String,
        required: true,
        louwercase: true

    },
    saldo:{
        type: String,
        required: true,
        louwercase: true

    },
    contato:{
        type: String,
        required: true,
        louwercase: true

    },
    nome:{
        type: String,
        required: true,
        louwercase: true

    }
});
export default model('conta', ContaSchema);