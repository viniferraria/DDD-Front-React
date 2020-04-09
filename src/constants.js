let port = 44318;
let baseUrl = `https://localhost:${port}`;

module.exports = {
    bulkUrl: `${baseUrl}/zoo/read`,
    fetchTableUrl: `${baseUrl}/`,
    createUrl: `${baseUrl}/zoo/add`,
    deleteUrl: ({ id }) => `${baseUrl}/${id}`,
    editUrl: ({ id }) => `${baseUrl}/zoo/update/${id}`
}