const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = imagen4
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
*_ミ💖 𝙷𝙾𝙻𝙰 ${name} 💖彡_*

${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`)}

ㅤㅤ *🗳️<ℂ𝔸𝕁𝔸 𝔽𝕌𝔼ℝ𝕋𝔼/>🔐*

- 𝙰𝚀𝚄𝙸 𝙿𝚄𝙴𝙳𝙴 𝙶𝚄𝙰𝚁𝙳𝙰𝚁 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰𝚂 𝚅𝙴𝚁 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴

*<𝔸𝔾ℝ𝔼𝔾𝔸ℝ 𝔸 𝕃𝔸 𝕃𝕀𝕊𝕋𝔸/>*

°ㅤ_${usedPrefix}agregarmsg *<texto/comando/palabra clave>* (responde a un texto)_
°ㅤ_${usedPrefix}agregarvn *<texto/comando/palabra clave>* (responde a una nota de voz)_
°ㅤ_${usedPrefix}agregarvideo *<texto/comando/palabra clave>* (responde a un video)_
°ㅤ_${usedPrefix}agregaraudio *<texto/comando/palabra clave>* (responde a un audio)_
°ㅤ_${usedPrefix}agregarimg *<texto/comando/palabra clave>* (responde a una imagen)_
°ㅤ_${usedPrefix}agregarsticker *<texto/comando/palabra clave>* (responde a un sticker)_

*<𝕃𝕀𝕊𝕋𝔸 𝔻𝔼 ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊/>*

°ㅤ_${usedPrefix}listamsg_
°ㅤ_${usedPrefix}listavn_
°ㅤ_${usedPrefix}listavideo_
°ㅤ_${usedPrefix}listaaudio_
°ㅤ_${usedPrefix}listaimg_
°ㅤ_${usedPrefix}listasticker_

*<𝕍𝔼ℝ 𝕋𝔼𝕏𝕋𝕆𝕊 𝕆 𝔸ℝℂℍ𝕀𝕍𝕆𝕊/>*

°ㅤ_${usedPrefix}vermsg *<texto/comando/palabra clave>*_
°ㅤ_${usedPrefix}vervn *<texto/comando/palabra clave>*_
°ㅤ_${usedPrefix}vervideo *<texto/comando/palabra clave>*_
°ㅤ_${usedPrefix}veraudio *<texto/comando/palabra clave>*_
°ㅤ_${usedPrefix}verimg *<texto/comando/palabra clave>*_
°ㅤ_${usedPrefix}versticker *<texto/comando/palabra clave>*_

*<𝔼𝕃𝕀𝕄𝕀ℕ𝔸ℝ/>*

°ㅤ_${usedPrefix}eliminarmsg *<texto/comando/palabra clave>*_
°ㅤ_${usedPrefix}eliminarvn *<texto/comando/palabra clave>*_
°ㅤ_${usedPrefix}eliminarvideo *<texto/comando/palabra clave>*_
°ㅤ_${usedPrefix}eliminaraudio *<texto/comando/palabra clave>*_
°ㅤ_${usedPrefix}eliminarimg *<texto/comando/palabra clave>*_
°ㅤ_${usedPrefix}eliminarsticker *<texto/comando/palabra clave>*_`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/Gustavo-Peng/Komi-San', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(cajafuerte)$/i
handler.rowner = true
handler.fail = null
export default handler
