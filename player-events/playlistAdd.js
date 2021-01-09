module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} добавлена в очередь (**${playlist.items.length}** songs) !`);

};