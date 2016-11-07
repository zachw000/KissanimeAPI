# KissanimeAPI
An experimental API for programming with kissanime.

## Sample
```javascript
var kissanime = require('./kissanime');

// Not yet supplying a client User-Agent, so using API default
// NOT RECOMMENDED FOR PRODUCTION
kissanime.connect();

// Waits for kissanimeAPI to connect to Kissanime servers
// May take at least 4 seconds, due to Kissanime's DDoS protection
kissanime.kissanimeEvent.on('connected', () => {
  console.log("connected!")
    // This will search kissanime for productions with the word "boku" 
in
    // the title
  kissanime.search("boku").then(animes => {
    // a list of animes is returned and the titles are displayed
    for (anime in animes) {
      // the format is <var_name>[place_in_list]
      // .title for the show title or .uri for href link
      console.log(
        `\t${animes[anime].title} ${animes[anime].uri}`);
    }
  });
});
```
## Example Output
```
Connection Challenge Started
jschl_answer: 107
jschl_vc: f8f25cbd9b3f63ff30a0f1439b078a20
pass: 1478491346.392-3LKyXPfzV/
Connection request started.
connected!
	Boku dake ga Inai Machi (Dub) 
http://kissanime.to/Anime/Boku-dake-ga-Inai-Machi-Dub
	Boku dake ga Inai Machi (Sub) 
http://kissanime.to/Anime/Boku-dake-ga-Inai-Machi
	Boku no Hero Academia (Dub) 
http://kissanime.to/Anime/Boku-no-Hero-Academia-Dub
	Boku no Hero Academia (Sub) 
http://kissanime.to/Anime/Boku-no-Hero-Academia-My-Hero-Academia
	Boku no Imouto wa "Osaka Okan" 
http://kissanime.to/Anime/Boku-no-Imouto-wa-Osaka-Okan
	Boku no Imouto wa "Osaka Okan" Episode 1.5 
http://kissanime.to/Anime/Boku-no-Imouto-wa-Osaka-Okan-Episode-1-5
	Boku no Imouto wa "Osaka Okan" Special 
http://kissanime.to/Anime/Boku-no-Imouto-wa-Osaka-Okan-Special
	Boku no Marie (Dub) http://kissanime.to/Anime/Boku-no-Marie-Dub
	Boku no Marie (Sub) http://kissanime.to/Anime/Boku-no-Marie-Sub
	Boku no Son Gokuu http://kissanime.to/Anime/Boku-no-Son-Gokuu
	Boku wa Imouto ni Koi o Suru 
http://kissanime.to/Anime/Boku-wa-Imouto-ni-Koi-o-Suru
	Boku wa Konomama Kaeranai 
http://kissanime.to/Anime/Boku-wa-Konomama-Kaeranai
	Boku wa Tomodachi ga Sukunai (Dub) 
http://kissanime.to/Anime/Boku-wa-Tomodachi-ga-Sukunai-Dub
	Boku wa Tomodachi ga Sukunai (Sub) 
http://kissanime.to/Anime/Boku-wa-Tomodachi-ga-Sukunai
	Boku wa Tomodachi ga Sukunai Episode 0 
http://kissanime.to/Anime/Boku-wa-Tomodachi-ga-Sukunai-Episode-0
	Boku wa Tomodachi ga Sukunai Next (Dub) 
http://kissanime.to/Anime/Boku-wa-Tomodachi-ga-Sukunai-Next-Dub
	Boku wa Tomodachi ga Sukunai Next (Sub) 
http://kissanime.to/Anime/Boku-wa-Tomodachi-ga-Sukunai-Next
	Boku wa Tomodachi ga Sukunai: Add-on Disc 
http://kissanime.to/Anime/Boku-wa-Tomodachi-ga-Sukunai-Add-on-Disc
	Bokura ga Ita http://kissanime.to/Anime/Bokura-ga-Ita
	Bokura wa Minna Kawaisou 
http://kissanime.to/Anime/Bokura-wa-Minna-Kawaisou
	Bokura wa Minna Kawaisou: Hajimete no 
http://kissanime.to/Anime/Bokura-wa-Minna-Kawaisou-Special
	Bokurano http://kissanime.to/Anime/Bokurano
	Bokusatsu Tenshi Dokuro-chan (Dub) 
http://kissanime.to/Anime/Bokusatsu-Tenshi-Dokuro-chan-Dub
	Bokusatsu Tenshi Dokuro-chan (Sub) 
http://kissanime.to/Anime/Bokusatsu-Tenshi-Dokuro-chan
	Bokusatsu Tenshi Dokuro-chan 2 (Dub) 
http://kissanime.to/Anime/Bokusatsu-Tenshi-Dokuro-chan-2-Dub
	Bokusatsu Tenshi Dokuro-chan 2 (Sub) 
http://kissanime.to/Anime/Bokusatsu-Tenshi-Dokuro-chan-2
	Boku Pataliro! http://kissanime.to/Anime/Patalliro
	Boku no Chikyuu wo Mamotte 
http://kissanime.to/Anime/Please-Save-My-Earth-Dub
	Boku no Chikyuu wo Mamotte 
http://kissanime.to/Anime/Please-Save-My-Earth-Sub
```

### What is _kissanime.connect()_?
This is a special function which takes an optional (but __highly__ 
recommended) variable called useragent. If set,
every time a request is made then it will supply the new User-Agent as 
opposed to the one defined by default in kissanime.js. The reason
behind updating the useragent is because kissanime validates browsers 
server side based off of the useragent given to them by the client.
Therefore, if an _unsupported browser_ is visiting the site, kissanime 
can selectively kick the visitor from the site (or not allow the
client to visit). And by supplying dynamic useragents, this will make it 
much less likely for kissanime to kick your program from the
web site.

## Features
Currently there are not many features, just connection and search, 
however many more are planned. Stay up to date with the indev branch if
your development needs requires more features.

## Special Note To Developers
For the latest features and extensions to the API, please take a look
at the indev branch!
