import { createUrl } from "../../constants";

const createZoo = async(animal) => {
    try {
        await fetch(createUrl, {
            method: "post",
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(animal)
        });
        // const json = await res.json();

        setName('');
        setSpecie('');
    } catch(err) {
        setAlert({show: true, success:false, message: `Error ${err}`});
        setTimeout(() => {
            setAlert({show: false});
        }, 3000);
    }
}

export default createZoo;