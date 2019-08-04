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
            var retVal = findEmailInJson(result, email);
            console.log(retVal);

            if (!retVal) {
                res.send({
                    status: false,
                    message: "böyle bir email adresi sistemde kayıtlı değil"
                })
            } else {
                if (retVal.doctor_password === passwordHashed) {
                    const token = jwt.sign({ userId: retVal.doctor_id }, config.jwtSecret);
                    res.send({
                        status: true,
                        token: token
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



        var sql = "INSERT INTO doctors (isDoctor, doctor_sex,doctor_degree,doctor_name," +
            "doctor_lastname,doctor_dateofbirth,doctor_placeofwork,doctor_expertise," +
            "doctor_livecity,doctor_livetown,doctor_phonenumber,doctor_email,doctor_password) VALUES ('" + isDoctor + "','" + sex + "','"
            + degree + "','" + doctorName + "','" + doctorLastName + "','"
            + dateOfBirth + "','" + placeOfWork + "','" + expertise + "','"
            + liveCity + "','" + liveTown + "','" + phoneNumber + "','" + email + "','" + password + "')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });


        res.send(passwordHashed);
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