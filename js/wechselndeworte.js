const wechselndeWorte = document.getElementById('wechselndeWorte');
const wortListe = [
    'liebenswert',
    'niedlich',
    'verspielt',
    'kuschelig',
    'anhänglich',
    'herzerwärmend',
    'fröhlich',
    'zutraulich',
    'unterhaltsam',
    'wunderbar'
];

let aktuellesWortIndex = 0;

function wechsleWort() {
    wechselndeWorte.textContent = wortListe[aktuellesWortIndex];
    aktuellesWortIndex = (aktuellesWortIndex + 1) % wortListe.length;
}

// Initial das Wort setzen
wechsleWort();

// Alle 0,8 Sekunden das Wort wechseln
setInterval(wechsleWort, 800);  