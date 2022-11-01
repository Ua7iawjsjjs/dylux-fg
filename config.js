import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['212674874107', 'FG98', true],
  ['212674874107'], 
  ['212674874107'] 
] //Numeros de owner 

global.mods = ['212674874107'] 
global.prems = ['212674874107', '212674874107', '212674874107']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  males: 'https://malesin.xyz', 
  fgmods: 'https://api-fgmods.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.herokuapp.com': 'fg-dylux'
}

// Sticker WM
global.packname = 'ZENX1 🎃' 
global.author = 'yassen 🎃' 
global.igfg = '▢ Sígueme en Instagram\nhttps://www.instagram.com/7x8.q_' 
global.dygp = 'https://chat.whatsapp.com/DNZaLXU8nAW3jfqdxmsU3z'
global.fgsc = '.' 
global.fgyt = '.'
global.fgpyp = '.'
global.fglog = 'https://telegra.ph/file/5a48faed66eee1d8e05e8.jpg' 

global.wait = '*⌛ _loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
