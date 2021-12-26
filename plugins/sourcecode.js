/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
let esce = `
*PERATURAN THCA BOT INDONESIA 🔊*

Ini adalah bot WhatsApp yg bisa membantu anda!
contoh command simpel

# *!sticker* yaitu untuk membuat sticker di WhatsApp *kirim/reply foto* dengan caption *!sticker*
 
# *!ytmp3* yaitu untuk mengunduh video/audio dari YouTube *kirim perintah !ytsearch di teruskan judul/link YouTube*
 
# *!menu* yaitu untuk menampilan menu bot
 
# *!anime* yaitu untuk stalk anime *kirim perintah !anime lanjut judul anime*
 
# *!ytsearch* yaitu untuk membantu mencari music atau video di youtube
 
# *!alquran* yaitu untuk melihat isi surat yg kalian cari beserta artinya *kirim perintah !alquran di lanjut dengan ayat dan surah yg kalian cari*
 
*Silahkan kalian coba fitur-fitur lain yg sudah di sediakan bot kami*
 
*Warning 🚦*

-bot tidak bisa online 24jam kalau owner online bot juga ikut online
-dilarang menelpon/vc bot
-dilarang spam bot/jeda 5 detik bang
-dilarang masukan bot sembarang grup (izin owner)
-dilarang menggunakan fitur dewasa untuk anak di bawah 18th
-gunakan bot dengan bijak
 
*jadilah pengguna yang baik dan mematuhi rules*
*menu lainnya bisa kalian liat sendiri dengan ketik !menu* `
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: esce,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/esce.jpg') },           
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '💠 Source Code',
               url: 'https://github.com/koleksibot'
             }

           },
               {
             quickReplyButton: {
               displayText: '⬅ Kembali Ke Menu',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler


