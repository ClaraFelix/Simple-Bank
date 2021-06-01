import{Router, Request, Response} from 'express';
//Rotas
const router = Router();
router.get('/',(req: Request, res: Response)=>{
    res.render('index');
})

export default router;