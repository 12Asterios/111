exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не в голосовом канале !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В данный момент нет музыки !`);

    client.player.resume(message);

    message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} **возобновлен** !`);

};
