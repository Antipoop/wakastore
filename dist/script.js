
function openMenu() {
  document.getElementById('menu').className = 'menu2';
  // document.getElementById('mover').className = 'moverActiveLeft'
  document.getElementById('logoWhite').className = 'logoWhiteActiveLeft'
  document.getElementById('logoBrown').className = 'logoBrownActiveLeft'
  document.getElementById('btn2').className = 'button2Active'
  document.getElementById('ee').className = 'ee2' 
}
function closeMenu() {
  // document.getElementById('mover').className = 'moverNotActive'
  document.getElementById('btn2').className = 'button2'
  document.getElementById('menu').className = 'moveMenuLeft'
  document.getElementById('logoWhite').className = 'logoWhiteActiveRight'
  document.getElementById('logoBrown').className = 'logoBrownActiveRight'
  document.getElementById('ee').className = 'ee' 
}
function openBuy() {
  document.getElementById('tg').className = 'containerActive'
}
function closeBuy() {
  event.preventDefault();
  document.getElementById('tg').className = 'containerNotActive'
}


function buy() {
  const token = "7140639067:AAFztrUwiz-EJL_0CqxSOt4xL52eELUg-sw";
                const chatId = "-4117816437";
                const urlApi = `https://api.telegram.org/bot${ token }/sendMessage`;

                document.getElementById('tg').addEventListener('submit', function(e) {
                    e.preventDefault();
                    if (this.tg.value === '') {
                      return
                    }
                    let mail = this.tg.value;
            
                    if (mail[0] !== '8') {
                      if (mail[0] !== '+') {
                        if (mail[0] !== '@') {
                          mail = `@${mail}`
                        }
                      }
                    }
                    let message = `<b>Заказ</b>\n`;
                    message += `<b>Телега: </b> ${ mail }\n`;
                    this.tg.value = ''
                    message += `<b>Позиции: </b>`
                    if (document.getElementById('checkboxOne').checked === true) {
                      message += `${ this.vks1.value }\n`;
                    }
                    if (document.getElementById('checkboxTwo').checked === true) {
                      message += `${ this.vks2.value }\n`;
                    }
                    if (document.getElementById('checkboxThree').checked === true) {
                      message += `${ this.vks3.value }\n`;
                    }
                    if (document.getElementById('checkboxFour').checked === true) {
                      message += `${ this.vks4.value }\n`;
                    }
                    if (document.getElementById('checkboxFive').checked === true) {
                      message += `${ this.vks5.value }\n`;
                    }
                    if (document.getElementById('checkboxSix').checked === true) {
                      message += `${ this.vks6.value }\n`;
                    }
                    if (document.getElementById('checkboxSeven').checked === true) {
                      message += `${ this.vks7.value }`;
                    }
                    
                    axios.post(urlApi, {
                        chat_id: chatId,
                        parse_mode: 'html',
                        text: message
                    })
                })
}
                