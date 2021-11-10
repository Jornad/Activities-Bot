const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('action')
		.setName('action')
		.setDescription('Starts an action!')
		.addStringOption(option =>
			option.setName('type')
				.setDescription('which action you would like to start')
				.setRequired(true)
					.addChoice('Checkers', 'action_Checkers_in_the_Park')
					.addChoice('Chess', 'action_Chess_in_the_Park')
					.addChoice('DoodleCrew', 'action_Doodle')
					.addChoice('LetterTile', 'action_Letter_Tile')
					.addChoice('Poker', 'action_Poker_Night')
					.addChoice('Spellcast', 'action_Spell_Cast')
					.addChoice('WatchTogether', 'action_Watch_Together')
					.addChoice('WordSnacks', 'action_Word_Snacks')
			)
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);
rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
