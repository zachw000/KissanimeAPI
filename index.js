var kissanime = require('./kissanime');

// Not yet supplying a client User-Agent, so using API default
// NOT RECOMMENDED FOR PRODUCTION
kissanime.connect();

// Declaring variable animes which will be updated later
var anime_list;

// Waits for kissanimeAPI to connect to Kissanime servers
// May take at least 4 seconds, due to Kissanime's DDoS protection
kissanime.kissanimeEvent.on('connected', () => {
  console.log("connected!")
    // This will search kissanime for productions with the word "boku" in
    // the title
  kissanime.search("boku").then(animes => {
    // a list of animes is returned and the titles are displayed
    anime_list = animes;

    for (anime in animes) {
      // the format is <var_name>[place_in_list]
      // .title for the show title or .uri for href link
      console.log(
        `\t${animes[anime].title} ${animes[anime].uri}`);
    }
  }).then(() => {
    kissanime.getEpisodes(anime_list[0].uri).then(episodes => {
      console.log(episodes);
    });
  });
});
