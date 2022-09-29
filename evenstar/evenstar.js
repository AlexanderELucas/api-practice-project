class RingAttributes {
    //character
    getRingCharacter = async (characterID) => {
        const response = await fetch(`https://the-one-api.dev/v2/character/${characterID}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer CmkXiu-kKWUMkd845GoG'
            }
        });
        const ringCharacters = await response.json();
        //select name from array
        const characterName = ringCharacters.docs[0].name;
        
        //console.log('- ' + characterName);


        //at character to display
        const uiQuoteLocation = document.getElementById('quote-location');
        
    
        //add new character to UI

        const characterText = document.createElement('div');
        characterText.setAttribute('id', 'character');
        characterText.setAttribute('class', 'quote order-2 align-self-end me-4');
        characterText.innerHTML =`
            <h3>- ${characterName}</h3>
            `;
        uiQuoteLocation.appendChild(characterText);
        

        

    }

    //movie
    getRingMovie = async (movieID) => {
        const response = await fetch(`https://the-one-api.dev/v2/movie/${movieID}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer CmkXiu-kKWUMkd845GoG'
            }
        });
        const ringMovie = await response.json();
        //select name from array
        const movieTitle = ringMovie.docs[0].name;
        
        //console.log('from ' + movieTitle);

        //add movie to UI
        const uiQuoteLocation = document.getElementById('quote-location');
        
    
        //add new character to UI

        const movieText = document.createElement('div');
        movieText.setAttribute('id', 'movie');
        movieText.setAttribute('class', 'quote order-3 align-self-center fst-italic');
        movieText.innerHTML =`
            <h6>from ${movieTitle}</h6>
            `;
        uiQuoteLocation.appendChild(movieText);
    }
}



//event listener for quote button  elem id ring-btn
document.getElementById('ring-btn').addEventListener('click', async function(e) {
    const attributes = new RingAttributes;
    const response = await fetch('https://the-one-api.dev/v2/quote', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer CmkXiu-kKWUMkd845GoG'
      }
    });
    //console.log(response);

    const ringQuotes = await response.json();
    //select random quote
    //console.log(ringQuotes.docs);
    const quote = ringQuotes.docs[Math.floor(Math.random() * ringQuotes.docs.length)];
    const quoteCharacterID = quote.character;
    const quoteDialog = quote.dialog.toUpperCase();
    const quoteMovieID = quote.movie;
    //find quote div and clear for new quote
    const uiQuoteLocation = document.getElementById('quote-location');
        if (uiQuoteLocation.contains(document.getElementById('quote'))) {
            while (uiQuoteLocation.firstChild) {
                uiQuoteLocation.removeChild(uiQuoteLocation.firstChild);
            }
        }
    
    //add new quote to UI

    const quoteText = document.createElement('div');
    quoteText.setAttribute('id', 'quote');
    quoteText.setAttribute('class', 'quote d-flex order-1 align-self-center');
    quoteText.innerHTML =`
        <h1>${quoteDialog}</h1>
        `;
    uiQuoteLocation.appendChild(quoteText);




    //console.log(quote);
    //console.log(`characterID:${quoteCharacterID} quote:${quoteDialog} movie:${quoteMovieID}`);
    attributes.getRingCharacter(quoteCharacterID);
    attributes.getRingMovie(quoteMovieID);

    //Display quote character and movie in console
    //console.log(`"${quoteDialog}" characterID:${quoteCharacterID} quote:${quoteDialog} movie:${quoteMovieID}`);
    
    
    
    
    
    e.preventDefault();
})