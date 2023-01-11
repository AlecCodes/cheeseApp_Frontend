import {useLoaderData, Form} from "react-router-dom"

function Show(props){
    const cheese = useLoaderData();
    return <div>
        <h1>{cheese.name}</h1>
        <img src={cheese.image} alt={cheese.image}/>
        <h2>{cheese.country}</h2>
        <Form action = {`/update/${cheese._id}`} method="post">
            <input type = 'input' name='name' placeholder='cheese name'/>
            <input type = 'input' name='image' placeholder='img url'/>
            <input type = 'input' name='country' placeholder='country of origin'/>
            <input type = 'submit' value={`update ${cheese.name}`}/>
        </Form>
        <Form action ={`/delete/${cheese._id}`} method ="post">
            <input type="submit" value={`delete ${cheese.name}`}/>
        </Form>
    </div>
}

export default Show