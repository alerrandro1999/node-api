import  express  from "express";
import mongoose from 'mongoose';
import routes from "./routes";
const app = express();

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost/firstapi');

app.use(express.json());

app.use(routes);

app.get('/', (req, res) => {
    res.send("Ola");
});

app.listen(3000, () =>{
    console.log('Server is listening');
});


