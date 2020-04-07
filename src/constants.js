let port = 44318;
let baseUrl = `https://localhost:${port}`;

module.exports = {
    fetchTableUrl: `${baseUrl}/`,
    deleteUrl: ({ id }) => `${baseUrl}/${id}`,
    bulkUrl: `${baseUrl}/zoo/read`,
    createUrl: `${baseUrl}/zoo/add`,
    editUrl: ({ id }) => `${baseUrl}/zoo/update/${id}`
}