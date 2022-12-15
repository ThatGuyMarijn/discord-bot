const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('amaru')
        .setDescription('Does Marijn love Amaru?')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Is this a fact?')),
    async execute(interaction) {
        await interaction.reply('Marijn loves Amaru!');
    }
};