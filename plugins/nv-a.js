let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/a.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `a.mp3` }, { quoted: m })}
handler.customPrefix = /ยช|a|A/
handler.command = /^(a|ยช|A?$)/
export default handler

/*
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/a.mp3'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `๐ ๐๐ก๐ ๐๐ฒ๐ฌ๐ญ๐ข๐ - ๐๐จ๐ญ ๐`, "body": `=> แดแดแดษชแด แดแดแดแดแดแดแดษชแดแด`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `https://github.com/Gustavo-Peng/Komi-San`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /ยช|a|A/
handler.command = /^(a|ยช|A?$)/
export default handler
*/
