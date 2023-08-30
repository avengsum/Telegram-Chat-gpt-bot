const Bot = require('node-telegram-bot-api')
require('dotenv').config()
const generateResponse = require('./generate')

const token = process.env.KEY


const bot = new Bot(token,{polling:true});

bot.onText(/\/ques (.+)/, async (msg,match) => {
    const chatId = msg.chat.id
    const message = match[1]
    console.log(msg)

    const result = await generateResponse(message)

    bot.sendMessage(chatId,result)
})
