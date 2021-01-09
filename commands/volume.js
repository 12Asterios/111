exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не в голосовом канале !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В данный момент музыка не проигрывается !`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Пожалуйста, укажите номер !`);

    if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) return message.channel.send(`${client.emotes.error} - Пожалуйста введите правильное число (между 1 и 100) !`);

    if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`${client.emotes.error} - Пожалуйста, укажите верное число !`);

    client.player.setVolume(message, parseInt(args[0]));

    message.channel.send(`${client.emotes.success} - Громкость устоновлена на **${args.join(" ")}%** !`);

};
