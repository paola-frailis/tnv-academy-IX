
const renderSection = (sectionName, sectionId, piatti) => {
    
    const sectionTitleElement = document.querySelectorAll(`#${sectionId} h2`)[0];    
    sectionTitleElement.innerText = sectionName;
    
    const filteredDolci = piatti.filter(x => x.category === sectionId).splice(0,3);
    const sectionElement= document.getElementById(sectionId);

    for(let dolce of filteredDolci){
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');

        cardContainer.innerHTML= 
        `<div class="col-12 col-sm-6 col-md-4 py-2">         
            <div class="card shadow">
              <img src="${dolce.imageUrl}" class="card-img-top" alt="${dolce.title}" />
              <div class="card-body">
                <h5 class="card-title">${dolce.title}  ${dolce.price}€</h5>                
              </div>
            </div>          
        </div>`;
        
        sectionElement.appendChild(cardContainer);
    }
}

const renderMenu = (piatti) => {
    renderSection('Dolci Consigliati:', 'dolci', piatti);

    //const loadingDiv = document.getElementById('loading');
    //loadingDiv.style.display='none';

    const menuDiv = document.getElementById('menu');
    menuDiv.style.display='block';
}




fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-IX/piatti/')
    .then(res => res.json())
    .then(res => renderMenu(res))
    .catch(err => console.log('error')) 