import { provider } from "$lib/gogo";
export async function load({url}) {
    let page = 1;
    if(url.searchParams.get('page')){
        page = url.searchParams.get('page');
    }

  const data = await provider.fetchRecentEpisodes(page).then((res) => {
    return res
  });
    return {
    animes: data.results,
    currentPage: data.currentPage,
    hasNextPage: data.hasNextPage,
  };
}