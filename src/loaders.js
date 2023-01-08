const URL = "https://cheeseapp-api.onrender.com/"

const cheesesLoader = async() => {
    const response = await fetch(URL + "cheeses")
    const cheeses = await response.json()
    return cheeses
    console.log(cheeses)
}

export default cheesesLoader