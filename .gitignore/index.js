const Discord = require('discord.js');
const bot = new Discord.Client();


//Toutes les actions à faire quand le bot se connecte
bot.on("ready", function () {
    console.log("Mon bot a etait lancer manuellement");
})

bot.on("ready", () => {
  bot.user.setActivity("Manger des sushis empoisoner dans une creche", {type: 'PLAYING'})
})

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === '!puissance') {
        message.channel.send(`ArRette jé tReau de Puisanse daN Ma Forse Fé pa le Malin DeVan Moua Baise lEs yEus`)
    }
  }) 

  bot.on('message', message => {
    if (message.content === '!stop') {
        message.channel.send(`desoler ${message.author.username} je ne voulais pas vous derranger ni vous enkikiner ou meme vous importuné`)
    }
  });

  bot.on('message', message => {
    if (message.content === '!hero') {
        message.channel.send("Mon hero favori c'est super brebie elle et trop forte et en plus elle donne a manger au ourson des egouts")
    }
  });

  bot.on('message', message => {
    if (message.content === '!manga') {
        message.channel.send("Mon perso favori dans naruto c'est Bakugo")
    }
  });

  bot.on('message', message => {
    if (message.content === '!FBI') {
        message.channel.send("https://tenor.com/view/llamas-when-you-got-gum-gif-4793964")
    }
  });

  bot.on('message', message => {
    if (message.content === '!dab') {
        message.channel.send("https://tenor.com/view/squidward-dab-100-lit-gif-15118193")
    }
  });
  
  bot.on('message', message => {
    if (message.content === '!play') {
        message.channel.send("https://tenor.com/view/tf2-play-of-the-game-engineer-gif-15893435")
    }
  });

  bot.on('message', message => {
    if (message.content === '!trump') {
        message.channel.send("https://tenor.com/view/trump-america-president-donald-donald-trump-gif-5545457")
    }
  });

  bot.on('message', message => {
    if (message.content === '!trump') {
        message.channel.send("https://tenor.com/view/trump-america-president-donald-donald-trump-gif-5545457")
    }
  });
