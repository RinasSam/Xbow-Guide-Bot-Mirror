/*
 * commands.js: basic commands for Xbow Guide Bot.
 * 
 * This file is part of Xbow Guide Bot: The Free and Open Source Xbow Matchup Guides Discord Bot.
 * Copyright (C) 2022 RinasSam.
 * 
 * Xbow Guide Bot is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Xbow Guide Bot is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * Author contact information:
 * 	Email:		samkhaldoon2006@gmail.com
 * 	Discord:	RinasSam#0931
 */

/* Important Definitions */
require("./common.js");



/* Basic help menu. */
function
displayHelp()
{
    var embed = new Discord.MessageEmbed().setColor("#FFFFFF");
    
    embed
            .setTitle("Command List:")
        .addFields(
                { name: '**g!help**', value: 'Shows a list of all the commands.\n\n' },
                { name: '**g!list**', value: 'Lists available guides\n\n'},
                { name: '**g!find {what to find here}**', value: 'Finds a guide.' },
		{ name: '**g!info**', value: 'Shows basic information about the bot, such as version number.'},
                { name: '**g!invite**', value: 'Get the invite link for this bot.\n\n' },
                { name: '**g!license**', value: 'Shows the license of the bot and the guides\' license.\n\n' },
            )
        .setFooter(`Xbow Guide Bot ${version} • Help Menu`);
 
    
    message.channel.send(embed);

}

/* Provide a quick and easy way to invite this bot to other servers. */
function
displayInvite()
{
    
    
    var embed = new Discord.MessageEmbed().setColor("#FFFFFF");
    
    embed
        .setTitle("Invite Link:")
        .addFields(
            { name: '**Invite me with this link!**', value: '[Click Here!](https://discord.com/api/oauth2/authorize?client_id=839764015567470603&permissions=511040&scope=bot)' }
        )
        .setFooter(`Xbow Guide Bot ${version} • Invite Link`);
    message.channel.send(embed);
    
}
    
/*
 * Show the license of the bot and the license of the guides.
 * THE BOT LICENSE MUST NOT CHANGE, SINCE IT IS LICENSED UNDER THE AGPL ANY SUBSEQUENT VERSIONS OF IT
 * WILL HAVE TO BE LICENSED UNDER THE AGPL AS WELL.
 * 
 * You can however, change the guides' license, PROVIDED THAT THE GUIDES ARE NOT THE SAME AS THE OLD ONES.
 */
function
displayLicense()
{
    var embed = new Discord.MessageEmbed().setColor("#FFFFFF");
    
    embed
        .setTitle('License')
        .addFields(
	    {name: `\n\n‌‌‌‌‌`, value: `The Xbow Guide Bot is licensed under the [GNU Affero General Public License V3](https://www.gnu.org/licenses/agpl-3.0.en.html).\n\nThe Xbow matchup guides are licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License.](https://creativecommons.org/licenses/by-nc/4.0/)`})
        .setFooter(`Xbow Guide Bot ${version} • License`);
    message.inlineReply(embed);
}

/* Provide basic info on the bot. */
function
displayInfo()
{
    embed
	.setTitle('Info')
	.addFields(
	    {name:`\n\n`, value: `Basic info:\n\nVersion Number: ${version}\n\nReleased by: ${author}\n\nPing: ${Date.now() - message.createdTimestamp}ms`})
	.setFooter(`Xbow Guide Bot ${version} • Info`);
    message.inlineReply(embed);
}

