const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows the list of available commands!'),
    async execute(interaction) {

        let tiers = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .addFields({
                name: `List of commands`,
                value: "`/alpha` - Adds you to a specific tier of Alpha\n" +
                    "`/distribution` - Shows points distribution depending on your roles\n" +
                    "`/points` - Shows how many points you have",
            });

        return interaction.reply({embeds: [tiers], ephemeral: true});

    },
};