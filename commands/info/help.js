const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
      const embed = new MessageEmbed()
      //change thios commands with your commadns
      .setColor('#0099ff')
	.setTitle('Help')
	.setDescription('SUBSCRIBE TO EE3')
	.setThumbnail('https://cdn.discordapp.com/avatars/817007659973869569/776c6070cdf6ab73a4127c7a16e2bafc.webp?size=4096')
	.addFields(
		{ name: 'Info Commands', value: '`help, ping`',},
		{ name: 'name here', value: `commands here`' },
    { name: 'name here', value: '`commands here`' },
    { name: 'name here', value: '`commands here`' },
    { name: 'Links', value: '[YOUTUBE](https://youtube.com/channel/UCmJE0LBj20_7302l8596N7w) | [DISCORD](https://discord.gg/DpqZGduR)' },
    )

    .setTimestamp()    
    .setFooter('Use e3! before all commands for example e3!help')
    message.channel.send(embed);
    }
}
