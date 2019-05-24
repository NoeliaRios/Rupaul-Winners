function fetchParticipantes(url) {
    document.getElementById('loader').classList.add('show');

    fetch(`http://www.nokeynoshade.party/api/queens/${url}`)
        .then(res => res.json()) //interprete los datos como json
        .then(data => {
            const ul = document.querySelector('ul#listado-participantes');
            let lis = '';

            for (let i = 0; i < data.length; i++) {
                lis +=
                    `<li>
                    <img src="${data[i].image_url}"/>
                    <p>${data[i].name}</>
                    <p>${data[i].winner ? 'Si' : 'No'}</p>
                    </li>`;
            }

            document.getElementById('loader').classList.remove('show');
            ul.innerHTML = lis;
        });
    //lis va a  tener un string con cada uno de esos elementos y esos li los guardo dentro de los ul
}


document.getElementById('all').onclick = function () {
    fetchParticipantes('all');
}

document.getElementById('winners').onclick = function () {
    fetchParticipantes('winners');
}

fetchParticipantes('all');
