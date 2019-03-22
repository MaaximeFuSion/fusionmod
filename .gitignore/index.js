const Discord = require("discord.js");

var bot = new Discord.Client();

const client = new Discord.Client();

var PREFIX = "/";

bot.on("ready", function() {
    bot.user.setGame("V1.1, .help");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "mod":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.username,
                title: 'mod',
                description: 'Commande non disponible',
                fields: [{
                    name: "Accès refusé",
                    value: "Accès requis : **MOD**",
                    inline: false
                }]
        }
        });
        break;
    }
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "modhelp":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.username,
                title: '/modhelp',
                description: 'Commande non disponible',
                fields: [{
                    name: "Accès refusé",
                    value: "Accès requis : **MOD**",
                    inline: false
                }]
        }
        });
        break;
    }
});


bot.login(process.env.TOKEN);
