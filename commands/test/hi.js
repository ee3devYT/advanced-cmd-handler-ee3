const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'hi',
    category : 'test',
    description : 'hello',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        message.channel.send('hello')
    }
}
