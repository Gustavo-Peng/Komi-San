import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `*ââââ° ðððððððððð â±âââ*\n*â*\n*â â§* ${text}\n*â*\n*ââââââââââââââââ*`, 'ðððð ðð ðð ð¾ðððððð¾ð¼ð¿ð ðððð¾ðð¼ð\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['ð¤ ð¾ðð½ð´ð ð¤', '.owner'],['ð ð³ð¾ð½ð°ð ð', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'á´á´á´á´É´Éªá´á´á´á´ á´ÒÉªá´Éªá´Ê á´ á´á´á´á´s Êá´s á´Êá´á´s',
body: 'ÊÊ á´Êá´ á´Êsá´Éªá´ ï¹£ Êá´á´', 
sourceUrl: `https://github.com/Gustavo-Peng/Komi-San`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[âððððâ] ð¼ð´ð½ðð°ð¹ð´ ð´ð½ðð¸ð°ð³ð¾ ð° ðð¾ð³ð¾ð ð»ð¾ð ð²ð·ð°ðð*\n\n*ðððð: ð´ð ð¿ð¾ðð¸ð±ð»ð´ ððð´ ðð´ð½ð¶ð° ðµð°ð»ð»ð¾ð ð´ððð´ ð²ð¾ð¼ð°ð½ð³ð¾ ð ð½ð¾ ðð´ ð´ð½ðð¸ð´ ð° ðð¾ð³ð¾ð ð»ð¾ð ð²ð·ð°ðð, ð³ð¸ðð²ðð»ð¿ð´ ð¿ð¾ð ð´ð» ð¼ð¾ð¼ð´ð½ðð¾*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler
