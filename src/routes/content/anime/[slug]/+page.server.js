
import { provider } from "$lib/gogo";
export async function load({params}) {
   const res = await provider.fetchAnimeInfo(params.slug).then((data)=>{
        return data
    })
     return {
        info: params.slug,
        anime: res
     }
}