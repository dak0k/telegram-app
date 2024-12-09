import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'
import { tgBotToken } from './tgBotToken.js'


const token = tgBotToken
const webAppUrl = 'https://v0m1chls-4200.euw.devtunnels.ms/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([
      Markup.button.webApp('Открыть приложение', `${webAppUrl}`),
    ])
  )
})

bot.launch()