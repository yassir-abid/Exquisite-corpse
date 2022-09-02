/* eslint-disable no-restricted-globals */
const app = {
    baseUrl: `${location.origin}`,

    container: document.querySelector('main'),

    init: async () => {
        await app.fetchCadex();
    },

    fetchCadex: async () => {
        try {
            const response = await fetch(`${app.baseUrl}/cadex${location.search}`);
            const phrase = await response.json();
            app.displaySentence(phrase);
        } catch (error) {
            console.error(error);
        }
    },

    displaySentence: (phrase) => {
        app.clearWords();
        const words = phrase.split(' ');
        const spans = words.map(app.createWord);
        app.container.append(...spans);
    },

    createWord: (word, index) => {
        const span = document.createElement('span');
        span.classList.add('word');
        span.textContent = word;
        span.style.animationDelay = `${(index / 4)}s`;
        return span;
    },

    clearWords: () => {
        const words = app.container.querySelectorAll('.word');
        words.forEach((word) => word.remove());
    },
};

document.addEventListener('DOMContentLoaded', app.init);
