import express from 'express';
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
import cors from 'cors'

export const app = express();

config( {
    path: "./data/config.env"
} );

// Using Middleware
app.use( express.json() );
app.use( cookieParser() );
app.use( cors( {
    origin: [ process.env.FRONTEND_URI ],
    methods: [ "GET", "POST", "PUT", "DELETE" ],
    credentials: true
} ) );


// Using Routes
app.use( "/users", userRouter );
app.use( "/task", taskRouter );

app.get( "/", ( req, res ) => {
    res.send( `Welcome to NOTE API.  
    This API is developed by - Atul Kumar Gupta.  
    Date : ${ new Date( Date.now() ) }` );
} );

// Using Error Middleware
app.use( errorMiddleware )
