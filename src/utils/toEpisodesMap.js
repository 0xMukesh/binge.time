export function toEpisodesMap(data) {
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