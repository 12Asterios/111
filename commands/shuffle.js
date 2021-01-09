exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не в голосовом канале !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В данный момент нет музыки !`);

    client.player.shuffle(message);

    return message.channel.send(`${client.emotes.success} - Queue shuffled **${client.player.getQueue(message).tracks.length}** song(s) !`);

};
