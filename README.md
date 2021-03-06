<p align="center">
<img src="./resources/sonus.png" alt="sonus" />
</p>
<p align="center">
<a href="https://travis-ci.org/evancohen/sonus"><img src="https://api.travis-ci.org/evancohen/sonus.svg?branch=master" alt="Build Status"/></a>
<a href="https://codeclimate.com/github/evancohen/sonus"><img src="https://codeclimate.com/github/evancohen/sonus/badges/gpa.svg" /></a>
<a href='https://dependencyci.com/github/evancohen/sonus'><img src='https://dependencyci.com/github/evancohen/sonus/badge' alt='Dependency Status'/></a>
</p>
<p align="center">
<strong>This project is in active development and is rapidly evolving.  As of <code>v0.1.0</code> it uses semantic versioning.</strong>
</p>

Sonus is a speech to text library you can use to quickly and easally add a VUI (Voice User Interface) to any hardware or software project. Just like Alexa, Google Now, and Siri, Sonus is always listening offline for a *customizable* hotword. Once that hotword is detected your speech is streamed to the cloud recognition service of your choice - then you get the results.

### Platform Support 
- [X] Linux - most major distros (Including Raspbian)
- [X] macOS
- [ ] Windows

### Streaming Recognition Services

- [X] Google Cloud Speech
- [ ] Alexa Voice Services
- [ ] Wit.ai
- [ ] Microsoft Cognitive Services
- [ ] Houndify

## Installation

```
npm install --save sonus
```

## Dependencies

Generally, running `npm install` should suffice. This module however, requires you to install [SoX](http://sox.sourceforge.net).

### For most linux disto's
Recommended: use `arecord`, which comes with most linux distros.  
Alternatively:
```
sudo apt-get install sox libsox-fmt-all
```

### For macOS
```
brew install sox
```

## Usage 

Add sonus and your cloud speech recognition system of choice:
``` javascript
const Sonus = require('sonus')
const speech = require('@google-cloud/speech')({
  projectId: 'streaming-speech-sample',
  keyFilename: './keyfile.json'
})
```

Add your keyword and initialize Sonus:
``` javascript
const hotwords = [{ file: 'resources/snowboy.umdl', hotword: 'snowboy' }] 
const sonus = Sonus.init({ hotwords }, speech) 
```

Create your own Alexa in less than a tweet:
``` javascript
Sonus.start(sonus) 
sonus.on('hotword', (index, keyword) => console.log("!")) 
sonus.on('final-result', console.log) 
```
## Built [#withsonus](https://twitter.com/hashtag/withsonus?src=github)
*If you build a project with Sonus send a PR and include it here!*

## Authors
Evan Cohen: [@_evnc](https://twitter.com/_evnc)  
Ashish Chandwani: [@ashishschandwa1](https://twitter.com/ashishschandwa1)

## License
Licensed under [MIT](https://github.com/evancohen/sonus/blob/master/LICENSE).
