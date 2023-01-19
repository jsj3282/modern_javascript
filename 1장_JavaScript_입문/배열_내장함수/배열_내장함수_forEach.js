const superheros = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지'
];

for (let i = 0; i < superheros.length; i++) {
    console.log(superheros[i]);
}

superheros.forEach(function (hero) {
    console.log(hero);
});

superheros.forEach(hero => {
    console.log(hero);
})

