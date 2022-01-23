const searchUrl = "https://api.tvmaze.com/search/shows?q=";

function toURLFormat(query) {
    let lowercase = query.toLowerCase().trim();
    return lowercase.split(' ').join('-');
}


export async function searchShow(query) {
    const formattedQuery = toURLFormat(query)
    let result = await fetch(`${searchUrl}${formattedQuery}`).then(response => {
        return response.json();
    })
    return result;
}