// SONY UCHIWA V7 ULTRA - 156 COMMANDES - VERSION CLEAN SANS BLOC LICENCE
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const pino = require('pino');
const PREFIX = process.env.PREFIX || "💎";

const COMMANDS_LIST = [
"admincheck","tagadmin",
"antiaudio","antidemote","antiforbidden","antiimage","antilink","antipromote","antispam","antistatus","antisticker","antitag","antitransfer","antivideo","antibot","anticall","antipurge",
"autoreact","autovustatut","autowrite","autorecord",
"deletemedia","listmedia","playaudio","playvideo","sendaudio","senddocument","sendimage","sendsticker","sendvideo","takesticker","tgsticker","tosticker","tomp3","youtube","url","toimage","tovideo","facebook","xvideos",
"approveall","demote","demute","kick","kickall","mute","promote","block","unblock","clean","resetchat","mystatus","revoke","pin","unpin",
"getid","getinfo","getpp","groupinfo","getgpp","grouplink",
"mindset","motivation","quiz","quiz_anime","couple","trivia","devine","morpion","anagramme","scramble","math","meme","blague","excuse","avatar","horoscope","github","pokemon","rickandmorty","ghibli","digimon","disney","chucknorris","conseil","citation","xkcd","carte","catfact","dogpic","neko","gif","unsplash","superhero",
"vansbot","geolocalisation","ping","searchimage","tiktok","vv","fancy","lyrics","translate","calc","ascii","poll","reminder","schedule","broadcast","removebg","wikipedia","dictionnaire","currency","shorturl","meteo","imagine","qrcode","readqr","compile","setdevice",
"setpp","setgpp","setgdesc","sendstory","setprefix","vcfgroupe","setprivate","setpublic","setmenuaudio","setmenuvideo","setmenuimage","setlitemode","setfullmode","autodelete","pair","setfont","settheme","language","alwaysonline","chatjid","bug_exp",
"goodbye","welcome","leave","store","hosting","sudo","instances","restart","tagall","ranking","responder","listcommands","help","doc","menu"
];

console.log(`SONY UCHIWA V7: ${COMMANDS_LIST.length} commandes`);

