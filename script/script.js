const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'


const opts = { crossDomain: true}




function obtenerPeople(id){
    return new Promise((resolve, reject) => {
        const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
            .get(lukeUrl, opts,(data) => resolve(data))
            .fail(() => reject(id));

    })
}

var promesas = [1, 2, 3, 4, 5, 6, 7];
promesas = promesas.map (id => obtenerPeople(id));

function onError(id){
    console.log(`Ocurrio un error con el id: ${id}`);
}

Promise
    .all(promesas)
    .then(person => console.log(person))
    .catch(onError);

// obtenerPeople(1)
//     .then(person =>{
//         console.log(`El personaje es...  ${person.name}`);
//         return obtenerPeople(2);
//     })
//     .then(person =>{
//         console.log(`El personaje es...  ${person.name}`);
//         return obtenerPeople(3);
//     })
//     .then(person =>{
//         console.log(`El personaje es...  ${person.name}`);
//         return obtenerPeople(4);
//     })
//     .then(person =>{
//         console.log(`El personaje es...  ${person.name}`);
//         return obtenerPeople(5);
//     })
//     .then(person =>{
//         console.log(`El personaje es...  ${person.name}`);
//         return obtenerPeople(6);
//     })
//     .then(person =>{
//         console.log(`El personaje es...  ${person.name}`);
//     })
//     .catch(onerror);
