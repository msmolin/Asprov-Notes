const BASE_URL = 'https://tts.voicetech.yandex.net/generate?';
const TOKEN = 'ae2aa574-11cd-4283-b212-a3c270e58b08';
const format = 'mp3';
const quality = 'hi';
const lang = 'ru-RU';//'en-US';
const speaker = 'oksana';//'jane';

export function getSoundUrl(text) {
    let url =
        BASE_URL +
        'key=' + TOKEN +
        '&text=' + encodeURI(text) +
        '&format=' + format +
        '&quality=' + quality +
        '&lang=' + lang +
        '&speaker=' + speaker;
    return url;
}

export function getSound(text) {
    let url  = getSoundUrl(text)
    return fetch(url)
        .then(r => {
            if (r.status === 200) {
                return r.json()
            }
            throw "err";
        });

}

