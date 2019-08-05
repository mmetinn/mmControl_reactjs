import express from 'express';
import config from '../../config';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { con } from '../../index';

/*const users = [
    {
        _id: "user123",
        firsName: "Muhammet",
        lastName: "Metin",
        email: "mehmetmetin@gmail.com",
        password: "123456"
    }
]*/

const route = () => {

    const router = new express.Router();
    router.route('/login').post((req, res) => {
        const { email, password } = req.body;
        const passwordHashed = crypto.createHmac('sha256', config.passwordSecret).update(password).digest('hex');

        var users = {}

        con.query("SELECT * FROM doctors", function (err, result, fields) {
            if (err) throw err;
            var emailIsAvailable = findEmailInJson(result, email);
            console.log(emailIsAvailable);

            if (!emailIsAvailable) {
                res.send({
                    status: false,
                    message: "Böyle bir email adresi sistemde kayıtlı değil."
                })
            } else {
                if (emailIsAvailable.doctor_password === passwordHashed) {
                    const token = jwt.sign({ userId: emailIsAvailable.doctor_id }, config.jwtSecret);
                    res.send({
                        status: true,
                        token: token,
                        userData: result
                    })
                } else {
                    res.send({
                        status: false,
                        message: "Hatalı şifre girdiniz."
                    })
                }
            }

        });

    });
    //const user = users.find((user) => user.email === email);


    router.route('/sign-up').post((req, res) => {
        const { isDoctor, sex, degree, doctorName, doctorLastName, dateOfBirth, placeOfWork, expertise,
            liveCity, liveTown, phoneNumber, email, emailRepeat, password, passwordRepea } = req.body;
        console.log(password);

        const passwordHashed = crypto.createHmac('sha256', config.passwordSecret).update(password).digest('hex');
        let stateQuery={
            status:true,
            registered: true,
            errMessage:'Kayıt başarıyla gerçekleşti.'
        }
        var sql = "INSERT INTO doctors (isDoctor, doctor_sex,doctor_degree,doctor_name," +
            "doctor_lastname,doctor_dateofbirth,doctor_placeofwork,doctor_expertise," +
            "doctor_livecity,doctor_livetown,doctor_phonenumber,doctor_email,doctor_password) VALUES ('" + isDoctor + "','" + sex + "','"
            + degree + "','" + doctorName + "','" + doctorLastName + "','"
            + dateOfBirth + "','" + placeOfWork + "','" + expertise + "','"
            + liveCity + "','" + liveTown + "','" + phoneNumber + "','" + email + "','" + passwordHashed + "')";
        con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                if(err.sqlMessage.search('doctor_email')!==-1){
                    stateQuery.status=false;
                    stateQuery.registered=false;
                    stateQuery.errMessage='Bu email zaten sistemimizde kayıtlı';
                }else if(err.sqlMessage.search('doctor_phonenumber')){
                    stateQuery.status=false;
                    stateQuery.registered=false;
                    stateQuery.errMessage='Bu telefon numarası zaten sistemimizde kayıtlı';                    
                }
                res.send(stateQuery);
                return;
            } else {
                res.send(stateQuery);                
                console.log("1 record inserted");
            }
        });



    })
    return router
}

function findEmailInJson(jsonArray, email) {

    for (var i = 0; i < jsonArray.length; i++) {
        if (jsonArray[i]['doctor_email'] == email) {
            console.log(jsonArray[i]);
            return jsonArray[i];
        } else {
            console.log('not finded');
            return false;
        }
    }
}

export default {
    route,
    routePrefix: `/${config.version}/auth`
}