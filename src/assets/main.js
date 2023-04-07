
const API = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/'

const content = null || document.getElementById('content')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f9bd324edamsha81a5bea12dc0f0p151ed1jsn48ecda185639',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()

    return data
}

(async () => {
    try {
        const planetas = await fetchData(API)
        let view = `
        ${planetas.map(planeta => `
        <div class="group relative" >
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${planeta.imgSrc.img}" alt="${planeta.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${planeta.name}
                </h3>
            </div>
        </div >
        `).slice(0,8).join('')}`
        content.innerHTML = view
        
    } catch (error) {
        console.log(error)
    }
})();


// fetch('', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));