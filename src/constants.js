// let port = 5001;
let baseUrl = `https://animalback.azurewebsites.net/zoo`;

module.exports = {
    bulkUrl: `${baseUrl}/read`,
    fetchTableUrl: `${baseUrl}`,
    createUrl: `${baseUrl}/add`,
    deleteUrl: ({ id }) => `${baseUrl}/${id}`,
    editUrl: ({ id }) => `${baseUrl}/update/${id}`
}