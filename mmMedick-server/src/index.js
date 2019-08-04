import express from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes';
import mysql from 'mysql';
import cors from 'cors';
export const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mm_control"
});




const app = express();
//bu alttaki satırı google chrome başka sitelere bağlanmayı 
//reddediyor onu belirtmek için cors kütüphanesini ekledik
//bu bir middleware
app.use(cors());
//alltaki iki satırda sunucudan gelen json dosyayı bizim 
//nodemuz string olarak beklediği için bu dönüşüm işini yapıyoruz
//bunun için de "npm install body-parser --save" yaptık ve bunları yazdık
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

authRouter(app)

app.get('/', (req, res) => {
  res.send("M&M Control Rest Apis");
});



app.listen(3300, () => console.log('Server has been started'));
