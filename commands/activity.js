const { SlashCommandBuilder } = require('@discordjs/builders');
const { Invite } = require('discord.js');
let link = 'LINK_HERE'

module.exports = {
	data: new SlashCommandBuilder()
		.setName('activity')
		.setDescription('Starts an activity!'),
	async execute(interaction) {
        let game = interaction.options.getString('type').slice(9);
		let VoiceChannel = 
		let Invite = await VoiceChannel.activityInvite(game.toLowerCase());
		let link = 'https://discord.com/invite/' + Invite.Code
		await interaction.reply('Click this link to start ' + game.replace('_', ' ') + '! ' + link + VoiceChannel);
	},
};
