console.log(customers.results[0].picture.thumbnail);
let buildArea = document.querySelector('body');

function buildDirectory(){
    for (i=0;i<customers.results.length;i++){
        let div = document.createElement('div');
        buildArea.appendChild(div);
        let content = `
            <img src=${customers.results[i].picture.thumbnail} alt="Image">
            <h2 class="name">${customers.results[i].name.title} ${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
            <h3 class="email">test</h3>
            <h4 class="street_address">test</h4>
            <h4 class="location">test</h4>
            <h4 class="phone">test</h4>
            <h5 class="social">test</h5>
        `;

    div.innerHTML = content;
    }
}

buildDirectory();
