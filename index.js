/*
 * index.js: the main code of the Xbow Guide Bot.
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
 

/*
 * The following code that the bot keep running by opening a port. 
 * Uptimerobot <https://uptimerobot.com/> pings the bot every 5 minutes to ensure is keeps running.
 *
 * This code is only for REPL <https://www.repl.it>. You can remove it if you need to.
 */


const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello RinasSam.'));
app.listen(port, () => console.log(`Xbow Guide Bot listening at http://localhost:${port}`));



/* Important Definitions */
require("./common.js");

/* Basic Commands */
require("./commands.js");


/*
 * Create a new Discord bot instance.
 * Once it is ready, set the activity to aid users in knowing what the help commmand is.
 */ 


const Client = new Discord.Client();

Client.once('ready', () => {
    console.log('Xbow Guide Bot is online!');
    Client.user.setActivity('g!help for help', { type: 'PLAYING' })
});


/*  On every new message, do something. */
  

Client.on('message', async message => {

    /* Basic checks (such as wrong channels, bots running the commands, etc). */

    var illegalChan1id = '839839651627925544';
    var illegalChan2id = '839927914325475338';
    var modChannelid = '800342566041944064';
    
    if (!message.content.startsWith(prefix) || message.author.bot) {
	return;
    }

    if(message.channel.id === illegalChan1id || message.channel.id === illegalChan2id) {
	var embed = new Discord.MessageEmbed().setColor("#FF0000");
	
        embed
            .setTitle("DON\'T USE THE BOT IN THESE CHANNELS!")
            .addFields(
                { name: 'WARNING', value: 'Please, don\'t use the bot in these channels.\nThis action will be reported to the moderators. '}
            )
            .setFooter(`Xbow Guide Bot ${version} • Warning`);
	message.inlineReply(embed);
	Client.channels.cache.get(modChannelid).send('Moderators!\n\nThis bot was used in **<#' + message.channel.id + '>** by <@' + message.author.id + '>.');
	return;
    }


    args = message.content.slice(prefix.length).split(/ +/);
    
    const command = args.shift().toLowerCase();


    if(command === "help") {
	displayHelp();
    }

    if(command === "invite") {
	displayInvite();
    }

    if(command === "license") {
	displayLicense();
    }

    if(command === "info") {
	displayInfo();
    }

    
    if(command === 'list')
    {
	var guideArr = [];
	
	
    fs.readdirSync(guideFolder).forEach(file => {
        var guideName = file.replace('.txt', '');
        
        guideArr.push(guideName);

      });

guideArr;
var str = '';

for(var i = 0; i <= 256; i++)
{
  if(guideArr[i] == null || guideArr[i] == undefined)
  {break;}
  str = str.concat(i+1 + '. ');
  str = str.concat(guideArr[i]);
  str = str.concat('\n');
}

var foundArr = guideArr;
        var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle("Guide List:")
            .addFields({name: `Type the guide number to display the guide; anything else to not.`, value: `${str}`})
            .setFooter(`Xbow Guide Bot ${version} • Guide List`);
            
    message.channel.send(embed);
//////////////////////////////////////////////////////
var g;
 
        console.log(foundArr.length);
        
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 15000 });
        //console.log(collector)
        collector.on('end', collected => {
                return;});
        collector.on('collect', message => {
          if(message.content > foundArr.length)
          collector.stop();
          if(!(message.content <= foundArr.length || message.content > 0))
          {
              
            collector.stop();
          }
            g = message.content;
            console.log(foundArr);
            str = foundArr[g-1];
            console.log(str);
            fs.readdirSync(guideFolder).forEach(file => {
      console.log(file);
        if(file.toLowerCase() === str.concat('.txt').toLowerCase())
        {
          name = file;
          data = fs.readFileSync(guideFolder + '/' + file, 'utf8');
        }

});


      if(data == undefined)
{return message.inlineReply(`${str.replace('.txt','')} guide was not found.`);}
console.log(data.length);
  if(data.length > 1024)
  {
    var index = data.indexOf('.', 500);
    index++;
    var index2 = data.indexOf('.', index + 500);
    index2++;
    var index3 = data.indexOf('.', index2 + 500);
    index3++;
    console.log(index3);
    var index4 = data.indexOf('.', index3 + 500);
    index4++;


      if(index3 === 0)
      {
        console.log('yes');
        var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data.substring(0, index)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index+1, index2)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index2+1, data.length)}`})
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
      }else{

      if(index4 === 0)
      {
        console.log('4');
        console.log(index)
        console.log(data.substring(index3+1, data.length));
        var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data.substring(0, index)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index+1, index2)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index2+1, index3)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index3+1, data.length)}`},)
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
      }else{

          console.log('fuck');
      var embed = new Discord.MessageEmbed().setColor("#FFFFFF");
        console.log(index3);
        console.log(index4);
        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data.substring(0, index)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index+1, index2)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index2+1, index3)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index3+1, index4)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index4+1, data.length)}`})
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
      }
      }
  }else{
  var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data}`})
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
  }       
    return message.channel.send(embed);
    collector.stop();

        });
    return;
  }

  if(command === 'guide')
  {


var embed = new Discord.MessageEmbed().setColor("#FF0000");

        embed
            .setTitle("WARNING: DEPRECATED COMMAND")
            .addFields(
                { name: 'WARNING', value: 'The `g!guide` has been deprecated as of v0.4.\nPlease use `g!find`.\n'}
            )
            .setFooter(`Xbow Guide Bot ${version} • Warning`);
  message.inlineReply(embed);
  return;

    if (!(args instanceof Array && args.length))
    {
      return message.inlineReply("No guide provided");
    }

    var str = args[0] + ' ';
    i = 1
    for (i; i <= 100; i++) {
      if (args[i] != undefined) {
        str = str.concat(args[i]);
        str = str.concat(' ');
      }
    }
    if(str == null)
    {return;}
    str = str.slice(0,-1);
    str = str.concat('.txt');
    var name;
    var data;
    fs.readdirSync(guideFolder).forEach(file => {
      console.log(file);
        if(file.toLowerCase() === str.toLocaleLowerCase())
        {
          name = file;
          data = fs.readFileSync(guideFolder + '/' + file, 'utf8');
        }

        console.log(file.substring(0, file.indexOf(' by')).toLowerCase());
        if(file.substring(0, file.indexOf(' by')).toLowerCase() === str.replace('.txt', '').toLowerCase())
        {

          name = file;
          data = fs.readFileSync(guideFolder + '/' + file, 'utf8');
        }

        console.log(file.toLocaleLowerCase());
        console.log(str.toLowerCase());
        if(file.toLowerCase().split(" ").includes(str.replace('.txt', '').toLowerCase()))
        {

          name = file;
          data = fs.readFileSync(guideFolder + '/' + file, 'utf8');
        }

    });
if(data == undefined)
{return message.inlineReply(`${str.replace('.txt','')} guide was not found.`);}

console.log(data.length);
  if(data.length > 1024)
  {
    var index = data.indexOf('.', 500);
    index++;
    var index2 = data.indexOf('.', index + 500);
    index2++;
    var index3 = data.indexOf('.', index2 + 500);
    index3++;
    var index4 = data.indexOf('.', index3 + 500);
    index4++;


      if(index3 === 0)
      {
        var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data.substring(0, index)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index+1, index2)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index2+1, data.length)}`})
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
      }else{

      if(index4 === 0)
      {
        var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data.substring(0, index)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index+1, index2)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index2+1, index3)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index3+1, data.length)}`},)
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
      }else{


      var embed = new Discord.MessageEmbed().setColor("#FFFFFF");
        console.log(index3);
        console.log(index4);
        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data.substring(0, index)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index+1, index2)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index2+1, index3)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index3+1, index4)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index4+1, data.length)}`})
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
      }
      }
  }else{
  var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data}`})
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
  }       
    return message.channel.send(embed);

  }









