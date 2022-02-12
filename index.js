//Copyright RinasSam 2022
//Copying the code and using it in your own bots is prohibited.

const express = require('express');
const app = express();
const fs = require('fs');
const guideFolder = './Xbow-Matchup-Guides/Guides';
var stopc = 0;
const port = 3000;
function replaceAll(str, find, replace) {
  var escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  return str.replace(new RegExp(escapedFind, 'g'), replace);
}

function search_word(text, word){
    
    var x = 0, y=0;
   
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   if(x === 0)
   {
     return false;
   }
   return true;
}


app.get('/', (req, res) => res.send('Hello Khaldoon'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
//bot code
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function convertHTML(str) {
  return str.replace(/"&apos;/g,"'")
    .replace(/&lt;/g,"<")
    .replace(/&gt;/g,">")
    .replace(/&quot;/g,"'")
    .replace(/&amp;/g,"&");
}

if (!String.prototype.decodeHTML) {
  String.prototype.decodeHTML = function () {
    return this.replace(/&apos;/g, "'")
               .replace(/&quot;/g, '"')
               .replace(/&gt;/g, '>')
               .replace(/&lt;/g, '<')
               .replace(/&amp;/g, '&');
  };
}

var fetchUrl = require("fetch").fetchUrl;

const Discord = require('discord.js');

const Client = new Discord.Client();

const prefix = 'g!'


const queue = new Map();

const ytdl = require("ytdl-core");
require("./ExMessage");

Client.once('ready', () => {
  console.log('guide is online!');
  Client.user.setActivity('g!help for help', { type: 'PLAYING' })
});












Client.on('message', async message => {

  if(message.content.startsWith("G!"))
  {
    message.inlineReply("Please use 'g!'.\n");
  }
 if (!message.content.startsWith(prefix) || message.author.bot) return;

  args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();


  if(command == "help")
  {
    if(message.channel.id === '839839651627925544' || message.channel.id === '839927914325475338')
    {
      var embed = new Discord.MessageEmbed().setColor("#FF0000");

        embed
            .setTitle("DON\'T USE THE BOT IN THESE CHANNELS!")
            .addFields(
                { name: 'WARNING', value: 'Please, don\'t use the bot in these channels.\nThis action will be reported to the moderators. '}
            )
            .setFooter('Xbow Guide Bot v0.4 Beta • Warning');
      message.inlineReply(embed);
      Client.channels.cache.get('800342566041944064').send('Moderators!\n\nThis bot was used in **<#' + message.channel.id + '>** by <@' + message.author.id + '>.');
      return;
    }
    
var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle("Command List:")
            .addFields(
                { name: '**g!help**', value: 'Shows a list of all the commands.\n\n' },
                { name: '**g!invite**', value: 'Get the invite link for this bot.\n\n' },
                { name: '**g!find {what to find here}**', value: 'Finds a guide.' },
                {name: '**g!list**', value: 'Lists available guides\n\n'},
                { name: '**g!license**', value: 'Shows the license that the guides are licensed by.\n\n' },
            )
            .setFooter('Xbow Guide Bot v0.4 Beta • Help Menu');
 
  
  message.channel.send(embed);
  }

  if(command == "invite")
  {
    var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle("Invite Link:")
            .addFields(
                { name: '**Invite me with this link!**', value: '[Click Here!](https://discord.com/api/oauth2/authorize?client_id=839764015567470603&permissions=511040&scope=bot)' }
            )
            .setFooter('Xbow Guide Bot v0.4 Beta • Invite Link');
      message.channel.send(embed);
  }

  if(command == 'list')
  {
    if(message.channel.id === '839839651627925544' || message.channel.id === '839927914325475338')
    {
      var embed = new Discord.MessageEmbed().setColor("#FF0000");

        embed
            .setTitle("DON\'T USE THE BOT IN THESE CHANNELS!")
            .addFields(
                { name: 'WARNING', value: 'Please, don\'t use the bot in these channels.\nThis action will be reported to the moderators. '}
            )
            .setFooter('Xbow Guide Bot v0.4 Beta • Warning');
      message.inlineReply(embed);
      Client.channels.cache.get('800342566041944064').send('Moderators!\n\nThis bot was used in **<#' + message.channel.id + '>** by <@' + message.author.id + '>.');
      return;
    }
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
            .setFooter('Xbow Guide Bot v0.4 Beta • Guide List');
            
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
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
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
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
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
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
      }
      }
  }else{
  var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data}`})
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
  }       
    return message.channel.send(embed);
    collector.stop();

        });
    return;
  }

  if(command == 'guide')
  {


    if(message.channel.id === '839839651627925544' || message.channel.id === '839927914325475338')
    {
      var embed = new Discord.MessageEmbed().setColor("#FF0000");

        embed
            .setTitle("DON\'T USE THE BOT IN THESE CHANNELS!")
            .addFields(
                { name: 'WARNING', value: 'Please, don\'t use the bot in these channels.\nThis action will be reported to the moderators. '}
            )
            .setFooter('Xbow Guide Bot v0.4 Beta • Warning');
      message.inlineReply(embed);
      Client.channels.cache.get('800342566041944064').send('Moderators!\n\nThis bot was used in **<#' + message.channel.id + '>** by <@' + message.author.id + '>.');
      return;
    }

var embed = new Discord.MessageEmbed().setColor("#FF0000");

        embed
            .setTitle("WARNING: DEPRECATED COMMAND")
            .addFields(
                { name: 'WARNING', value: 'The `g!guide` has been deprecated as of v0.4.\nPlease use `g!find`.\n'}
            )
            .setFooter('Xbow Guide Bot v0.4 Beta • Warning');
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
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
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
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
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
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
      }
      }
  }else{
  var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data}`})
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
  }       
    return message.channel.send(embed);

  }









