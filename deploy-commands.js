const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('action')
		.setName('activity')
		.setDescription('Starts an activity!')
		.addStringOption(option =>
			option.setName('type')
				.setDescription('which activity you would like to start')
				.setRequired(true)
					.addChoice('Poker', 'activity_Poker_Night')
					.addChoice('Betrayal', 'activity_Betrayal')
					.addChoice('YoutubeTogether', 'activity_Youtube_Together')
					.addChoice('Fishington', 'activity_Fishington')
					.addChoice('Chess', 'activity_Chess_in_the_Park')
					.addChoice('DoodleCrew', 'activity_Doodle_Crew')
					.addChoice('WordSnacks', 'activity_Word_Snacks')
					.addChoice('LetterTile', 'activity_Letter_Tile')
			)
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);
rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
	