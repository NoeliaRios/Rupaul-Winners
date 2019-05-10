function fetchParticipantes(url) {

    fetch(url)
        .then(res => res.json()) //interprete los datos como json
        .then(data => {
            const ul = document.querySelector('ul#listado-participantes');
            let lis = '';

            for (let i = 0; i < data.lenght; i++) {
                lis +=
                    `<li>
                    <img src="${data[i].image_url}"/>
                    <p>${data[i].name}</>
                    <p>${data[i].winner ? 'Si' : 'No'}</p>
                    </li>`;
            }
            ul.innerHTML = lis
        })
    //lis va a  tener un string con cada uno de esos elementos y esos li los guardo dentro de los ul
}

document.getElementById('all').onclick = function () {
    fetchParticipantes('http://www.nokeynoshade.party/api/queens/all');
}

document.getElementById('winners').onclick = function () {
    fetchParticipantes('http://www.nokeynoshade.party/api/queens/winners');
}
