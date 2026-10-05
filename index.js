const express = require('express');
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const qrcode = require('qrcode-terminal');
const P = require('pino');

const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Sony-Uchiwa-Bot est en ligne! Va dans Logs pour scanner le QR');
});

app.listen(PORT, () => console.log(`PORT OPEN on ${PORT}`));

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth');
  const sock = makeWASocket({
    logger: P({ level: 'silent' }),
    auth: state,
    browser: ['Sony-Uchiwa-Bot', 'Chrome', '1.0']
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, qr } = update;
    if(qr){
      console.log('================ QR CODE ================');
      qrcode.generate(qr, {small: true});
      console.log('=========================================');
      console.log('Scanne ce QR avec WhatsApp!');
    }
    if(connection === 'close'){
      const shouldReconnect = lastDisconnect?.error?.output?.statusCode!== DisconnectReason.loggedOut;
      if(shouldReconnect) startBot();
    }
    if(connection === 'open'){
      console.log('✅ Sony-Uchiwa-Bot CONNECTÉ!');
    }
  });

  sock.ev.on('messages.upsert', async ({messages}) => {
    const m = messages[0];
    if(!m.message) return;
    const text = m.message.conversation || m.message.extendedTextMessage?.text || '';
    if(text.toLowerCase() === '.ping'){
      await sock.sendMessage(m.key.remoteJid, {text: 'Pong! Sony-Uchiwa-Bot est en ligne 🔥'});
    }
  });
}

startBot();
console.log('Démarrage Sony-Uchiwa-Bot...');
