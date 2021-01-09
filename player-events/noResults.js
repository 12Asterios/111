module.exports = (client, message, query) => {

    message.channel.send(`${client.emotes.error} - Нет результатов, найденных на YouTube ${query} !`);

};