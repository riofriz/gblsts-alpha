const { SlashCommandBuilder } = require('@discordjs/builders');
const db = require('../db.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('alpha')
        .setDescription('Gives you access to Alpha tiers depending on your collection!'),
    async execute(interaction) {
        let tier;
        let assignedRoles = `You have been assigned to these Alpha tiers: `;
        let toNextTier = '';
        let points = 0;

        db.roles.forEach(item => {
           if (item.role !== '') {
               if (interaction.member.roles.cache.some(role => role.id === `${item.role}`)) {
                   points = points + item.points;
               }
           }
        });

        db.alpha.forEach(a => {
            if (points < 50) {
                assignedRoles = `You have ${points} points, unfortunately that's not enough to join any of the Alpha tiers.`;
            }

            if (points >= a.requirement) {
                tier = interaction.guild.roles.cache.find(r => r.id === `${a.role}`);
                interaction.member.roles.add(tier);
                assignedRoles += " `"+a.name+"`";

                if (a.nextTierPrice !== null) {
                    toNextTier = `. You will need **${a.nextTierPrice - points} points** to access the next tier`;
                } else {
                    toNextTier = `.`;
                }
            } else {
                tier = interaction.guild.roles.cache.find(r => r.id === `${a.role}`);
                interaction.member.roles.remove(tier);
            }
        });

        return interaction.reply({content: `${assignedRoles}${toNextTier}`, ephemeral: true});
    },
};