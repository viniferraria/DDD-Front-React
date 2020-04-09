import { deleteUrl } from '../../constants';

export const deleteById = async ({ id }) => {
    try {
        const res = await fetch(deleteUrl({ id }), {
            method: 'delete'
        });
        console.log(await res.json());
    } catch (err) {
        console.log(err);
    }
};