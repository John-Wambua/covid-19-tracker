const mongoose=require('mongoose');
require('dotenv').config();

process.on('uncaughtException',err=>{
    console.log('Uncaught Exception...📌');
    console.log(err);
    process.exit(1)

})
process.on('uncaughtRejection',err=>{
    console.log('Uncaught Promise Rejection...📌');
    console.log(err);
    process.exit(1)

})
const app=require('./app')

mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    },err=>{
        if (err) return console.log('Database connection failed',err);
        console.log('Database Connected Successfully');
    });


const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`);
})