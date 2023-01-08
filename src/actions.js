import { redirect } from "react-router-dom";

const URL = "https://cheeseapp-api.onrender.com/"

//request is the form data response
const createAction = async({request}) => {
    const formData = await request.formData()
    const newCheese = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("country")
    }
    //send a new person to our api.
    await fetch(URL + "cheeses", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCheese)
    })
    return redirect("/")
}

export default createAction