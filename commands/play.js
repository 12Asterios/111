exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не в голосовом канале !`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Укажите название песни !`);

    client.player.play(message, args.join(" "));

};
