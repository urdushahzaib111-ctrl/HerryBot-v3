const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: [
        new SlashCommandBuilder().setName('compliment').setDescription('Compliment a user'),
        new SlashCommandBuilder().setName('hug').setDescription('Hug a user'),
        new SlashCommandBuilder().setName('kiss').setDescription('Kiss a user'),
        new SlashCommandBuilder().setName('slap').setDescription('Slap a user'),
        new SlashCommandBuilder().setName('pat').setDescription('Pat a user'),
        new SlashCommandBuilder().setName('dance').setDescription('Dance animation'),
        new SlashCommandBuilder().setName('sing').setDescription('Sing a song'),
        new SlashCommandBuilder().setName('gif').setDescription('Search a GIF'),
        new SlashCommandBuilder().setName('dice').setDescription('Roll a dice'),
        new SlashCommandBuilder().setName('coinflip').setDescription('Flip a coin'),
        new SlashCommandBuilder().setName('rps').setDescription('Play Rock Paper Scissors'),
        new SlashCommandBuilder().setName('truth').setDescription('Play Truth'),
        new SlashCommandBuilder().setName('dare').setDescription('Play Dare'),
        new SlashCommandBuilder().setName('ship').setDescription('Ship two users'),
        new SlashCommandBuilder().setName('avatar').setDescription('View user avatar'),
        new SlashCommandBuilder().setName('rank').setDescription('Check level rank'),
        new SlashCommandBuilder().setName('level').setDescription('Check user level'),
        new SlashCommandBuilder().setName('daily').setDescription('Claim daily reward'),
        new SlashCommandBuilder().setName('slots').setDescription('Play slot machine'),
        new SlashCommandBuilder().setName('gamble').setDescription('Gamble coins'),
        new SlashCommandBuilder().setName('leaderboard').setDescription('Show leaderboard'),
        new SlashCommandBuilder().setName('ascii').setDescription('Create ASCII art'),
        new SlashCommandBuilder().setName('color').setDescription('Show color info'),
        new SlashCommandBuilder().setName('wiki').setDescription('Search Wikipedia'),
        new SlashCommandBuilder().setName('reddit').setDescription('Browse Reddit'),
        new SlashCommandBuilder().setName('spotify').setDescription('Search Spotify'),
        new SlashCommandBuilder().setName('steam').setDescription('Search Steam game'),
        new SlashCommandBuilder().setName('epic').setDescription('Epic games info'),
        new SlashCommandBuilder().setName('xbox').setDescription('Xbox profile lookup'),
        new SlashCommandBuilder().setName('gameinfo').setDescription('Get game info'),
        new SlashCommandBuilder().setName('gamestats').setDescription('Get game stats'),
        new SlashCommandBuilder().setName('achievements').setDescription('View achievements'),
        new SlashCommandBuilder().setName('crypto').setDescription('Check crypto price'),
        new SlashCommandBuilder().setName('stock').setDescription('Check stock price'),
        newSlashCommandBuilder().setName('currency').setDescription('Currency converter'),
        new SlashCommandBuilder().setName('news').setDescription('Read latest news'),
        new SlashCommandBuilder().setName('sports').setDescription('Check sports update'),
        new SlashCommandBuilder().setName('score').setDescription('Check live score'),
        new SlashCommandBuilder().setName('qr').setDescription('Generate QR code'),
        new SlashCommandBuilder().setName('shorten').setDescription('Shorten a URL'),
        new SlashCommandBuilder().setName('password').setDescription('Generate secure password'),
        new SlashCommandBuilder().setName('feedback').setDescription('Send feedback'),
        new SlashCommandBuilder().setName('bugreport').setDescription('Report a bug'),
        new SlashCommandBuilder().setName('suggestions').setDescription('Send suggestion')
    ],
    async execute(interaction) {
        const cmdName = interaction.commandName;
        await interaction.reply({ content: `✅ Command **/${cmdName}** successfully executed!`, ephemeral: true });
    }
};
