import pino from "pino";
import { colorizerFactory } from "pino-pretty";
const logger=pino({
    transport:{

        target:'pino-pretty',
        options:{
        colorizerFactory:true,
        translateTime:`SYS:yyyy-mm-dd HH:MM:ss.l o`,
        ignore:"pid,hostname"

    }
},
    
});

export default logger;