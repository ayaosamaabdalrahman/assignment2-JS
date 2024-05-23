let quote = document.getElementById('quote');
let author = document.getElementById('author');
let quotes = [
    {
        quote: " Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: " So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: " A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: " You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr.Seuss"
    },
    {
        quote: " You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: " Be the change that you wish to see in the world. ",
        author: "Mahatma Gandhi"
    },

    {
        quote: " If you tell the truth, you don't have to remember anything. ",
        author: "Mark Twain"
    },
    {
        quote: " Without music, life would be a mistake. ",
        author: "Friedrich Nietzsche"
    },
    {
        quote: " We accept the love we think we deserve. ",
        author: "Stephen Chbosky"
    },
    {
        quote: " Live as if you were to die tomorrow.Learn as if you were to live forever. ",
        author: "Mahatma Gandhi"
    }
];

let max = quotes.length - 1
function generateQuote() {
    let randIndex = Math.floor(Math.random() * (max - 0 + 1) + 0)
    console.log(quotes[randIndex].author)
    quote.innerHTML = "“" + quotes[randIndex].quote + "”";
    author.innerHTML = "--" + quotes[randIndex].author;
}

