const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('distribution')
        .setDescription('Shows how points are distributed across the various GBLSTS projects!'),
    async execute(interaction) {
        let distribution = ``;
        let alpha = ``

        fetch('https://riofriz.github.io/gblsts-alpha/db.json')
            .then(res => res.json())
            .then(
                json => {
                    json.roles.forEach(item => {
                        if (item.role !== '') {
                            distribution += `[${item.points} Points] - <@&${item.role}>\n`
                        }
                    });

                    json.alpha.forEach(a => {
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
                }

            ).catch(err => {
            console.error('error:' + err);
        });
    },
};