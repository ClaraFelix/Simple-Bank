//Iniciar a aplicação, importar classe database e inciar conexão
import App from './app';
import database from './database';
database();
const app = new App();
app.start();