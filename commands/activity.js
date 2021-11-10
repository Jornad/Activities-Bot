const { SlashCommandBuilder } = require('@discordjs/builders');
let link = 'LINK_HERE'
module.exports = {
	data: new SlashCommandBuilder()
		.setName('activity')
		.setDescription('Starts an activity!'),
	async execute(interaction) {
        let game = interaction.options.getString('type').slice(9);
		await interaction.reply('Click this link to start ' + game.replace('_', ' ') + '! ' + link);
	},
};
