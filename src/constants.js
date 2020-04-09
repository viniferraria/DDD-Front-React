let port = 44318;
let baseUrl = `https://localhost:${port}/zoo`;

module.exports = {
    bulkUrl: `${baseUrl}/read`,
    fetchTableUrl: `${baseUrl}`,
    createUrl: `${baseUrl}/add`,
    deleteUrl: ({ id }) => `${baseUrl}/${id}`,
    editUrl: ({ id }) => `${baseUrl}/update/${id}`
}
