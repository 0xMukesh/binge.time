import { getAllEps } from './getAllEps'
import { addDays } from './addDays'

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