if(command === "find")
{

      if (!(args instanceof Array && args.length))
    {
      return message.inlineReply("No guide provided");
    }

    var guideToFind = args[0] + ' ';
    i = 1
    for (i; i <= 100; i++) {
      if (args[i] != undefined) {
        guideToFind = guideToFind.concat(args[i]);
        guideToFind = guideToFind.concat(' ');
      }
    }
    if(guideToFind == null)
    {return;}
    guideToFind = guideToFind.slice(0,-1);
    console.log(guideToFind);
  
    var name;
    var data;
  
      var guideArr = [];


    fs.readdirSync(guideFolder).forEach(file => {
        var guideName = file.replace('.txt', '');
        
        guideArr.push(guideName);

      });

console.log(guideArr);

var foundArr = [];
    for(var i = 0; i <= 256; i++)
    {
      if(guideArr[i] === undefined)
      {
        continue;
      }
      if(guideArr[i].toLowerCase().includes(guideToFind.toLowerCase()))
      {
          console.log( guideArr[i]);
          foundArr.push(guideArr[i]);
      }
    }

console.log('Found arr\n' + foundArr);

console.log(foundArr.length);



var str = '';


console.log(foundArr.length);

for(var i = 0; i <= 256; i++)
{
  if(foundArr[i] == null || foundArr[i] == undefined)
  {break;}
  str = str.concat(i+1 + '. ');
  str = str.concat(foundArr[i]);
  str = str.concat('\n');
}

if(!(foundArr instanceof Array && foundArr.length))
{return message.inlineReply(`${guideToFind.replace('.txt', '')} was not found.`);}

if(foundArr.length === 0)
{return message.inlineReply(`${guideToFind.replace('.txt', '')} was not found.`);}





//// only one guide
if(foundArr.length === 1)
{
  console.log("yes");
      str = str.slice(0,-1);
      str = str.slice(3, str.length);
    str = str.concat('.txt');
    console.log(str);
  var name;
    var data;
    fs.readdirSync(guideFolder).forEach(file => {
      console.log(file);
        if(file.toLowerCase() === str.toLocaleLowerCase())
        {
          name = file;
          data = fs.readFileSync(guideFolder + '/' + file, 'utf8');
        }

        console.log(file.substring(0, file.indexOf(' by')).toLowerCase());
        if(file.substring(0, file.indexOf(' by')).toLowerCase() === str.replace('.txt', '').toLowerCase())
        {

          name = file;
          data = fs.readFileSync(guideFolder + '/' + file, 'utf8');
        }

        console.log(file.toLocaleLowerCase());
        console.log(str.toLowerCase());
        if(file.toLowerCase().split(" ").includes(str.replace('.txt', '').toLowerCase()))
        {

          name = file;
          data = fs.readFileSync(guideFolder + '/' + file, 'utf8');
        }

    });
if(data == undefined)
{return message.inlineReply(`${str.replace('.txt','')} guide was not found.`);}

console.log(data.length);
  if(data.length > 1024)
  {
    var index = data.indexOf('.', 500);
    index++;
    var index2 = data.indexOf('.', index + 500);
    index2++;
    var index3 = data.indexOf('.', index2 + 500);
    index3++;
    var index4 = data.indexOf('.', index3 + 500);
    index4++;


      if(index3 === 0)
      {
        var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data.substring(0, index)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index+1, index2)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index2+1, data.length)}`})
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
      }else{

      if(index4 === 0)
      {
        var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data.substring(0, index)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index+1, index2)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index2+1, index3)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index3+1, data.length)}`},)
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
      }else{


      var embed = new Discord.MessageEmbed().setColor("#FFFFFF");
        console.log(index3);
        console.log(index4);
        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data.substring(0, index)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index+1, index2)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index2+1, index3)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index3+1, index4)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index4+1, data.length)}`})
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
      }
      }
  }else{
  var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data}`})
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
  }       
    return message.channel.send(embed);
}










        var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle("Here is what I found:")
            .addFields({name: `Type the guide number to display the guide; anything else to not.`, value: `${str}`})
            .setFooter(`Xbow Guide Bot ${version} • Guide Search`);
            
