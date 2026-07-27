const { Client, GatewayIntentBits, REST, Routes, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

client.commands = new Collection();
const commandsArray = [];

// Commands folder se saari files (single aur array dono) load karne ka code
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    
    // Agar file array wali hai (jaise part1.js ya part2.js)
    if (Array.isArray(command.data)) {
        for (const subCommand of command.data) {
            client.commands.set(subCommand.name, command);
            commandsArray.push(subCommand.toJSON());
        }
    } 
    // Agar file single command wali hai (jaise ping.js, ban.js)
    else if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
        commandsArray.push(command.data.toJSON());
    }
}

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}! Registering commands...`);
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commandsArray },
        );
        console.log('Successfully registered all command files!');
    } catch (error) {
        console.error(error);
    }
});

// Slash Command Handler
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: '❌ Is command ko chalane mein error aa gaya!', ephemeral: true });
        } else {
            await interaction.reply({ content: '❌ Is command ko chalane mein error aa gaya!', ephemeral: true });
        }
    }
});

client.login(process.env.TOKEN);
