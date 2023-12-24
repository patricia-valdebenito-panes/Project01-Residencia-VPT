import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transport = nodemailer.createTransport({
    host: process.env.IMAIL_HOST,
    port: process.env.IMAIL_PORT,
    auth: {
      user: process.env.IMAIL_USER,
      pass: process.env.IMAIL_PASS
    }
});

const emailRegister = async ( datos ) => {
    console.log("datos",datos);
    const { name, email, token } = datos;
    console.log(transport)
    const information = await transport.sendMail({
        from:'"Residencia vida plena" <cuentas23435@residenciavideplena.com',
        to:email,
        subject:"Residencia - Confirma tu cuenta",
        text:"Confirma tu cuenta",
        html:`<p>Hola ${name}, Confirma tu cuenta.</p>
        <p>Debes hacer clic en el siguiente enlace:</p>
        <a href="${process.env.URL_FRONT}/confirmar-cuenta/${token}">Comprobar cuenta.</a>
        <p>Si tu no creaste una cuenta, ignora este mensaje.</p>
        `
    });

}

export default emailRegister;