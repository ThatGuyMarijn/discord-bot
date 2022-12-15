const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('amaru')
        .setDescription('Does Marijn love Amaru?')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Is this a fact?')
                .setRequired(true)
                .addChoices(
                    { name: 'Fact', value: 'true' },
                    { name: 'Fake', value: 'false' }
                )),
    async execute(interaction) {
        const input = interaction.options.getString('input');
        if (input === 'true') {
            await interaction.reply('Marijn loves Amaru!');
        } else {
            await interaction.reply('Marijn does not love Amaru! SIKE.');
        }
    }
};