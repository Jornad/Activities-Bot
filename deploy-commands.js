const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('action')
		.setName('action')
		.setDescription('Starts an action')
		.addStringOption(option =>
			option.setName('type')
				.setDescription('which action you would like to start')
				.setRequired(true)
					.addChoice('Checkers', 'action_checkers')
					.addChoice('Chess', 'action_chess')
					.addChoice('DoodleCrew', 'action_doodle')
					.addChoice('LetterTile', 'action_lettertile')
					.addChoice('Poker', 'action_poker')
					.addChoice('Spellcast', 'action_spellcast')
					.addChoice('WatchTogether', 'action_watchtogether')
					.addChoice('WordSnacks', 'action_wordsnacks')
			)
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);
rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
