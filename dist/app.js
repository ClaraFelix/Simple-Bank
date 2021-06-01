"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const conta_1 = __importDefault(require("./routes/conta"));
class Application {
    constructor() {
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', 3000);
        this.app.set('views', path_1.default.join(__dirname, 'views'));
        this.app.engine('.hbs', express_handlebars_1.default({
            layoutsDir: path_1.default.join(this.app.get('views'), 'layout'),
            partialsDir: path_1.default.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
        }));
        this.app.set('view engine', '.hbs');
    }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        /*detectar envio de dados dentro da API */
        //pegar dados via json 
        this.app.use(express_1.default.json());
        //pegar dados do formulário via url 
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(routes_1.default);
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
        this.app.use('/conta', conta_1.default);
    }
    //Iniciar servidor utilizando porta 3000
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor ok');
        });
    }
}
//Exportação da aplicação
exports.default = Application;
