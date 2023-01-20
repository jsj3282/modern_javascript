// Promise : 비동기 작업을 조금 더 편하게 하기 위해 ES6에서 도입, 비동기 처리할 작업이 많아지면 callback 함수를 많이 써야 해서 코드가 난잡해짐.

function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if (callback) {
            callback(increased);
        }
    }, 1000)
}

increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
       increaseAndPrint(n, n => {
          increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                console.log('작업 끝!');
            })
          });
       });
    });
});

const myPromise = new Promise((resolve, reject) => {
    // 구현...
    setTimeout(() => {
        resolve('result');
    }, 1000);
});

myPromise.then(result => {
    console.log(result);
})

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error());
    }, 1000);
});

myPromise2.then(result => {
    console.log(result);
}).catch(e => {
    console.log(e);
})

function increaseAndPrint2(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

increaseAndPrint2(0).then(n => {
    return increaseAndPrint2(n);
}).then(n => {
    return increaseAndPrint2(n);
}).then(n => {
    return increaseAndPrint2(n);
}).then(n => {
    return increaseAndPrint2(n);
}).then(n => {
    return increaseAndPrint2(n);
}).catch(e => {
    console.error(e);
});

increaseAndPrint2(0)
    .then(increaseAndPrint2)
    .then(increaseAndPrint2)
    .then(increaseAndPrint2)
    .then(increaseAndPrint2)
    .catch(e => {
        console.error(e);
    });