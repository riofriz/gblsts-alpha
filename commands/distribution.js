const { SlashCommandBuilder } = require('@discordjs/builders');
const collections = require('../roles.json');
const Discord = require("discord.js");
const ethers = require("ethers");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('distribution')
        .setDescription('Shows how points are distributed across the various GBLSTS projects!'),
    async execute(interaction) {
        let distribution = ``;

        collections.forEach(item => {
            if (item.role !== '') {
                distribution += `[${item.points} Points] - <@&${item.role}>\n`
            }
        });

        let tiers = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .addFields({
                name: `Points Distribution`,
                value: `${distribution}`,
            },{
                    name: `Tiers`,
                    value: `50+ Points: <@&976501320435503114>\n135+ Points: <@&976501376618217543>\n300+ Points: <@&976501407010144327>`
            });

        return interaction.reply({embeds: [tiers], ephemeral: true});
    },
};