if(command === "find")
{
  if(message.channel.id === '839839651627925544' || message.channel.id === '839927914325475338')
    {
      var embed = new Discord.MessageEmbed().setColor("#FF0000");

        embed
            .setTitle("DON\'T USE THE BOT IN THESE CHANNELS!")
            .addFields(
                { name: 'WARNING', value: 'Please, don\'t use the bot in these channels.\nThis action will be reported to the moderators. '}
            )
            .setFooter('Xbow Guide Bot v0.4 Beta • Warning');
      message.inlineReply(embed);
      Client.channels.cache.get('800342566041944064').send('Moderators!\n\nThis bot was used in **<#' + message.channel.id + '>** by <@' + message.author.id + '>.');
      return;
    }

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
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
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
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
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
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
      }
      }
  }else{
  var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data}`})
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
  }       
    return message.channel.send(embed);
}










        var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle("Here is what I found:")
            .addFields({name: `Type the guide number to display the guide; anything else to not.`, value: `${str}`})
            .setFooter('Xbow Guide Bot v0.4 Beta • Guide Search');
            
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
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
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
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
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
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
      }
      }
  }else{
  var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle(name.replace('.txt', ''))
            .addFields({name: `\n\n‌‌‌‌‌`, value: `${data}`})
            .setFooter('Xbow Guide Bot v0.4 Beta • Matchup Guide');
  }       
    return message.channel.send(embed);
    collector.stop();

        });


//console.log(g);


var name;
/////////////////////////////////////////////////////////////








}

if(command === 'license')
{
  if(message.channel.id === '839839651627925544' || message.channel.id === '839927914325475338')
    {
      var embed = new Discord.MessageEmbed().setColor("#FF0000");

        embed
            .setTitle("DON\'T USE THE BOT IN THESE CHANNELS!")
            .addFields(
                { name: 'WARNING', value: 'Please, don\'t use the bot in these channels.\nThis action will be reported to the moderators. '}
            )
            .setFooter('Xbow Guide Bot v0.4 Beta • Warning');
      message.inlineReply(embed);
      Client.channels.cache.get('800342566041944064').send('Moderators!\n\nThis bot was used in **<#' + message.channel.id + '>** by <@' + message.author.id + '>.');
      return;
    }

  var embed = new Discord.MessageEmbed().setColor("#FFFFFF");

        embed
            .setTitle('License')
            .addFields(
              {name: `\n\n‌‌‌‌‌`, value: `The Xbow matchup guides are licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License.](https://creativecommons.org/licenses/by-nc/4.0/)`})
            .setFooter('Xbow Guide Bot v0.4 Beta • License');
  message.inlineReply(embed);
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