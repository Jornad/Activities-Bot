const { SlashCommandBuilder } = require('@discordjs/builders');
var game = 'GAME_HERE';
var link = 'LINK_HERE'

module.exports = {
	data: new SlashCommandBuilder()
		.setName('action')
		.setDescription('Starts an action!'),
	async execute(interaction) {
        let game = interaction.options.getString('type').slice(7).replace('_', ' ');
		await interaction.reply('Click this link to start ' + game + '! ' + link);
	},
};
