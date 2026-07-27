const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uptime')
        .setDescription('Show bot uptime'),
    async execute(interaction) {
        let totalSeconds = (interaction.client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        await interaction.reply({ content: `Uptime: **${hours}h ${minutes}m**`, ephemeral: true });
    },
};
