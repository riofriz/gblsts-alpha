const { SlashCommandBuilder } = require('@discordjs/builders');
const collections = require('../roles.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('alpha')
        .setDescription('Gives you access to Alpha tiers depending on your collection!'),
    async execute(interaction) {
        let tier1 = interaction.guild.roles.cache.find(r => r.id === "976501320435503114");
        let tier2 = interaction.guild.roles.cache.find(r => r.id === "976501376618217543");
        let tier3 = interaction.guild.roles.cache.find(r => r.id === "976501407010144327");
        let assignedRoles = `You have been assigned to these Alpha tiers: `;
        let toNextTier = '';

        let points = 0;

        collections.forEach(item => {
           if (item.role !== '') {
               if (interaction.member.roles.cache.some(role => role.id === `${item.role}`)) {
                   points = points + item.points;
               }
           }
        });


        if (points < 50) {
            assignedRoles = `You have ${points} points, unfortunately that's not enough to join any of the Alpha tiers.`;
        }

        if (points >= 50) {
            interaction.member.roles.add(tier1);
            assignedRoles += `\`Tier 1\``;
            toNextTier = `. You will need **${135-points} points** to access the next tier`;
        }

        if (points >= 135) {
            interaction.member.roles.add(tier2);
            assignedRoles += `, \`Tier 2\``;
            toNextTier = `. You will need **${175-points} points** to access the next tier`;
        }

        if (points >= 300) {
            interaction.member.roles.add(tier3);
            assignedRoles += `, \`Tier 3\``;
            toNextTier = `.`;
        }

        return interaction.reply({content: `${assignedRoles}${toNextTier}`, ephemeral: true});
    },
};