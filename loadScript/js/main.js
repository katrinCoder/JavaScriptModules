// // первый аргумент строка
// loadScripts('./js/a.js', () => {
//     loadScripts('./js/b.js', () => {
//         console.log(a + b);
//     })
// });

// // первый аргумент callback
loadScripts(() => {
    console.log("Первый аргумент callback");
});

// первый аргумент массив
// loadScripts(['./js/a.js', './js/b.js', './js/c.js'], () => {
//     console.log(a + b + c);
// });