import { getAllEps } from './getAllEps'
import { addDays } from './addDays';

export function findEndDate(startSeason, startEpisode, endSeason, endEpisode, numPerDay, showEpisodes) {
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