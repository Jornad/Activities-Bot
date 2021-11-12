require("discordjs-activity");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('activity')
		.setDescription('Starts an activity!'),
	async execute(interaction) {
        let game = interaction.options.getString('type').slice(9);
		let VoiceChannel = interaction.client.channels.cache.get(interaction.member.voice.channelId);
		let Invite = await VoiceChannel.activityInvite(game.toLowerCase());
		//let link = 'https://discord.com/invite/' + Invite.Code
		//await interaction.reply('Click this link to start ' + game.replace('_', ' ') + '! ' + link + VoiceChannel);

		console.log(Invite);
	},
};
