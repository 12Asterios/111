exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'ORANGE',
            author: { name: 'Сollaboration' },
            footer: { text: 'Made by Aerume' },
            fields: [
                { name: 'STR8', value: '`-> https://vk.com/clanstr8`' },
                { name: 'Bench', value: '`-> https://vk.com/bench_so2`' },
                { name: 'Resistance Concepts', value: '`-> https://vk.com/rctff`' },
            ],
            timestamp: new Date(),
            description: `Sup, our partners will be shown here.`,
        },
    });

};