message.channel.send(embed);



var g;
 
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 15000 });
        console.log(collector)
        collector.on('end', collected => {
                return;});
        collector.on('collect', message => {
          if(message.content > foundArr.length)
          collector.stop();
          if(!(message.content <= foundArr.length || message.content > 0))
          {
              
            collector.stop();
          }
            g = message.content;
            console.log(foundArr);
            str = foundArr[g-1];
            console.log(str);
            fs.readdirSync(guideFolder).forEach(file => {
      console.log(file);
        if(file.toLowerCase() === str.concat('.txt').toLowerCase())
        {
          name = file;
          data = fs.readFileSync(guideFolder + '/' + file, 'utf8');
        }

});


      if(data == undefined)
{return message.inlineReply(`${str.replace('.txt','')} guide was not found.`);}
  if(data.length > 1024)
  {
    var index = data.indexOf('.', 500);
    index++;
    var index2 = data.indexOf('.', index + 500);
    index2++;
    var index3 = data.indexOf('.', index2 + 500);
    index3++;
    var index4 = data.indexOf('.', index3 + 500);
    index4++;


      if(index3 === 0)
      {
        var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data.substring(0, index)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index+1, index2)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index2+1, data.length)}`})
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
      }else{

      if(index4 === 0)
      {
        var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data.substring(0, index)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index+1, index2)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index2+1, index3)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index3+1, data.length)}`},)
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
      }else{


      var embed = new Discord.MessageEmbed().setColor("#FFFFFF");
        console.log(index3);
        console.log(index4);
        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data.substring(0, index)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index+1, index2)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index2+1, index3)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index3+1, index4)}`},
            {name: `\n\n‌‌‌‌‌`, value: `${data.substring(index4+1, data.length)}`})
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
      }
      }
  }else{
  var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data}`})
            .setFooter(`Xbow Guide Bot ${version} • Matchup Guide`);
  }       
    return message.channel.send(embed);
    collector.stop();

        });


//console.log(g);


var name;
/////////////////////////////////////////////////////////////








}

        
});


function indexInput()
{
    Client.on('message', async message => {
	if (message.author.bot) return;
	
	return message.content;
    });
}


Client.login(process.env.token);
