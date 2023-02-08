import 'dotenv/config';
import mongoose from "mongoose";
import config from "../configs";
import logger from "../utils/logger";


let dataBase;

const connect=async()=>{
     const MONGODB_URL=config.DB_CONNECTION_STRING;
    if(dataBase)return;
    
    mongoose.connect(MONGODB_URL)
    .then((connection)=>{
     dataBase=connection;
    logger.info("DATABASE CONNECTED");
    })

    .catch((err)=>{
        logger.error(err.message);
    })    
}
export {connect};