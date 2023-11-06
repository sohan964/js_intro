const loadQuate = () => {
    // https://kanye.rest/
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => diplayQuate(data))
}

const diplayQuate = (quote) => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText =quote.quote;
}