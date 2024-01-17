
import { gogoanime } from "$lib/gogo";
export async function load({params}) {
    console.log(params.slug)
    await gogoanime.fetchAnimeInfo(params.slug).then((data) => {
        console.log(data);
    }) 
     return {
        info: params.slug
     }
}