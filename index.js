var kissanime = require('./kissanime');

kissanime.connect("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36");

kissanime.kissanimeEvent.on('connected', () => {
  console.log("Done!");
  kissanime.test();
});