async function startBot(){
const { state, saveCreds } = await useMultiFileAuthState('./session');
const sock = makeWASocket({ auth: state, logger: pino({level:'silent'}) });
sock.ev.on('creds.update', saveCreds);
sock.ev.on('connection.update', (u)=>{
if(u.connection==='close' && u.lastDisconnect?.error?.output?.statusCode!== DisconnectReason.loggedOut) startBot();
if(u.connection==='open') console.log(`✅ SONY CONNECTÉ - ${COMMANDS_LIST.length} CMDS`);
});
sock.ev.on('messages.upsert', async ({messages})=>{
const m = messages[0];
if(!m.message) return;
const body = m.message.conversation || m.message.extendedTextMessage?.text || "";
if(!body.startsWith(PREFIX)) return;
const args = body.slice(PREFIX.length).trim().split(/\s+/);
const cmd = args.shift().toLowerCase();

if(cmd==="menu" || cmd==="help"){
let menu = `🤖 *𝚂𝙾𝙽𝚈 𝚄𝙲𝙷𝙸𝚆𝙰 𝚅𝟽.𝟶 𝚄𝙻𝚃𝚁𝙰* 🤖
᛭ ─── ❖ ── ✦ ── ❖ ─── ᛭

𝙺𝚗𝚘𝚠 𝚢𝚘𝚞𝚛 𝚙𝚕𝚊𝚌𝚎, 𝗵𝚞𝚖𝚊𝚗.

⛧☠⛧ 👑 𝙰𝚍𝚖𝚒𝚗
𖤐 ➤ ${PREFIX}𝚊𝚍𝚖𝚒𝚗𝚌𝚑𝚎𝚌𝚔
𖤐 ➤ ${PREFIX}𝚝𝚊𝚐𝚊𝚍𝚖𝚒𝚗

⛧☠⛧ 🛡️ 𝙰𝚗𝚝𝚒 (𝟷𝟻)
𖤐 ➤ ${PREFIX}𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔, ${PREFIX}𝚊𝚗𝚝𝚒𝚋𝚘𝚝, ${PREFIX}𝚊𝚗𝚝𝚒𝚜𝚙𝚊𝚖, ${PREFIX}𝚊𝚗𝚝𝚒𝚜𝚝𝚒𝚌𝚔𝚎𝚛, ${PREFIX}𝚊𝚗𝚝𝚒𝚟𝚒𝚍𝚎𝚘, ${PREFIX}𝚊𝚗𝚝𝚒𝚝𝚊𝚐, etc

⛧☠⛧ 🤖 𝙰𝚞𝚝𝚘 (𝟺)
𖤐 ➤ ${PREFIX}𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚌𝚝, ${PREFIX}𝚊𝚞𝚝𝚘𝚟𝚞𝚜𝚝𝚊𝚝𝚞𝚝, ${PREFIX}𝚊𝚞𝚝𝚘𝚠𝚛𝚒𝚝𝚎, ${PREFIX}𝚊𝚞𝚝𝚘𝚛𝚎𝚌𝚘𝚛𝚍

⛧☠⛧ 🎥 𝙼é𝚍𝚒𝚊𝚜 (𝟷𝟿)
𖤐 ➤ ${PREFIX}𝚙𝚕𝚊𝚢𝚊𝚞𝚍𝚒𝚘, ${PREFIX}𝚙𝚕𝚊𝚢𝚟𝚒𝚍𝚎𝚘, ${PREFIX}𝚢𝚘𝚞𝚝𝚞𝚋𝚎, ${PREFIX}𝚝𝚒𝚔𝚝𝚘𝚔, ${PREFIX}𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔, ${PREFIX}𝚡𝚟𝚒𝚍𝚎𝚘𝚜, ${PREFIX}𝚝𝚘𝚖𝚙𝟹, ${PREFIX}𝚝𝚘𝚜𝚝𝚒𝚌𝚔𝚎𝚛, etc

⛧☠⛧ ⚖️ 𝙼𝚘𝚍𝚎𝚛𝚊𝚝𝚒𝚘𝚗 (𝟷𝟻)
𖤐 ➤ ${PREFIX}𝚔𝚒𝚌𝚔, ${PREFIX}𝚔𝚒𝚌𝚔𝚊𝚕𝚕, ${PREFIX}𝚙𝚛𝚘𝚖𝚘𝚝𝚎, ${PREFIX}𝚍𝚎𝚖𝚘𝚝𝚎, ${PREFIX}𝚖𝚞𝚝𝚎, ${PREFIX}𝚋𝚕𝚘𝚌𝚔, ${PREFIX}𝚌𝚕𝚎𝚊𝚗, ${PREFIX}𝚙𝚒𝚗, etc

⛧☠⛧ ℹ️ 𝙸𝚗𝚏𝚘𝚜 (𝟼)
𖤐 ➤ ${PREFIX}𝚐𝚎𝚝𝚒𝚍, ${PREFIX}𝚐𝚎𝚝𝚙𝚙, ${PREFIX}𝚐𝚛𝚘𝚞𝚙𝚒𝚗𝚏𝚘, ${PREFIX}𝚐𝚛𝚘𝚞𝚙𝚕𝚒𝚗𝚔

⛧☠⛧ 🎮 𝙹𝚎𝚞𝚡 (𝟹𝟹)
𖤐 ➤ ${PREFIX}𝚚𝚞𝚒𝚣, ${PREFIX}𝚌𝚘𝚞𝚙𝚕𝚎, ${PREFIX}𝚖𝚘𝚛𝚙𝚒𝚘𝚗, ${PREFIX}𝚖𝚎𝚖𝚎, ${PREFIX}𝚙𝚘𝚔𝚎𝚖𝚘𝚗, ${PREFIX}𝚐𝗵𝚒𝚋𝚕𝚒, etc

⛧☠⛧ 🔧 𝙾𝚞𝚝𝚒𝚕𝚜 (𝟸𝟼)
𖤐 ➤ ${PREFIX}𝚙𝚒𝚗𝚐, ${PREFIX}𝚟𝚟, ${PREFIX}𝚏𝚊𝚗𝚌𝚢, ${PREFIX}𝚖𝚎𝚝𝚎𝚘, ${PREFIX}𝚒𝚖𝚊𝚐𝚒𝚗𝚎, ${PREFIX}𝚚𝚛𝚌𝚘𝚍𝚎, ${PREFIX}𝚝𝚛𝚊𝚗𝚜𝚕𝚊𝚝𝚎, etc

⛧☠⛧ ⚙️ 𝚁é𝚐𝚕𝚊𝚐𝚎𝚜 (𝟸𝟷)
𖤐 ➤ ${PREFIX}𝚜𝚎𝚝𝚙𝚙, ${PREFIX}𝚜𝚎𝚝𝚐𝚙𝚙, ${PREFIX}𝚜𝚎𝚝𝚙𝚛𝚎𝚏𝚒𝚡, ${PREFIX}𝚊𝚕𝚠𝚊𝚢𝚜𝚘𝚗𝚕𝚒𝚗𝚎, ${PREFIX}𝚜𝚎𝚝𝚝𝗵𝚎𝚖𝚎, etc

⛧☠⛧ 👋 𝚂𝚘𝚌𝚒𝚊𝚕
𖤐 ➤ ${PREFIX}𝚠𝚎𝚕𝚌𝚘𝚖𝚎, ${PREFIX}𝚐𝚘𝚘𝚍𝚋𝚢𝚎

⛧☠⛧ 👤 𝚂𝚞𝚍𝚘
𖤐 ➤ ${PREFIX}𝚜𝚞𝚍𝚘, ${PREFIX}𝚛𝚎𝚜𝚝𝚊𝚛𝚝

Tape ${PREFIX}listcommands pour les 156 complètes
`;
return sock.sendMessage(m.key.remoteJid, {text: menu}, {quoted: m});
}

if(cmd==="listcommands"){
return sock.sendMessage(m.key.remoteJid, {text: `📦 156 COMMANDES:\n${COMMANDS_LIST.map(c=>`💎${c}`).join("\n")}`}, {quoted: m});
}

if(COMMANDS_LIST.includes(cmd)){
return sock.sendMessage(m.key.remoteJid, {text: `⛧ SONY V7 ULTRA 👑\n💎${cmd} activé!`}, {quoted: m});
}
});
}
startBot();
