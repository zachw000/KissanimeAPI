var kissanime = require('./kissanime');

kissanime.connect();

kissanime.kissanimeEvent.on('connected', () => {
  kissanime.search("boku").then(animes => {
    for (anime = 0; anime < animes.length; anime++) {
      console.log(animes[anime].$t);
    }
  });
});
