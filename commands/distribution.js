const { SlashCommandBuilder } = require('@discordjs/builders');
const db = require('../db.json');
const Discord = require("discord.js");
const ethers = require("ethers");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('distribution')
        .setDescription('Shows how points are distributed across the various GBLSTS projects!'),
    async execute(interaction) {
        let distribution = ``;
        let alpha = ``

        db.roles.forEach(item => {
            if (item.role !== '') {
                distribution += `[${item.points} Points] - <@&${item.role}>\n`
            }
        });

        db.alpha.forEach(a => {
            if (a.role !== '') {
                alpha += `${a.requirement}+ Points: <@&${a.role}>\n`
            }
        });

        let tiers = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .addFields({
                name: `Points Distribution`,
                value: `${distribution}`,
            },{
                    name: `Tiers`,
                    value: `${alpha}`
            });

        return interaction.reply({embeds: [tiers], ephemeral: true});
    },
};