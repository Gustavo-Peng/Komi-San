const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = imagen4
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
*_γπ π·πΎπ»π° ${name} πε½‘_*

${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`)}

γ€γ€ *π³οΈ<βπΈππΈ π½ππΌβππΌ/>π*

- π°πππΈ πΏππ΄π³π΄ πΆππ°ππ³π°π πΌπ΄π½ππ°πΉπ΄π πππ΄ πππΈπ΄ππ°π ππ΄π πΌπ°π ππ°ππ³π΄

*<πΈπΎβπΌπΎπΈβ πΈ ππΈ πππππΈ/>*

Β°γ€_${usedPrefix}agregarmsg *<texto/comando/palabra clave>* (responde a un texto)_
Β°γ€_${usedPrefix}agregarvn *<texto/comando/palabra clave>* (responde a una nota de voz)_
Β°γ€_${usedPrefix}agregarvideo *<texto/comando/palabra clave>* (responde a un video)_
Β°γ€_${usedPrefix}agregaraudio *<texto/comando/palabra clave>* (responde a un audio)_
Β°γ€_${usedPrefix}agregarimg *<texto/comando/palabra clave>* (responde a una imagen)_
Β°γ€_${usedPrefix}agregarsticker *<texto/comando/palabra clave>* (responde a un sticker)_

*<πππππΈ π»πΌ βπππΈβπ»ππ/>*

Β°γ€_${usedPrefix}listamsg_
Β°γ€_${usedPrefix}listavn_
Β°γ€_${usedPrefix}listavideo_
Β°γ€_${usedPrefix}listaaudio_
Β°γ€_${usedPrefix}listaimg_
Β°γ€_${usedPrefix}listasticker_

*<ππΌβ ππΌππππ π πΈβββππππ/>*

Β°γ€_${usedPrefix}vermsg *<texto/comando/palabra clave>*_
Β°γ€_${usedPrefix}vervn *<texto/comando/palabra clave>*_
Β°γ€_${usedPrefix}vervideo *<texto/comando/palabra clave>*_
Β°γ€_${usedPrefix}veraudio *<texto/comando/palabra clave>*_
Β°γ€_${usedPrefix}verimg *<texto/comando/palabra clave>*_
Β°γ€_${usedPrefix}versticker *<texto/comando/palabra clave>*_

*<πΌππππβπΈβ/>*

Β°γ€_${usedPrefix}eliminarmsg *<texto/comando/palabra clave>*_
Β°γ€_${usedPrefix}eliminarvn *<texto/comando/palabra clave>*_
Β°γ€_${usedPrefix}eliminarvideo *<texto/comando/palabra clave>*_
Β°γ€_${usedPrefix}eliminaraudio *<texto/comando/palabra clave>*_
Β°γ€_${usedPrefix}eliminarimg *<texto/comando/palabra clave>*_
Β°γ€_${usedPrefix}eliminarsticker *<texto/comando/palabra clave>*_`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/Gustavo-Peng/Komi-San', 'πΆπΈππ·ππ±', null, null, [
['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']
], m)
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(cajafuerte)$/i
handler.rowner = true
handler.fail = null
export default handler
