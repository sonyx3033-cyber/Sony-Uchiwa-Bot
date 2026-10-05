const express = require('express');
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const P = require('pino');

const app = express();
const PORT = process.env.PORT || 10000;
const PHONE_NUMBER = "243829802986";

app.get('/', (req, res) => res.send('Sony-Uchiwa-Bot en ligne - regarde les Logs pour le CODE'));
app.listen(PORT, () => console.log(`PORT OPEN on ${PORT}`));

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth');
  const sock = makeWASocket({
    logger: P({ level: 'silent' }),
    auth: state,
    browser: ['Ubuntu','Chrome','20.0'],
    printQRInTerminal: false
  });

  if(!sock.authState.creds.registered){
    setTimeout(async () => {
      try{
        let code = await sock.requestPairingCode(PHONE_NUMBER);
        console.log('======================');
        console.log('TON CODE PAIRING :', code);
        console.log('Va dans WhatsApp > Appareils liés > Lier avec numéro');
        console.log('======================');
      }catch(e){ console.log('Erreur code:', e.message); }
    }, 3000);
  }

  sock.ev.on('creds.update', saveCreds);
  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if(connection === 'open'){
      console.log('✅ SONY-UCHIWA-BOT CONNECTÉ !');
    }
    if(connection === 'close'){
      const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
      if(shouldReconnect) startBot();
    }
  });
}

startBot();
console.log('Démarrage Sony-Uchiwa-Bot Pairing...');
