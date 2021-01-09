module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} - Вы должны отправить действительное число от ** 1 ** до ** $ {track.length} **! `);
};