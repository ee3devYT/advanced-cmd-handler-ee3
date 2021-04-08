const { rejects } = require('assert')
const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const mongoose = require('mongodb')

mongoose.connect('link-here', { //if you dont know how to get it watch this video : https://youtu.be/eiBn1-Qx0ew
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log('Connected to mongodb  ✅ '))
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {

    const arrayOfStatus = [
        `${client.users.cache.size} users`,//change this with your status
        `${prefix}help`,//change this with your status
        `suibscribe to ee3`,//change this with your status
    ];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        client.user.setActivity(status);
        index++;
    }, 5000)

    console.log(`logged in as ${client.user.username} BOT ✅`)
    console.log('□□□□□ 0%')
    console.log('■□□□□ 20%')
    console.log('■■□□□ 40')
    console.log('■■■□□ 60%')
    console.log('■■■■□ 80%')
    console.log('■■■■■ 100%')
    console.log('◇────────────────◇────────────────◇')
    console.log('𓅂 THANKS FOR USING EE3 COMMAND HANDLER')
    console.log('◇────────────────◇────────────────◇')
    console.log('IF YOU GET ANY ERROR DM E-E-3#4933')
    console.log('𝗘𝗘3 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗛𝗔𝗡𝗗𝗟𝗘𝗥 𝘃10')
})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})
client.login(token)
L
