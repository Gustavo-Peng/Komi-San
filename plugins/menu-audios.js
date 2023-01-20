const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = imagen4
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*ミ💖 𝙷𝙾𝙻𝙰 _${name}_ 💖彡*

${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`)}

*<𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒/>*
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)*

°ㅤ_Quien es tu sempai botsito 7w7_
°ㅤ_Te diagnostico con gay_
°ㅤ_A nadie le importa_
°ㅤ_Fiesta del admin_
°ㅤ_Fiesta del administrador_ 
°ㅤ_Vivan los novios_
°ㅤ_Feliz cumpleaños_
°ㅤ_Noche de paz_
°ㅤ_Buenos dias_
°ㅤ_Buenos tardes_
°ㅤ_Buenos noches_
°ㅤ_Audio hentai_
°ㅤ_Chica lgante_
°ㅤ_Feliz navidad_
°ㅤ_Vete a la vrg_
°ㅤ_Pasa pack Bot_
°ㅤ_Atencion grupo_
°ㅤ_Marica quien_
°ㅤ_Murio el grupo_
°ㅤ_Oh me vengo_
°ㅤ_tio que rico_
°ㅤ_Viernes_
°ㅤ_Baneado_
°ㅤ_Sexo_
°ㅤ_Hola_
°ㅤ_Un pato_
°ㅤ_Nyanpasu_
°ㅤ_Te amo_
°ㅤ_Yamete_
°ㅤ_Bañate_
°ㅤ_Es puto_
°ㅤ_La biblia_
°ㅤ_Onichan_
°ㅤ_Mierda de Bot_
°ㅤ_Siuuu_
°ㅤ_Epico_
°ㅤ_Shitpost_
°ㅤ_Rawr_
°ㅤ_UwU_
°ㅤ_:c_
°ㅤ_a_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/Gustavo-Peng/Komi-San', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio|keyaudio|keyaudios)$/i
handler.fail = null
export default  handler
