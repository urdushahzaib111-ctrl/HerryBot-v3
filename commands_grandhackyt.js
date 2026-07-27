const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('grandhackyt')
        .setDescription('Grandhacks YouTube Channel'),
    async execute(interaction) {
        const TARGET_ROLE_ID = '1529468377163235358';
        
        if (!interaction.member.roles.cache.has(TARGET_ROLE_ID)) {
            return interaction.reply({ content: `❌ Yeh command sirf **Grand Hacks** role wale members ke liye hai!`, ephemeral: true });
        }

        return interaction.reply({ content: `📺 **Grandhacks YouTube Channel:** https://www.youtube.com/@grandhacks-l7j`, ephemeral: true });
    },
};
