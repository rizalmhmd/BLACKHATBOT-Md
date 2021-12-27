let handler = async(m, { conn, text, participants }) => {
  let teks = `══✪〘 *TAG ALL* 〙✪══\n\n➲ *Pesan : ${text ? text : 'Tanpa Alasaan'}*\n\n`
		      	for (let mem of participants) {
		            teks += `➥ @${mem.id.split('@')[0]}\n`
				}
                teks += `\n⋙ *BLACKHATBOT* ⋘`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
