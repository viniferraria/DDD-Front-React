import React from 'react';
import { bulkUrl } from '../../constants';

export default function FileComponent() {
    let ref = React.createRef();

    async function handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append("file", ref.current.files[0]);
        try {
            const res = await fetch(bulkUrl, {
                method: 'POST',
                body: formData,
            });
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Choose file
                    <input id="fileInput" type="file" ref={ref}/>
                </label>
                <button type="submit">Send</button>
                </form>
        </div>
    )

}