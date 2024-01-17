// @ts-nocheck
import { gogoanime } from "$lib/gogo";
export function load({params}) {
    const data = gogoanime.fetchAnimeInfo(params.slug).then((res) => {
        return res
    });
    return {
        id: data.id,
        title: data.title,
        geners: data.geners,
        totalEpisodes: data.totalEpisodes,
        image: data.image,
        releaseDate: data.releaseDate,
        description: data.description,
        subOrDub: data.subOrDub,
        type: data.type,
        status: data.status,
        otherName: data.otherName,
        episodes: data.episodes
    }
}