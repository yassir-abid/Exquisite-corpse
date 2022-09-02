const data = require('../../data/parts.json');

const randomIndex = (max) => Math.floor(Math.random() * max);

const randomInList = (list) => list[randomIndex(list.length)];

const cadex = {
    randomName() {
        return randomInList(data.names);
    },
    randomAdjective() {
        return randomInList(data.adjectives);
    },
    randomVerb() {
        return randomInList(data.verbs);
    },
    randomComplement() {
        return randomInList(data.complements);
    },
    generate() {
        return {
            name: this.randomName(),
            adjective: this.randomAdjective(),
            verb: this.randomVerb(),
            complement: this.randomComplement(),
            glue() {
                return `${this.name} ${this.adjective} ${this.verb} ${this.complement}`;
            },
        };
    },
    add(update) {
        Object.keys(update).forEach((propName) => {
            if (data[`${propName}s`]) {
                if (!data[`${propName}s`].includes(update[propName])) {
                    data[`${propName}s`].push(update[propName]);
                }
            }
        });
    },
};

module.exports = { cadex, randomIndex, randomInList };
