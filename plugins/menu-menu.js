import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *𝐆𝐮𝐬𝐭𝐚𝐯𝐨 𝐏𝐞𝐧𝐠* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Owner:* Gustavo Peng
║➤ *Numero:* wa.me/573017901707
║➤ *Bot ofc:* wa.me/573246727415
║➤ *PayPal:* https://www.paypal.me/GGutierrezContreras
║➤ *Fecha:* ${date}
║➤ *Tiempo activo:* ${uptime}
║➤ *Usuarios:* ${rtotalreg}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *Nivel:* ${level}
┣ *Experiencia:* ${exp}
┣ *Rango:* ${role}
┣ *Diamantes:* ${limit}
┣ *MysticCoins:* ${money}
┣ *Tokens:* ${joincount}
┣ *Premium:* ${user.premiumTime > 0 ? '✅' : '❌'}
┗━━━━━━━━━━━━━━━━┛
${readMore}
┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕆𝕋 𝕆𝔽ℂ 𝕆 𝕊𝕌𝔹 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}terminosycondiciones_
┣ㅤ_${usedPrefix}grupos_
┣ㅤ_${usedPrefix}estado_
┣ㅤ_${usedPrefix}infobot_
┣ㅤ_${usedPrefix}speedtest_
┣ㅤ_${usedPrefix}donar_
┣ㅤ_${usedPrefix}grouplist_
┣ㅤ_${usedPrefix}owner_
┣ㅤ_${usedPrefix}script_
┣ㅤ_Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ _${usedPrefix}join *<enlace / link / url>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝔼ℝ𝔹𝕆𝕋 - 𝕁𝔸𝔻𝕀𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ _${usedPrefix}serbot_
┣ _${usedPrefix}stop_
┣ _${usedPrefix}bots_
┗━━━━━━━━━━━━━━━━┛  

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕁𝕌𝔼𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣ㅤ_${usedPrefix}ppt *<papel / tijera /piedra>*_
┣ㅤ_${usedPrefix}prostituto *<nombre / @tag>*_
┣ㅤ_${usedPrefix}prostituta *<nombre / @tag>*_
┣ㅤ_${usedPrefix}gay2 *<nombre / @tag>*_
┣ㅤ_${usedPrefix}lesbiana *<nombre / @tag>*_
┣ㅤ_${usedPrefix}pajero *<nombre / @tag>*_
┣ㅤ_${usedPrefix}pajera *<nombre / @tag>*_
┣ㅤ_${usedPrefix}puto *<nombre / @tag>*_
┣ㅤ_${usedPrefix}puta *<nombre / @tag>*_
┣ㅤ_${usedPrefix}manco *<nombre / @tag>*_
┣ㅤ_${usedPrefix}manca *<nombre / @tag>*_
┣ㅤ_${usedPrefix}rata *<nombre / @tag>*_
┣ㅤ_${usedPrefix}love *<nombre / @tag>*_
┣ㅤ_${usedPrefix}doxear *<nombre / @tag>*_
┣ㅤ_${usedPrefix}pregunta *<texto>*_
┣ㅤ_${usedPrefix}suitpvp *<@tag>*_
┣ㅤ_${usedPrefix}slot *<apuesta>*_
┣ㅤ_${usedPrefix}ttt *<nombre sala>*_
┣ㅤ_${usedPrefix}delttt_
┣ㅤ_${usedPrefix}acertijo_
┣ㅤ_${usedPrefix}simi *<texto>*_
┣ㅤ_${usedPrefix}top *<texto>*_
┣ㅤ_${usedPrefix}topgays_
┣ㅤ_${usedPrefix}topotakus_
┣ㅤ_${usedPrefix}formarpareja_
┣ㅤ_${usedPrefix}verdad_
┣ㅤ_${usedPrefix}reto_
┣ㅤ_${usedPrefix}cancion_
┣ㅤ_${usedPrefix}pista_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}enable *welcome*_
┣ㅤ_${usedPrefix}disable *welcome*_
┣ㅤ_${usedPrefix}enable *modohorny*_
┣ㅤ_${usedPrefix}disable *modohorny*_
┣ㅤ_${usedPrefix}enable *antilink*_
┣ㅤ_${usedPrefix}disable *antilink*_
┣ㅤ_${usedPrefix}enable *antilink2*_
┣ㅤ_${usedPrefix}disable *antilink2*_
┣ㅤ_${usedPrefix}enable *detect*_
┣ㅤ_${usedPrefix}disable *detect*_
┣ㅤ_${usedPrefix}enable *audios*_
┣ㅤ_${usedPrefix}disable *audios*_
┣ㅤ_${usedPrefix}enable *autosticker*_
┣ㅤ_${usedPrefix}disable *autosticker*_
┣ㅤ_${usedPrefix}enable *antiviewonce*_
┣ㅤ_${usedPrefix}disable *antiviewonce*_
┣ㅤ_${usedPrefix}enable *antitoxic*_
┣ㅤ_${usedPrefix}disable *antitoxic*_
┣ㅤ_${usedPrefix}enable *antitraba*_
┣ㅤ_${usedPrefix}disable *antitraba*_
┣ㅤ_${usedPrefix}enable *antiarabes*_
┣ㅤ_${usedPrefix}disable *antiarabes*_
┣ㅤ_${usedPrefix}enable *modoadmin*_
┣ㅤ_${usedPrefix}disable *modoadmin*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┣ *< ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ _${usedPrefix}reporte *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}instagram *<enlace / link / url>*_
┣ㅤ_${usedPrefix}instagram2 *<enlace / link / url>*_
┣ㅤ_${usedPrefix}instagram3 *<enlace / link / url>*_
┣ㅤ_${usedPrefix}mediafire *<enlace / link / url>*_
┣ㅤ_${usedPrefix}instagram *<enlace / link / url>*_
┣ㅤ_${usedPrefix}gitclone *<enlace / link / url>*_
┣ㅤ_${usedPrefix}gdrive *<enlace / link / url>*_
┣ㅤ_${usedPrefix}tiktok *<enlace / link / url>*_
┣ㅤ_${usedPrefix}xnxxdl *<enlace / link / url>*_
┣ㅤ_${usedPrefix}xvideosdl *<enlace / link / url>*_
┣ㅤ_${usedPrefix}twitter *<enlace / link / url>*_
┣ㅤ_${usedPrefix}fb *<enlace / link / url>*_
┣ㅤ_${usedPrefix}fb2 *<enlace / link / url>*_
┣ㅤ_${usedPrefix}fb3 *<enlace / link / url>*_
┣ㅤ_${usedPrefix}fb4 *<enlace / link / url>*_
┣ㅤ_${usedPrefix}fb5 *<enlace / link / url>*_
┣ㅤ_${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ㅤ_${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ㅤ_${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ㅤ_${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣ㅤ_${usedPrefix}dapk2 *<enlace / link / url>*_
┣ㅤ_${usedPrefix}stickerpack *<enlace / link / url>*_
┣ㅤ_${usedPrefix}play *<texto>*_
┣ㅤ_${usedPrefix}play.1 *<texto>*_
┣ㅤ_${usedPrefix}play.2 *<texto>*_
┣ㅤ_${usedPrefix}playdoc *<texto>*_
┣ㅤ_${usedPrefix}playlist *<texto>*_
┣ㅤ_${usedPrefix}playlist2 *<texto>*_
┣ㅤ_${usedPrefix}spotify *<texto>*_
┣ㅤ_${usedPrefix}stickerly *<texto>*_
┣ㅤ_${usedPrefix}ringtone *<texto>*_
┣ㅤ_${usedPrefix}soundcloud *<texto>*_
┣ㅤ_${usedPrefix}imagen *<texto>*_
┣ㅤ_${usedPrefix}pinterest *<texto>*_
┣ㅤ_${usedPrefix}wallpaper *<texto>*_
┣ㅤ_${usedPrefix}wallpaper2 *<texto>*_
┣ㅤ_${usedPrefix}pptiktok *<nombre de usuario>*_
┣ㅤ_${usedPrefix}igstalk *<nombre de usuario>*_
┣ㅤ_${usedPrefix}igstory *<nombre de usuario>*_
┣ㅤ_${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔾ℝ𝕌ℙ𝕆𝕊 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}add *<numero>*_
┣ㅤ_${usedPrefix}kick *<@tag>*_
┣ㅤ_${usedPrefix}kick2 *<@tag>*_
┣ㅤ_${usedPrefix}listanum *<texto>*_
┣ㅤ_${usedPrefix}kicknum *<texto>*_
┣ㅤ_${usedPrefix}grupo *<abrir / cerrar>*_
┣ㅤ_${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ㅤ_${usedPrefix}promote *<@tag>*_
┣ㅤ_${usedPrefix}demote *<@tag>*_
┣ㅤ_admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ㅤ_${usedPrefix}demote *<@tag>*_
┣ㅤ_${usedPrefix}infogroup_
┣ㅤ_${usedPrefix}resetlink_
┣ㅤ_${usedPrefix}link_
┣ㅤ_${usedPrefix}setname *<texto>*_
┣ㅤ_${usedPrefix}setdesc *<texto>*_
┣ㅤ_${usedPrefix}invocar *<texto>*_
┣ㅤ_${usedPrefix}setwelcome *<texto>*_
┣ㅤ_${usedPrefix}setbye *<texto>*_
┣ㅤ_${usedPrefix}hidetag *<texto>*_
┣ㅤ_${usedPrefix}hidetag *<audio>*_
┣ㅤ_${usedPrefix}hidetag *<video>*_
┣ㅤ_${usedPrefix}hidetag *<imagen>*_
┣ㅤ_${usedPrefix}warn *<@tag>*_
┣ㅤ_${usedPrefix}unwarn *<@tag>*_
┣ㅤ_${usedPrefix}listwarn_
┣ㅤ_${usedPrefix}fantasmas_
┣ㅤ_${usedPrefix}destraba_
┣ㅤ_${usedPrefix}setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}togifaud *<video>*_
┣ㅤ_${usedPrefix}toimg *<sticker>*_
┣ㅤ_${usedPrefix}tomp3 *<video>*_
┣ㅤ_${usedPrefix}tomp3 *<nota de voz>*_
┣ㅤ_${usedPrefix}toptt *<video / audio>*_
┣ㅤ_${usedPrefix}tovideo *<sticker>*_
┣ㅤ_${usedPrefix}tourl *<video / imagen / audio>*_
┣ㅤ_${usedPrefix}tts es *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}phmaker *<opcion> <imagen>*_
┣ㅤ_${usedPrefix}logos *<efecto> <texto>*_
┣ㅤ_${usedPrefix}logochristmas *<texto>*_
┣ㅤ_${usedPrefix}logocorazon *<texto>*_
┣ㅤ_${usedPrefix}ytcomment *<texto>*_
┣ㅤ_${usedPrefix}hornycard *<@tag>*_
┣ㅤ_${usedPrefix}simpcard *<@tag>*_
┣ㅤ_${usedPrefix}lolice *<@tag>*_
┣ㅤ_${usedPrefix}itssostupid_
┣ㅤ_${usedPrefix}pixelar_
┣ㅤ_${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}piropo_
┣ㅤ_${usedPrefix}consejo_
┣ㅤ_${usedPrefix}fraseromantica_
┣ㅤ_${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}kpop *<blackpink / exo / bts>*_
┣ㅤ_${usedPrefix}cristianoronaldo_
┣ㅤ_${usedPrefix}messi_
┣ㅤ_${usedPrefix}meme_
┣ㅤ_${usedPrefix}itzy_
┣ㅤ_${usedPrefix}blackpink_
┣ㅤ_${usedPrefix}lolivid_
┣ㅤ_${usedPrefix}loli_
┣ㅤ_${usedPrefix}navidad_
┣ㅤ_${usedPrefix}ppcouple_
┣ㅤ_${usedPrefix}wpmontaña_
┣ㅤ_${usedPrefix}pubg_
┣ㅤ_${usedPrefix}wpgaming_
┣ㅤ_${usedPrefix}wpaesthetic_
┣ㅤ_${usedPrefix}wpaesthetic2_
┣ㅤ_${usedPrefix}wprandom_
┣ㅤ_${usedPrefix}wallhp_
┣ㅤ_${usedPrefix}wpvehiculo_
┣ㅤ_${usedPrefix}wpmoto_
┣ㅤ_${usedPrefix}coffee_
┣ㅤ_${usedPrefix}pentol_
┣ㅤ_${usedPrefix}caricatura_
┣ㅤ_${usedPrefix}ciberespacio_
┣ㅤ_${usedPrefix}technology_
┣ㅤ_${usedPrefix}doraemon_
┣ㅤ_${usedPrefix}hacker_
┣ㅤ_${usedPrefix}planeta_
┣ㅤ_${usedPrefix}randomprofile_
┣ㅤ_${usedPrefix}neko_
┣ㅤ_${usedPrefix}waifu_
┣ㅤ_${usedPrefix}akira_
┣ㅤ_${usedPrefix}akiyama_
┣ㅤ_${usedPrefix}anna_
┣ㅤ_${usedPrefix}asuna_
┣ㅤ_${usedPrefix}ayuzawa_
┣ㅤ_${usedPrefix}boruto_
┣ㅤ_${usedPrefix}chiho_
┣ㅤ_${usedPrefix}chitoge_
┣ㅤ_${usedPrefix}deidara_
┣ㅤ_${usedPrefix}erza_
┣ㅤ_${usedPrefix}elaina_
┣ㅤ_${usedPrefix}eba_
┣ㅤ_${usedPrefix}emilia_
┣ㅤ_${usedPrefix}hestia_
┣ㅤ_${usedPrefix}hinata_
┣ㅤ_${usedPrefix}inori_
┣ㅤ_${usedPrefix}isuzu_
┣ㅤ_${usedPrefix}itachi_
┣ㅤ_${usedPrefix}itori_
┣ㅤ_${usedPrefix}kaga_
┣ㅤ_${usedPrefix}kagura_
┣ㅤ_${usedPrefix}kaori_
┣ㅤ_${usedPrefix}keneki_
┣ㅤ_${usedPrefix}kotori_
┣ㅤ_${usedPrefix}kurumi_
┣ㅤ_${usedPrefix}madara_
┣ㅤ_${usedPrefix}mikasa_
┣ㅤ_${usedPrefix}miku_
┣ㅤ_${usedPrefix}minato_
┣ㅤ_${usedPrefix}naruto_
┣ㅤ_${usedPrefix}nezuko_
┣ㅤ_${usedPrefix}sagiri_
┣ㅤ_${usedPrefix}sasuke_
┣ㅤ_${usedPrefix}sakura_
┣ㅤ_${usedPrefix}cosplay_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}pack_
┣ㅤ_${usedPrefix}pack2_
┣ㅤ_${usedPrefix}pack3_
┣ㅤ_${usedPrefix}videoxxx_
┣ㅤ_${usedPrefix}videolesbixxx_
┣ㅤ_${usedPrefix}tetas_
┣ㅤ_${usedPrefix}booty_
┣ㅤ_${usedPrefix}ecchi_
┣ㅤ_${usedPrefix}furro_
┣ㅤ_${usedPrefix}imagenlesbians_
┣ㅤ_${usedPrefix}panties_
┣ㅤ_${usedPrefix}pene_
┣ㅤ_${usedPrefix}porno_
┣ㅤ_${usedPrefix}randomxxx_
┣ㅤ_${usedPrefix}pechos_
┣ㅤ_${usedPrefix}yaoi_
┣ㅤ_${usedPrefix}yaoi2_
┣ㅤ_${usedPrefix}yuri_
┣ㅤ_${usedPrefix}yuri2_
┣ㅤ_${usedPrefix}trapito_
┣ㅤ_${usedPrefix}hentai_
┣ㅤ_${usedPrefix}nsfwloli_
┣ㅤ_${usedPrefix}nsfworgy_
┣ㅤ_${usedPrefix}nsfwfoot_
┣ㅤ_${usedPrefix}nsfwass_
┣ㅤ_${usedPrefix}nsfwbdsm_
┣ㅤ_${usedPrefix}nsfwcum_
┣ㅤ_${usedPrefix}nsfwero_
┣ㅤ_${usedPrefix}nsfwfemdom_
┣ㅤ_${usedPrefix}nsfwglass_
┣ㅤ_${usedPrefix}hentaipdf *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ㅤ_${usedPrefix}bass_
┣ㅤ_${usedPrefix}blown_
┣ㅤ_${usedPrefix}deep_
┣ㅤ_${usedPrefix}earrape_
┣ㅤ_${usedPrefix}fast_
┣ㅤ_${usedPrefix}fat_
┣ㅤ_${usedPrefix}nightcore_
┣ㅤ_${usedPrefix}reverse_
┣ㅤ_${usedPrefix}robot_
┣ㅤ_${usedPrefix}slow_
┣ㅤ_${usedPrefix}smooth_
┣ㅤ_${usedPrefix}tupai_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ _${usedPrefix}start_
┣ _${usedPrefix}next_
┣ _${usedPrefix}leave_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}modapk *<texto>*_
┣ㅤ_${usedPrefix}stickersearch *<texto>*_
┣ㅤ_${usedPrefix}stickersearch2 *<texto>*_
┣ㅤ_${usedPrefix}xnxxsearch *<texto>*_
┣ㅤ_${usedPrefix}animeinfo *<texto>*_
┣ㅤ_${usedPrefix}google *<texto>*_
┣ㅤ_${usedPrefix}letra *<texto>*_
┣ㅤ_${usedPrefix}wikipedia *<texto>*_
┣ㅤ_${usedPrefix}ytsearch *<texto>*_
┣ㅤ_${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃ *- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
┃ _- (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_Quien es tu sempai botsito 7w7_
┣ㅤ_Te diagnostico con gay_
┣ㅤ_A nadie le importa_
┣ㅤ_Fiesta del admin_
┣ㅤ_Fiesta del administrador_ 
┣ㅤ_Vivan los novios_
┣ㅤ_Feliz cumpleaños_
┣ㅤ_Noche de paz_
┣ㅤ_Buenos dias_
┣ㅤ_Buenos tardes_
┣ㅤ_Buenos noches_
┣ㅤ_Audio hentai_
┣ㅤ_Chica lgante_
┣ㅤ_Feliz navidad_
┣ㅤ_Vete a la vrg_
┣ㅤ_Pasa pack Bot_
┣ㅤ_Atencion grupo_
┣ㅤ_Marica quien_
┣ㅤ_Murio el grupo_
┣ㅤ_Oh me vengo_
┣ㅤ_tio que rico_
┣ㅤ_Viernes_
┣ㅤ_Baneado_
┣ㅤ_Sexo_
┣ㅤ_Hola_
┣ㅤ_Un pato_
┣ㅤ_Nyanpasu_
┣ㅤ_Te amo_
┣ㅤ_Yamete_
┣ㅤ_Bañate_
┣ㅤ_Es puto_
┣ㅤ_La biblia_
┣ㅤ_Onichan_
┣ㅤ_Mierda de Bot_
┣ㅤ_Siuuu_
┣ㅤ_Epico_
┣ㅤ_Shitpost_
┣ㅤ_Rawr_
┣ㅤ_UwU_
┣ㅤ_:c_
┣ㅤ_a_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}chatgpt *<texto>*_
┣ㅤ_${usedPrefix}dall-e *<texto>*_
┣ㅤ_${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣ㅤ_${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣ㅤ_${usedPrefix}clima *<país> <ciudad>*_
┣ㅤ_${usedPrefix}encuesta *<texto1|texto2...>*_
┣ㅤ_${usedPrefix}afk *<motivo>*_
┣ㅤ_${usedPrefix}ocr *<responde a imagen>*_
┣ㅤ_${usedPrefix}acortar *<enlace / link / url>*_
┣ㅤ_${usedPrefix}calc *<operacion math>*_
┣ㅤ_${usedPrefix}del *<mensaje>*_
┣ㅤ_${usedPrefix}whatmusic *<audio>*_
┣ㅤ_${usedPrefix}readqr *<imagen (QR)>*_
┣ㅤ_${usedPrefix}qrcode *<texto>*_
┣ㅤ_${usedPrefix}readmore *<texto1| texto2>*_
┣ㅤ_${usedPrefix}styletext *<texto>*_
┣ㅤ_${usedPrefix}traducir *<texto>*_
┣ㅤ_${usedPrefix}nowa *<numero>*_
┣ㅤ_${usedPrefix}covid *<pais>*_
┣ㅤ_${usedPrefix}horario_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}adventure_
┣ㅤ_${usedPrefix}cazar_
┣ㅤ_${usedPrefix}cofre_
┣ㅤ_${usedPrefix}balance_
┣ㅤ_${usedPrefix}claim_
┣ㅤ_${usedPrefix}heal_
┣ㅤ_${usedPrefix}lb_
┣ㅤ_${usedPrefix}levelup_
┣ㅤ_${usedPrefix}myns_
┣ㅤ_${usedPrefix}perfil_
┣ㅤ_${usedPrefix}work_
┣ㅤ_${usedPrefix}minar_
┣ㅤ_${usedPrefix}minar2_
┣ㅤ_${usedPrefix}buy_
┣ㅤ_${usedPrefix}buyall_
┣ㅤ_${usedPrefix}verificar_
┣ㅤ_${usedPrefix}robar *<cantidad> <@tag>*_
┣ㅤ_${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣ㅤ_${usedPrefix}unreg *<numero de serie>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}sticker *<responder a imagen o video>*_
┣ㅤ_${usedPrefix}sticker *<enlace / link / url>*_
┣ㅤ_${usedPrefix}s *<responder a imagen o video>*_
┣ㅤ_${usedPrefix}s *<enlace / link / url>*_
┣ㅤ_${usedPrefix}sfull *<imagen o video>*_
┣ㅤ_${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ㅤ_${usedPrefix}scircle *<imagen>*_
┣ㅤ_${usedPrefix}sremovebg *<imagen>*_
┣ㅤ_${usedPrefix}semoji *<tipo> <emoji>*_
┣ㅤ_${usedPrefix}attp *<texto>*_
┣ㅤ_${usedPrefix}attp2 *<texto>*_
┣ㅤ_${usedPrefix}attp3 *<texto>*_
┣ㅤ_${usedPrefix}ttp *<texto>*_
┣ㅤ_${usedPrefix}ttp2 *<texto>*_
┣ㅤ_${usedPrefix}ttp3 *<texto>*_
┣ㅤ_${usedPrefix}ttp4 *<texto>*_
┣ㅤ_${usedPrefix}ttp5 *<texto>*_
┣ㅤ_${usedPrefix}pat *<@tag>*_
┣ㅤ_${usedPrefix}slap *<@tag>*_
┣ㅤ_${usedPrefix}kiss *<@tag>*_
┣ㅤ_${usedPrefix}dado_
┣ㅤ_${usedPrefix}wm *<packname> <author>*_
┣ㅤ_${usedPrefix}stickermarker *<efecto> <imagen>*_
┣ㅤ_${usedPrefix}stickerfilter *<efecto> <imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ> *<funcion>*
┣ㅤ=> *<funcion>*
┣ㅤ$ *<funcion>*
┣ㅤ_${usedPrefix}setprefix *<prefijo>*_
┣ㅤ_${usedPrefix}resetprefix_
┣ㅤ_${usedPrefix}autoadmin_
┣ㅤ_${usedPrefix}leavegc_
┣ㅤ_${usedPrefix}cajafuerte_
┣ㅤ_${usedPrefix}blocklist_
┣ㅤ_${usedPrefix}block *<@tag / numero>*_
┣ㅤ_${usedPrefix}unblock *<@tag / numero>*_
┣ㅤ_${usedPrefix}enable *restrict*_
┣ㅤ_${usedPrefix}disable *restrict*_
┣ㅤ_${usedPrefix}enable *autoread*_
┣ㅤ_${usedPrefix}disable *autoread*_
┣ㅤ_${usedPrefix}enable *public*_
┣ㅤ_${usedPrefix}disable *public*_
┣ㅤ_${usedPrefix}enable *pconly*_
┣ㅤ_${usedPrefix}disable *pconly*_
┣ㅤ_${usedPrefix}enable *gconly*_
┣ㅤ_${usedPrefix}disable *gconly*_
┣ㅤ_${usedPrefix}enable *anticall*_
┣ㅤ_${usedPrefix}disable *anticall*_
┣ㅤ_${usedPrefix}enable *antiprivado*_
┣ㅤ_${usedPrefix}disable *antiprivado*_
┣ㅤ_${usedPrefix}enable *modejadibot*_
┣ㅤ_${usedPrefix}disable *modejadibot*_
┣ㅤ_${usedPrefix}msg *<texto>*_
┣ㅤ_${usedPrefix}banchat_
┣ㅤ_${usedPrefix}unbanchat_
┣ㅤ_${usedPrefix}banuser *<@tag>*_
┣ㅤ_${usedPrefix}unbanuser *<@tag>*_
┣ㅤ_${usedPrefix}dardiamantes *<@tag>*_
┣ㅤ_${usedPrefix}añadirxp *<@tag>*_
┣ㅤ_${usedPrefix}banuser *<@tag>*_
┣ㅤ_${usedPrefix}bc *<texto>*_
┣ㅤ_${usedPrefix}bcchats *<texto>*_
┣ㅤ_${usedPrefix}bcgc *<texto>*_
┣ㅤ_${usedPrefix}bcgc2 *<audio>*_
┣ㅤ_${usedPrefix}bcgc2 *<video>*_
┣ㅤ_${usedPrefix}bcgc2 *<imagen>*_
┣ㅤ_${usedPrefix}bcbot *<texto>*_
┣ㅤ_${usedPrefix}cleartpm_
┣ㅤ_${usedPrefix}restart_
┣ㅤ_${usedPrefix}update_
┣ㅤ_${usedPrefix}banlist_
┣ㅤ_${usedPrefix}addprem *<@tag>*_
┣ㅤ_${usedPrefix}delprem *<@tag>*_
┣ㅤ_${usedPrefix}listprem_
┣ㅤ_${usedPrefix}listcmd_
┣ㅤ_${usedPrefix}setppbot *<responder a imagen>*_
┣ㅤ_${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┣ㅤ_${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕄𝔸𝕋𝔸 𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ - 𝕍𝕀ℝ𝕌𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ㅤ_${usedPrefix}crash𝟷_
┣ㅤ_${usedPrefix}crash2_
┣ㅤ_${usedPrefix}crash3_
┣ㅤ_${usedPrefix}crash4_
┣ㅤ_${usedPrefix}crash5_
┣ㅤ_${usedPrefix}crash6_
┣ㅤ_${usedPrefix}crash7_
┣ㅤ_${usedPrefix}crash8_
┗━━━━━━━━━━━━━━━━┛
`.trim()
let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '📮 𝙳𝙾𝙽𝙰𝚁 📮' }, type: 1 },
//{ buttonId: '#terminosycondiciones', buttonText: { displayText: '📋 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂 📋' }, type: 1 }]
{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '𝐆𝐮𝐬𝐭𝐚𝐯𝐨 𝐏𝐞𝐧𝐠',
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/TheShadowBrokers133`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
