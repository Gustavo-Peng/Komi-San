/*---------------------------------------------------------------------------------------
  ๐ โข By https://github.com/ALBERTO9883
  ๐ โข โAlberto Y Ashlyโ
-----------------------------------------------------------------------------------------*/

import { randomBytes } from 'crypto'
let link = /chat.whatsapp.com/
let handler = async (m, { conn, text, groupMetadata }) => {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
if (!text) throw '*_โ  โข ๏ธIngrese un -texto- para enviar un mensaje a todos los grupos._*'
const linkThisGroup = `${link}`
if (m.text.includes(linkThisGroup)) return conn.reply(m.chat, 'โ *_No puedes espamear enlaces a otros grupos._*', m)
let time = global.db.data.users[m.sender].msgwait + 300000
if (new Date - db.data.users[m.sender].msgwait < 300000) throw `*_โ ๏ธ โข Tienes que esperar ${msToTime(time - new Date())} para volver a enviar un mensaje._*`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(m.sender)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": '๐ฑโธฝโNสแดษดCแดแดBแดแด - MD๐โจแโโฐ', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': 'โ๐ฐโโโโโ๐ดโโโโโ๐ฒโโโโโ๐ฎโโโโโ-๐ธโโโโโ๐ฆโโโโโ๐ณโโโโโโ', 'jpegThumbnail': false }}}
let teks = `*๐บ โข ๐ถ๐๐๐๐:* ${groupMetadata.subject}\n*๐ โข ๐ณ๐:* ${name}\n*๐ โข ๐ฝ๐ฬ๐๐๐๐:* wa.me/${who.split`@`[0]}\n*๐ง โข ๐ผ๐๐๐๐๐๐:* ${text}`
for (let id of groups) {
await conn.sendMessage(id, { text: teks }, { quoted: fakegif })
global.db.data.users[m.sender].msgwait = new Date * 1
}}
handler.command = /^(msg)$/i
handler.owner = true
handler.group = true
export default handler
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return minutes + " m " + seconds + " s " }
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
