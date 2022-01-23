const episodesPrefix = "https://api.tvmaze.com/shows/"
const episodesSuffix = "/episodes"

export async function showInfo(ID) {
    let url = episodesPrefix + ID + episodesSuffix + ``;
    let result = await fetch(url).then(response => {
        return response.json();
    })
    return result;
}