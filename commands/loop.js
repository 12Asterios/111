exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не в голосовом канале !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В данный момент музыка не проигрывается !`);

    const repeatMode = client.player.getQueue(message).repeatMode;

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(`${client.emotes.success} - Repeat mode **disabled** !`);
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(`${client.emotes.success} - Repeat mode **enabled** !`);
    };

};
