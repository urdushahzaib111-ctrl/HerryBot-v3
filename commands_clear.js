const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clear messages from channel')
        .addIntegerOption(option => option.setName('amount').setDescription('Number of messages to clear (1-100)').setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');

        if (amount < 1 || amount > 100) {
            return interaction.reply({ content: '❌ Meherbani karke 1 se 100 ke darmiyan number dein.', ephemeral: true });
        }

        await interaction.channel.bulkDelete(amount, true).catch(err => {
            return interaction.reply({ content: '❌ Messages delete karte waqt error aa gaya (14 din se purane messages delete nahi ho sakte).', ephemeral: true });
        });

        return interaction.reply({ content: `✅ **${amount}** messages delete kar diye gaye hain.`, ephemeral: true });
    },
};
