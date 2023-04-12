const renderSectionConsigliati = (sectionName, sectionId, piatti) => {
    const sectionTitleElement = document.querySelectorAll(`#${sectionId} h3`)[0];
    sectionTitleElement.innerText = sectionName;

    const sectionElement = document.getElementById(sectionId);

        

        function generateRandomInteger(min,max) {
            return Math.floor(Math.random() * max) + min;
        }
        
        for(let i = 0; i < 3; i++){

        value = generateRandomInteger(1,12);

        

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');

        cardContainer.innerHTML=`
        <div class="card shadow" style="margin-top: 30px; margin-bottom: 50px">
            <img src="${piatti[value].imageUrl}" class="card-img-top" alt="${piatti[value].title}"/>
                    <div class="card-body">
                    <h5 class="card-title">${piatti[value].title} ${piatti[value].price}€</h5>
                      <p class="card-text">${piatti[value].description}</p>
                      <a href="" style="<button type="button" class="btn btn-dark">Aggiungi al carrello</button></a>
                    </div>

       `;

       sectionElement.appendChild(cardContainer);    

    }

    }



const renderConsigliati = (piatti) => {
    renderSectionConsigliati('Piatti consigliati','consigliati', piatti);
    }

    fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-IX/piatti')
    .then(res => res.json())
    .then(res => renderConsigliati(res))
    .catch(err => console.log('errore'));


    const renderSection = (sectionName, sectionId, piatti) => {
        const sectionTitleElement = document.querySelectorAll(`#${sectionId} h3`)[0];
        sectionTitleElement.innerText = sectionName;
        
        const filteredConsigliati = piatti.filter(x => x.category === sectionId)
        const sectionElement = document.getElementById(sectionId);
       
    
    
    
        for (let piatto of filteredConsigliati) {
    
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');
    
            
            cardContainer.innerHTML=`
            <div class="card shadow" style="margin-top: 30px; margin-bottom: 50px">
                <img src="${piatto.imageUrl}" class="card-img-top" alt="${piatto.title}"/>
                        <div class="card-body">
                        <h5 class="card-title">${piatto.title} ${piatto.price}€</h5>
                          <p class="card-text">${piatto.description}</p>
                          <a href="" style="<button type="button" class="btn btn-dark">Aggiungi al carrello</button></a>
                        </div>
    
           `;
    
           sectionElement.appendChild(cardContainer);
    
        }
    
    }
    
    const renderMenu = (piatti) => {
        renderSection('Antipasti','antipasti', piatti);
        }
    
    
    
        fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-IX/piatti')
        .then(res => res.json())
        .then(res => renderMenu(res))
        .catch(err => console.log('errore'));
    
