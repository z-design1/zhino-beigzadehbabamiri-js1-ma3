
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b2155ef534e549999c191fd6c0f2a5b2";
const games = document.querySelector('.games');
const loading = document.querySelector('.loading');

fetch(url);
async function getDate() {
    try {
        const data = await fetch(url);
        const response = await data.json();
        const results = response.results;
        for (let i = 0; i < results.length; i++) {
            console.log(results[i])
            if (i < 8) {
                games.innerHTML += `
                <h1>Name: ${results[i].name}</h1>
                <p>Rating: ${results[i].rating}</p>
                <p>Tags: ${results[i].tags.length}</p>
                `
            }
        }
    }
    catch (error) {
        console.log(error, "Cant get requestet data")
    }
    finally {
        loading.innerHTML = "";
    }
}
getDate()

