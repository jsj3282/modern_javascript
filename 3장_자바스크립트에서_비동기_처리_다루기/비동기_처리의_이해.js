function work(callback) {                           // callback : 함수를 파라미터로 넘겨줌, 특정 작업이 끝나고 난 후 실행
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start);
    }, 0);                                  // 4ms 후에 백그라운드에서 실행됨, 기존에 코드 흐름 방해 X, 다음 작업 수행 가능
}

console.log('작업 시작!');
work((ms) => {
    console.log('작업이 끝났어요!');
    console.log(ms + 'ms 갈럈다고 헤요.')
});
console.log('다음 작업');

// Ajax Web API 요청 & 파일 읽기 & 암호화/복호화 & 작업 예약