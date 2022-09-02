/* eslint-disable no-restricted-globals */
const app = {
    baseUrl: `${location.origin}`,

    container: document.querySelector('main'),

    init: async () => {
        await app.fetchCadex();
        document.querySelector('#again').addEventListener('click', app.fetchCadex);
        document.querySelector('.formOpen').addEventListener('click', app.showForm);
        document.querySelector('.formClose').addEventListener('click', app.hideForm);
        document.querySelector('.form').addEventListener('submit', app.postCadex);
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

    showForm: () => {
        document.querySelector('.formOpen').classList.add('is-hidden');
        document.querySelector('.form').classList.remove('is-hidden');
    },

    hideForm: () => {
        document.querySelector('.form').classList.add('is-hidden');
        document.querySelector('.formOpen').classList.remove('is-hidden');
    },

    postCadex: async (event) => {
        event.preventDefault();
        const json = {};
        for (let i = 0; i < 4; i += 1) {
            const input = event.target[i];
            if (input.value) {
                json[input.id] = input.value;
            }
        }
        try {
            const response = await fetch(`${app.baseUrl}/cadex`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(json),
            });
            const phrase = await response.json();
            app.displaySentence(phrase);
        } catch (error) {
            console.error(error);
        }
    },
};

document.addEventListener('DOMContentLoaded', app.init);
