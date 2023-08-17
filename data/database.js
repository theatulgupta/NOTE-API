import mongoose from "mongoose";
// Connecting to Database

export const connectDB = () => {
    mongoose
        .connect( process.env.MONGO_URI, { dbName: "nodeapi" } )
        .then( (c) => console.log( `Database Connected to ${c.connection.host}` ) )
        .catch( ( e ) => console.log( e ) );
};