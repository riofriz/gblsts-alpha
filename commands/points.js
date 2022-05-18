const { SlashCommandBuilder } = require('@discordjs/builders');
const db = require('../db.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('points')
        .setDescription('Checks how many points you have!'),
    async execute(interaction) {
        let points = 0;
        let whatAlpha = `. You can join these tiers: `;
        let toNextTier = ``;

        db.roles.forEach(item => {
            if (item.role !== '') {
                if (interaction.member.roles.cache.some(role => role.id === `${item.role}`)) {
                    points = points + item.points;
                }
            }
        });

        db.alpha.forEach(a => {
            if (points < 50) {
                whatAlpha = ``;
            }

            if (points >= a.requirement) {
                whatAlpha += " `"+a.name+"`";

                if (a.nextTierPrice !== null) {
                    toNextTier = `. You will need **${a.nextTierPrice - points} points** to access the next tier`;
                } else {
                    toNextTier = `.`;
                }
            }
        });

        return interaction.reply({content: `You have ${points} points${whatAlpha}${toNextTier}`, ephemeral: true});
    },
};