import mongoose from "mongoose";
// Connecting to Database

export const connectDB = () => {
    mongoose
        .connect( process.env.MONGO_URI, { dbName: "nodeapi" } )
        .then( () => console.log( "Database Connected" ) )
        .catch( ( e ) => console.log( e ) );
};