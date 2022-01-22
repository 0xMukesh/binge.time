
const searchUrl = "https://api.tvmaze.com/search/shows?q=";

const showUrl = "";

function to_url_format(query) {
    let lowercase = query.toLowerCase().trim();
    return lowercase.split(' ').join('-');
}


export async function searchShow(query) {
    const formattedQuery = to_url_format(query)
    let result = await fetch(`${searchUrl}${formattedQuery}`).then(response => {
        return response.json();
    })
    return result;
}

const episodesPrefix = "https://api.tvmaze.com/shows/"
const episodesSuffix = "/episodes"

export async function showInfo(ID) {
    var idString = ID + ''
    let url = episodesPrefix + ID + episodesSuffix + ``;
    let result = await fetch(url).then(response => {
        return response.json();
    })
    return result;
}

function minutes_watched_minutes_left(startSeason, startEpisode, endSeason, endEpisode, showEpisodes) {
    startSeason = parseInt(startSeason);
    startEpisode = parseInt(startEpisode);
    endSeason = parseInt(endSeason);
    endEpisode = parseInt(endEpisode);
    startEpisode = startEpisode - 1;
    endEpisode = endEpisode - 1;
    let minutesWatched = 0;
    let minutesLeft = 0;
    for (let season = 1; season <= startSeason; season++) {
        if (season === startSeason) {
            for (let episode = 0; episode < startEpisode; episode++) {
                minutesWatched += showEpisodes[season][episode][1];
            }
        }
        else {
            for (let episode = 0; episode < showEpisodes[season].length; episode++) {
                minutesWatched += showEpisodes[season][episode][1];
            }
        }
    }
    for (let season = startSeason; season <= endSeason; season++) {
        if (startSeason === endSeason) {
            for (let episode = startEpisode; episode <= endEpisode; episode++) {
                minutesLeft += showEpisodes[season][episode][1];
            }
        }
        else if (season === startSeason) {
            for (let episode = startEpisode; episode < showEpisodes[season].length; episode++) {
                minutesLeft += showEpisodes[season][episode][1];
            }
        }
        else {
            for (let episode = 0; episode <= endEpisode; episode++) {
                minutesLeft += showEpisodes[season][episode][1];
            }
        }
    }
    return [minutesWatched, minutesLeft];
}

function percentage_watched(startSeason, startEpisode, endSeason, endEpisode, showEpisodes) {
    let stats = minutes_watched_minutes_left(startSeason, startEpisode, endSeason, endEpisode, showEpisodes);
    return stats[0] / stats[1];
}


export function to_episodes_map(data) {
    let results = {};
    for (let i = 0; i < data.length; i++) {
        let episode = data[i];
        let season = episode["season"];
        let title = episode["name"];
        let runtime = episode["runtime"];
        if (!(season in results)) {
            results[season] = [[title, runtime]];
        }
        else {
            results[season].push([title, runtime]);
        }
    }
    return results;
}

function getAllEps(startSeason, startEpisode, endSeason, endEpisode, showEpisodes) {
    startSeason = parseInt(startSeason);
    startEpisode = parseInt(startEpisode);
    endSeason = parseInt(endSeason);
    endEpisode = parseInt(endEpisode);
    startEpisode = startEpisode - 1;
    endEpisode = endEpisode - 1;
    let totalEpisodes = 0;
    let startLength = 0;
    if (startSeason === endSeason) {
        return (endEpisode - startEpisode + 1) * 1.0;
    }
    startLength = showEpisodes[startSeason].length - startEpisode;
    for (let i = startSeason + 1; i < endSeason; i++) {
        totalEpisodes += showEpisodes[i].length;
    }
    let endLength = endEpisode;
    totalEpisodes += startLength;
    totalEpisodes += endLength;
    totalEpisodes += 1;
    totalEpisodes *= 1.0;
    return totalEpisodes;
}


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function find_end_date(startSeason, startEpisode, endSeason, endEpisode, numPerDay, showEpisodes) {
    let totalEps = getAllEps(startSeason, startEpisode, endSeason, endEpisode, showEpisodes);
    let days = 99999;
    if (numPerDay !== 0) {
        days = Math.ceil(totalEps / numPerDay);
    }
    let today = new Date();
    let tomorrow = addDays(today, 1);
    let resultDay = addDays(tomorrow, days - 1);
    resultDay = resultDay.toISOString().slice(0, 10);
    return resultDay;
}


export function episodesPerDay(startSeason, startEpisode, endSeason, endEpisode, endDate, showEpisodes) {
    let totalEpisodes = getAllEps(startSeason, startEpisode, endSeason, endEpisode, showEpisodes);
    let today = new Date();
    let tmw = addDays(today, 1);
    tmw = tmw.toISOString().slice(0, 10);
    let tomorrow = new Date(tmw);
    let end = new Date(endDate);
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate());
    const utc2 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
    const dateDiff = Math.floor((utc2 - utc1) / _MS_PER_DAY) + 1;
    let rate = totalEpisodes / dateDiff;
    return rate;
}
