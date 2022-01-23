export function getAllEps(startSeason, startEpisode, endSeason, endEpisode, showEpisodes) {
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