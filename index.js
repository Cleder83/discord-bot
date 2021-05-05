const Discord = require ("discord.js");

const Client = new Discord.Client;

const prefix = "!";








Client.on("ready", () => {
    

    console.log("bot opérationnel");
    
   
    
    
});





Client.on("guildMemberAdd", membre => {
    console.log( " a rejoint le serveur");
    membre.send("Tu as été mis en vérification attends stp");
    membre.roles.add("").then(mbr => {
        console.log("role attribué avec succès");

    }).catch(() => {
        console.log("le role n'a pas pu être attribué");


    });

    
   


});



Client.on("guildMemberRemove", membre => {


});

Client.on("message", message => {
    if(message.author.bot) {
    return;
    }
    

    // !bonjour
    if(message.content == prefix + "bonjour") {

        message.channel.send("bonjour bg comment ça va ?");
    }
    //!bonsoir
    if(message.content == prefix + "bonsoir") {

        message.channel.send("bonsoir bg et laves toi les dents avant de te coucher xD");
    }
    //!combien
    if(message.content == prefix + "combien") {

        message.channel.send("On est actuellement " + message.guild.memberCount);
    }

    
    // !nom

    if(message.content == prefix + "nom") {

        message.channel.send("tu t'appelles __" + message.author.username + "__ bg ;)");
    }
    if(message.content == "Pouletcraft") {

        message.channel.send("Bot non je dec");
    }

    // !dm

    if(message.content == prefix + "dm") {

        message.channel.send("Je crée un dm avec moi bg ;)");
        message.member.send("Message envoyé");
      
    }
    // !ytb

    if(message.content == prefix + "ytb") {

        message.channel.send("La chaine de CD Gaming est : https://www.youtube.com/channel/UCqvEjpJv4Aj95lrdW7_H90Q");
    }

    if(message.content == "ah ca y est t'es reveillé") {

        message.channel.send("oui j'étais defoncé");
    }

    

    // partie qui gère les insultes

    if(message.content.includes('fdp') || message.content.includes ('fils de pute') || message.content.includes ("Mdr") || message.content.includes ("ce chien") || message.content.includes ("chien") ){
        message.channel.send("ATTENTION! " + message.author.username + " Ton message a été supprimé tu as été donc mute");
        message.delete();
    }

    if(message.author.id == "535870177028472842") {

        message.delete();
        
    }

    
    

  




  
  

   
        
    


    
    
  
    
  


});







client.login(process.env.TOKEN);
Client.login("ODMyNTg2MDkzMTE4MzU3NTI1.YHl8OQ.9bIFeO3F399HaSs4e6H21qK3IiA");