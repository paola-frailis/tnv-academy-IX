const renderSection = (sectionName, sectionId, piatti) => {

    const selectioTitleElement = document.querySelectorAll(`#${sectionId} h2`)[0];
    selectioTitleElement.innerText = sectionName;
    const filteredpiatti = piatti.filter(x => x.category === sectionId);
    const sectionElement = document.getElementById(sectionId);

    for(let piatto of filteredpiatti) {
        const cardContainer = document.createElement('div');

        cardContainer.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');

            cardContainer.innerHTML = `
            <div class="card shadow">
               <img src="${piatto.imageUrl} " class="card-img-top" alt="${piatto.title} "/>
               <div class="card-body">
                  <h5 class="card-title">${piatto.title} - ${piatto.price}€</h5>
                  <p class="card-text">
                     ${piatto.description} 
              </p>
            </div>
          </div>`;

        sectionElement.appendChild(cardContainer);
       }
}

const renderMenu = (piatti) => {
    renderSection('Dolci del giorno', 'dolci', piatti);                   
}

fetch('https://my-json-server.typicode.com/michelefenu/tnv-academy-IX/piatti/')
.then(res => res.json()) //trasforma la chiamata in json
.then(res => renderMenu(res)) //la trasferisc all'altro than che chiama la funzione renderMenu con argomento la restAPI
.catch(err => console.log('errore'));