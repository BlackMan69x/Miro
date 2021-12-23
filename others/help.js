const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://images-ext-1.discordapp.net/external/ywW90Qq3ButrY58SXGKsfdaHJ5Fl3fAX-jCt66kxq2k/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/807350534901071932/323c09ffbcd4777d8b5d14ac80df56a5.png `)
    .setTitle(`**List All Commands**`)
    .setDescription(`
**User Commands**
\`invite\` - \`support\` - \`about\`
\`ping\` - \`prefix\` - \`uptime\`
\`invites\` - \`sug\` - \`roleuser\`

**Music Commands**
\`play\` - \`skip\` - \`skipto\`
\`stop\` - \`volume\` - \`nowplaying\`
\`shuffle\` - \`search\` - \`resume\`
\`remove\` - \`queue\` - \`loop\`
\`lyrics\` - \`radio\`

**Moderation Commands**
\`ban\` - \`unban\` - \`nick\`
\`roleadd\` - \`roleremove\` - \`vkick\`
\`clear\` - \`close\`
\`open\`

**Gif Commands**
\`boy\` - \`girl\` - \`couple\`
\`sad\` - \`cartoon\` - \`anime\`
\`neon\`

**Fun Commands**
\`kiss\` - \`slap\` - \`hug\`


**Links**
[Support](https://discord.gg/progresshome)
[Invite](https://discord.com/api/oauth2/authorize?client_id=807350534901071932&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
