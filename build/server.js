"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const postgresql_config_js_1 = require("./utils/postgresql.config.js");
const mongoose_1 = require("mongoose");
const app_js_1 = require("./app.js");
const PORT = process.env.PORT || 3001;
// Mongo connection string
const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.94wxqpb.mongodb.net/products?retryWrites=true&w=majority`;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connect)(CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected to MongoDB Atlas');
        yield (0, postgresql_config_js_1.authenticate)();
        yield (0, postgresql_config_js_1.sync)();
        console.log('Database connected to PostgreSQL');
        (0, app_js_1.listen)(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (err) {
        console.log(err);
        // proceso nativo de javascript diseñado para terminar el proceso actual.
        process.exit(1);
    }
    ;
});
start();
