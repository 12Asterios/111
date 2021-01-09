module.exports = (client, error, message) => {

    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - На этом сервере не воспроизводится музыка !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Вы не подключены ни к одному голосовому каналу !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Я не могу присоединиться к вашему голосовому каналу, пожалуйста, проверьте мои разрешения !`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Something went wrong ... Error : ${error}`);
    };

};
