import {connect,disconnect} from 'mongoose'
/*export default*/ async function connectToDatabase() {  //Default exports are typically used when there is a single main export from a module.
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error("cannot connect to MongoDB");
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("cannot disconnect from MongoDB");
    }
}

export{connectToDatabase,disconnectFromDatabase};