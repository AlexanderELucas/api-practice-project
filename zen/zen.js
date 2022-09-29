document.getElementById('zen-btn').addEventListener('click', async function(e) {
    const response = await fetch('https://zenquotes.io/api/random/');
    const data = await response.json();
    console.log(data);
    const zQuote = data[0].q;
    const zAuthor = data[0].a;
    console.log(zQuote);
    console.log(zAuthor);
    
    //Zen Div
    const zenQuote = document.getElementById('zen-quote');
    
    //remove previous quote if exists
    if (zenQuote.contains(document.getElementById('quote-div'))) {
        while (zenQuote.firstChild) {
            zenQuote.removeChild(zenQuote.firstChild);
        }
        
        //zenQuote.removeChild('quote-div');
    }


    //create dom element
    
    const quoteText = document.createElement('div');
    quoteText.setAttribute('id', 'quote-div');
    quoteText.innerHTML = `
        <h1>${zQuote}</h1>
        <h5>-${zAuthor}</h5>
        `;

    zenQuote.appendChild(quoteText);

})