//Todas as rotas para delete create register delete e update
import{Router, Request, Response, request, response} from 'express';
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
        await novaConta.save();
        res.send('Sua conta Simple Bank foi criada com sucesso');
    });
//login
router.route('/login')
    .get((req: Request, res: Response)=>{
        res.render('conta/login');
    })
    .post((req: Request, res: Response) =>{
        console.log(req.body);
        res.send('Seja Bem vindo a sua conta Simple Bank');
    });
//saldo
router.route('/saldo')
    .get(async(req:Request, res: Response) => {
       const saldo = await ContaModel.find();
       console.log(saldo);
        res.render('conta/saldo', { saldo });
    });
//extrato
router.route('/extrato')
    .get((req: Request, res: Response)=>{
        res.render('conta/extrato');
    })
    .post((req: Request, res: Response) =>{
        console.log(req.body);
        res.send('A conta não possui movimentação');
    })

export default router;