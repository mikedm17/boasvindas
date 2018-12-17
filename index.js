const TelegramBot = require( `node-telegram-bot-api` )
const TOKEN = `357840414:AAFme-RDpKIWUwFYHqtuYwtRdWQTgG9tAvs`
const bot = new TelegramBot( TOKEN, { polling: true } )
bot.on('new_chat_members', (msg) => {
   bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, bem vindo ao grupo!!`)
})