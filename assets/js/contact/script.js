//Email JS
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>
{
  e.preventDefault();

  contactMessage.textContent = 'Aguarde um momento... ✋'

  //serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_q4c1pfg', 'template_pzwtwi5', '#contact-form', 'gIBS83Hp2QLP_bn3E')
    .then(() =>
    {
      //Show sent message
      contactMessage.textContent = 'Mensagem enviada com sucesso ✔️'

      //Remove message after five seconds
      setTimeout(() =>
      {
        contactMessage.textContent = ''
      }, 5000)

      //Clear input fields
      contactForm.reset()
    }, () =>
    {
      //Show error message
      contactMessage.textContent = 'Erro ao enviar mensagem (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)