async function obtenerApiDataAsync() {
    try {
        const data = await fetch("https://api.chucknorris.io/jokes/random");
        const json = await data.json();

        console.log("Este es el json: ", json);
    } catch (error) {
        console.log("Hubo un error: ", error)
    } finally {
        console.log("Fetch finalizado")
    }
}
obtenerApiDataAsync();
