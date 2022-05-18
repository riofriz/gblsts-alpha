/*
 * Not sure if this is needed, but it's a "floor" command for any collection name.
 * In order to use this, move this file to the "commands" folder and uncomment the code.
 *
 * Please note: You will need a OpenSea api in order for this to work.
 *
 */

/*
const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const Discord = require("discord.js");
const ethers = require('ethers');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('floor')
        .setDescription(`Shows any collection's floor price`)
        .addStringOption(option => option.setName('collection').setDescription('Enter collection slug')),
    async execute(interaction) {
        const options = {method: 'GET'};
        let collection = interaction.options.getString('collection');
        let url = 'https://api.opensea.io/api/v1/collection/'+collection;

        fetch(url, options)
            .then(res => res.json())
            .then(

                json => {
                    let floor = json.collection.stats.floor_price;

                    let usercard = new Discord.MessageEmbed()
                        .setTitle(`${collection} floor`)
                        .setColor('RANDOM')
                        .addFields({
                            name: `${floor}${ethers.constants.EtherSymbol}`,
                            value: `[Check on OpenSea](https://opensea.io/assets/${collection}?search[resultModel]=ASSETS&search[sortAscending]=true&search[sortBy]=PRICE&search[toggles][0]=BUY_NOW)`,
                        });

                    return interaction.reply({embeds: [usercard], ephemeral: true});
                }

            ).catch(err => {
            console.error('error:' + err);
        });
    },
};*/