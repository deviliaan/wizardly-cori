import { gogoanime } from "$lib/gogo";
export async function load({url}) {
    let page = 1;
    let type = 1;
    if(url.searchParams.get('page')){
        page = url.searchParams.get('page');
    }
    if(url.searchParams.get('type')){
        type = url.searchParams.get('type');
    }

  const data = await gogoanime.fetchRecentEpisodes(page,type).then((res) => {
    return res
  });
    return {
    animes: data.results,
    currentPage: data.currentPage,
    hasNextPage: data.hasNextPage
  };
}