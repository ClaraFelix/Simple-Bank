"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Iniciar a aplicação, importar classe database e inciar conexão
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
database_1.default();
const app = new app_1.default();
app.start();
