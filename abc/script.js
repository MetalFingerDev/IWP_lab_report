class Card extends HTMLElement {
    connectedCallback() {
        const front = this.getAttribute("front");
        const para = this.getAttribute("para");
        const image = this.getAttribute("image");
        this.innerHTML = `
            <section class="maincontainer">
                <div class="thecard">
                    <div class="thefront">
                        <h1>${front}</h1>
                    </div>
                    <div class="theback">
                        <h1>${para}</h1>
                        <img src="${image}" alt="${para}" />
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define("flip-card", Card);

// DATA: A -> Z words and optional image queries
const alphabet = [
    { letter: 'A', word: 'Apple' },
    { letter: 'B', word: 'Ball' },
    { letter: 'C', word: 'Cat' },
    { letter: 'D', word: 'Dog' },
    { letter: 'E', word: 'Elephant' },
    { letter: 'F', word: 'Frog' },
    { letter: 'G', word: 'Giraffe' },
    { letter: 'H', word: 'House' },
    { letter: 'I', word: 'Ice' },
    { letter: 'J', word: 'Jaguar' },
    { letter: 'K', word: 'Kite' },
    { letter: 'L', word: 'Lion' },
    { letter: 'M', word: 'Monkey' },
    { letter: 'N', word: 'Nest' },
    { letter: 'O', word: 'Orange' },
    { letter: 'P', word: 'Pig' },
    { letter: 'Q', word: 'Queen' },
    { letter: 'R', word: 'Rabbit' },
    { letter: 'S', word: 'Sun' },
    { letter: 'T', word: 'Tiger' },
    { letter: 'U', word: 'Umbrella' },
    { letter: 'V', word: 'Violin' },
    { letter: 'W', word: 'Whale' },
    { letter: 'X', word: 'Xylophone' },
    { letter: 'Y', word: 'Yak' },
    { letter: 'Z', word: 'Zebra' },
];

// Populate the grid with flip-cards using the alphabet data
function buildAlphabetGrid() {
    const grid = document.querySelector('.grid');
    if (!grid) return;
    alphabet.forEach((entry) => {
        const el = document.createElement('flip-card');
        el.setAttribute('front', entry.letter);
        el.setAttribute('para', entry.word);
        el.setAttribute('image', `./public/${entry.letter.toLowerCase()}.jpg`);
        grid.appendChild(el);
    });
}

document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', buildAlphabetGrid) : buildAlphabetGrid();