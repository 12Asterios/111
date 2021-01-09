exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'ORANGE',
            author: { name: 'Help pannel' },
            footer: { text: 'https://vk.com/clanstr8' },
            fields: [
                { name: 'Bot', value: '`ping`,`partner`' },
                { name: 'Music', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`' },
            ],
            timestamp: new Date(),
            description: `Hi, im bot Asterio! I come to assist you.`,
        },
    });

};
