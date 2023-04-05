const renderSection = (sectionName, sectionId, piatti) => {
    const sectionTitleElement = document.querySelectorAll(`#${sectionId} h3`)[0];
    sectionTitleElement.innerText = sectionName;

    const filteredPiatti = piatti.filter(x => x.category === sectionId);
    const sectionElement = document.getElementById(sectionId);

    for (let piatto of filteredPiatti) {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');

        if (!piatto.available) {
            cardContainer.style.opacity = '50%';
        }

        cardContainer.innerHTML = `
            <div class="card">
                <img src="${piatto.imageUrl}" class="card-img-top" alt="${piatto.title}" />
                <div class="card-body">
                <h5 class="card-title">${piatto.title}</h5>
                <p class="card-text">${piatto.description}</p>
                <span class="value">${piatto.price}€</span>
                </div>
            </div>
        `;

        sectionElement.appendChild(cardContainer);
    }
}

const renderMenu = (piatti) => {
    renderSection('Suggeriti', 'dolci', piatti);

    const loadingDiv = document.getElementById('loading');
    loadingDiv.style.display = 'none';

    const menuDiv = document.getElementById('menu');
    menuDiv.style.display = 'block';
}

fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-IX/piatti')
    .then(res => res.json())
    .then(res => renderMenu(res))
    .catch(err => console.log('errore'));
