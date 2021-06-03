//Conectar ao banco de dados
import mongoose from 'mongoose';

async function connect(){

    try {
       await mongoose.connect('mongodb+srv://User:Jose08071968*@cluster0.nxnzj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
       , {
           useNewUrlParser:true
       });
       console.log('>>> Conectado ao Banco de dados')
    } catch (error) {
        console.log('fracassou')
        
    }
}
export default connect;