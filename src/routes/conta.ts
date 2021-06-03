//Todas as rotas para delete create register delete e update
import{Router, Request, Response, request, response} from 'express';
import db from '../database';
//Model
import ContaModel from '../model/contamodel';

//Rotas
const router = Router();
//registro
router.route('/register')
    .get((req: Request, res: Response) => {
        res.render('conta/register');
    })
    .post(async (req: Request, res: Response) =>{
        const {email, senha, cc,saldo,ag, nome, contato} = req.body;
        const novaConta = new ContaModel({ email, senha, cc, saldo, ag, nome, contato});
        console.log(novaConta);
        await novaConta.save();
        res.send('Sua conta Simple Bank foi criada com sucesso');
    });
//login
router.route('/login')
    .get((req: Request, res: Response)=>{
        res.render('conta/login');
    })
    .post(async(req: Request, res: Response) =>{
        console.log(req.body);
        const email=req.body.email;
        const senha=req.body.senha;
        const conta = await ContaModel.find({email: email, senha: senha}).lean();
        console.log(conta);
        //Validação de dados
        if(conta.length == 0) {
            res.render('conta/login');

       }else{
        res.render('conta/extrato', {conta});

       }
      
    });
//saldo
router.route('/saldo')
    .get(async(req:Request, res: Response) => {
       const saldo = await ContaModel.find().lean();
       const conta = await ContaModel.find({}).lean();
       console.log(saldo);
        res.render('conta/saldo', { conta });
    });
//extrato
router.route('/extrato')
    .get((req: Request, res: Response)=>{
        res.render('conta/extrato');
    })
   

export default router;