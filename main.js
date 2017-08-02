console.log(customers.results[0].picture.thumbnail);
let buildArea = document.querySelector('section');

function buildDirectory(){
    for (i=0;i<customers.results.length;i++){
        let div = document.createElement('div');
        div.setAttribute('class','person')
        buildArea.appendChild(div);
        let content = `
            <img src=${customers.results[i].picture.large} alt="Image">
            <h2 class="name">${customers.results[i].name.title} ${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
            <h3 class="email">${customers.results[i].email}</h3>
            <h4 class="street_address">${customers.results[i].location.street}</h4>
            <h4 class="location">${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}</h4>
            <h4 class="phone">${customers.results[i].phone}</h4>
            <h5 class="social">test</h5>
        `;

    div.innerHTML = content;
    }
}

buildDirectory();
