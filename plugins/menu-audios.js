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
*γπ π·πΎπ»π° _${name}_ πε½‘*

${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`)}

*<ππππ ππππππ/>*
*- π΄ππ²ππΈπ±π΄ π»π°π ππΈπΆππΈπ΄π½ππ΄π πΏπ°π»π°π±ππ°π πΎ π΅ππ°ππ΄π ππΈπ½ π½πΈπ½πΆππ½ πΏππ΄π΅πΈπΉπΎ (#, /, *, .)*

Β°γ€_Quien es tu sempai botsito 7w7_
Β°γ€_Te diagnostico con gay_
Β°γ€_A nadie le importa_
Β°γ€_Fiesta del admin_
Β°γ€_Fiesta del administrador_ 
Β°γ€_Vivan los novios_
Β°γ€_Feliz cumpleaΓ±os_
Β°γ€_Noche de paz_
Β°γ€_Buenos dias_
Β°γ€_Buenos tardes_
Β°γ€_Buenos noches_
Β°γ€_Audio hentai_
Β°γ€_Chica lgante_
Β°γ€_Feliz navidad_
Β°γ€_Vete a la vrg_
Β°γ€_Pasa pack Bot_
Β°γ€_Atencion grupo_
Β°γ€_Marica quien_
Β°γ€_Murio el grupo_
Β°γ€_Oh me vengo_
Β°γ€_tio que rico_
Β°γ€_Viernes_
Β°γ€_Baneado_
Β°γ€_Sexo_
Β°γ€_Hola_
Β°γ€_Un pato_
Β°γ€_Nyanpasu_
Β°γ€_Te amo_
Β°γ€_Yamete_
Β°γ€_BaΓ±ate_
Β°γ€_Es puto_
Β°γ€_La biblia_
Β°γ€_Onichan_
Β°γ€_Mierda de Bot_
Β°γ€_Siuuu_
Β°γ€_Epico_
Β°γ€_Shitpost_
Β°γ€_Rawr_
Β°γ€_UwU_
Β°γ€_:c_
Β°γ€_a_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/Gustavo-Peng/Komi-San', 'πΆπΈππ·ππ±', null, null, [
['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menΓΊ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio|keyaudio|keyaudios)$/i
handler.fail = null
export default  handler
