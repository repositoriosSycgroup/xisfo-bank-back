const { request, response } = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req = request, resp = response) => {
  let body = req.body;

  let config = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure: true,
    auth:{
      user: 'xisfoinfo@gmail.com',
      pass: 'woklfmnioxswtqje'
    }
  });

  const opciones = {
    from: 'Solicitud de registro en xisfo',
    subject: 'Hola! Me he contactado desde la pagina de xisfo, estos son mis datos!',
    to: 'info@sycgroup.co',
    text:body.mensaje
  };

  config.sendMail(opciones, function(error,result){
      if (error) return resp.json({ok:false,msg:error});
        return resp.json({
          ok:true,
          msg:result
        });
      })

}

module.exports = {
  envioCorreo
}