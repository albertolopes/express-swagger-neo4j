import express from "express"
import {promises as fs} from "fs";
import "./src/configs/LogConfig.js";
import routes from "./src/routes/Routes.js";
import swagger from "./src/configs/SwaggerConfig.js"

const { readFile, writeFile} = fs;

const app = express();
app.use(express.json());
app.use(routes);
app.use(swagger)
app.listen(3000, async () => {    
    try {
        await readFile(global.fileName, "utf8");
        logger.info("API Started at port 3000");        
    } catch (err) {
        const initialJson = {
            nextId: 1,
            accounts: []
        }        
        writeFile(global.fileName, JSON.stringify(initialJson)).then(() => {
            logger.info("API Started and File Created!");
        }).catch(err => {
            logger.error(err);
        });
    }
});