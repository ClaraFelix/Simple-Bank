//Conectar ao banco de dados
import mongoose from 'mongoose';

async function connect(){

    try {
       await mongoose.connect('mongodb://localhost/simplebank'
       , {
           useNewUrlParser:true
       });
       console.log('>>> Conectado ao Banco de dados')
    } catch (error) {
        console.log('fracassou')
        
    }
}
export default connect;