import cookieParser from 'cookie-parser';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { Application} from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

//parser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'] }));

//application routes

app.use('/api/v1',router)


const test = async (req:Request, res:Response)=>{

    const a = 10;
    res.send(a)
}

app.get('/',test)

app.use(globalErrorHandler)

//not found route
app.use(notFound)
export default app;
