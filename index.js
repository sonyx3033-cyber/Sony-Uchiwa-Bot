const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys')
const P = require('pino')

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('auth')
    const sock = makeWASocket({
        logger: P({ level: 'silent' }),
        auth: state,
        printQRInTerminal: true,
        browser: ["Sony-Uchiwa-Bot", "Chrome", "1.0"]
    })

    sock.ev.on('creds.update', saveCreds)

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        if(connection === 'close') {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode!== DisconnectReason.loggedOut
            if(shouldReconnect) startBot()
        } else if(connection === 'open') {
            console.log("✅ Sony-Uchiwa-Bot Connecté!")
        }
    })

    sock.ev.on('messages.upsert', async ({ messages }) => {
        const m = messages[0]
        if(!m.message) return
        const text = m.message.conversation || m.message.extendedTextMessage?.text || m.message.imageMessage?.caption || ""
        const jid = m.key.remoteJid

        if(text.toLowerCase() === "ping") {
            await sock.sendMessage(jid, { text: "Pong! 🏓 *Sony-Uchiwa-Bot* en ligne depuis Lubumbashi! 🇨🇩🔥" })
        }

        if(text.toLowerCase() === "menu" || text.toLowerCase() === ".menu") {
            await sock.sendMessage(jid, { text:
`╭── *SONY-UCHIWA-BOT* ──╮
│ 🔥 Bot de Sony Uchiwa │
│ 📍 Lubumbashi, RDC │
╰──────────────────╯

*COMMANDES:*
➡️ ping - Tester le bot
➡️ menu - Afficher ce menu
➡️ sony - Info créateur

Bot créé par Sony Uchiwa x3033
Powered by Baileys` })
        }

        if(text.toLowerCase() === "sony") {
            await sock.sendMessage(jid, { text: "👑 Créateur: Sony Uchiwa - Lubumbashi, Katanga 🇨🇩\nGitHub: sonyx3033-cyber" })
        }
    })
}

startBot()
console.log("Démarrage Sony-Uchiwa-Bot...")
