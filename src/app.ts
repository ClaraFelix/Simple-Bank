import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';
//Routes
import indexRoutes from './routes';
import taskRoutes from './routes/conta';
class Application{

    app: express.Application;

    constructor(){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }
    //configurações
    settings(){
        this.app.set('port',3000);
        this.app.set('views', path.join(__dirname,'views'));
        this.app.engine('.hbs',exphbs({
	        layoutsDir: path.join(this.app.get('views'), 'layouts'),
	        partialsDir: path.join(this.app.get('views'), 'partials'),
	        defaultLayout: 'main',
	        extname:'.hbs'
        }));
 	    this.app.set('view engine','.hbs');   
        
    }
/*
Middleware é um software que fornece serviços e recursos comuns a aplicações.
 Gerenciamento de dados, serviços de aplicações, sistema de mensageria, autenticação 
 e gerenciamento de APIs são recursos comumente operados por um software de middleware.
*/
    middlewares(){
        this.app.use(morgan('dev'));
    /*detectar envio de dados dentro da API */
	//pegar dados via json 
	this.app.use(express.json());
	//pegar dados do formulário via url 
	this.app.use(express.urlencoded({extended: false}));

    }
/*
O Roteamento refere-se à definição de terminais do aplicativo (URIs) e como eles 
respondem às solicitações do cliente.
*/
    routes(){
        this.app.use(indexRoutes);
        this.app.use(express.static(path.join(__dirname,'public')));
        this.app.use('/conta',taskRoutes);

    }
/* Inicializar aplicação*/
    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor Ok')

        });
    }
}

export default Application;