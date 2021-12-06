// В качестве эксперимента доработайте нашу функцию loadScript
//      a. Её аргументы:
//          i. Первый аргумент: коллбек или строка с url до файла или массив с url до файлов зависимостей;
//          ii. Второй аргумент: необязательный коллбек (только если первый аргумент строка или массив)
//      b. Её задачи:
//          * обнаруживать повторно запрашиваемые зависимости ине загружать их: ситуация, когда модуль А зависит от В, и С зависит от В.
//          * Подумайте, как реализовать вызов callback модуля А после того, как разрешатся все зависимости модуля В, и отработает его callback. 
// Попробуйте реализовать логику работы функции define из системы модулей AMD (RequireJS).

function loadOneScript(path, callback) {
    const script = document.createElement('script');

    script.src = path;
    script.onload = callback;
    script.onerror = function() {
        console.log(`Не удалось загрузить файл ${path}`);
    }
    document.head.appendChild(script);
}

let loadedScripts = [];

function loadScripts(path, callback) {
    if (typeof path === 'string') {
        if (loadedScripts.includes(path)) return;
        loadOneScript(path, callback);
        loadedScripts.push(path);
    } else if (typeof path === 'object') {
        path.forEach(element => {
            if (loadedScripts.includes(element)) return;
            loadOneScript(element, loadedScripts.push(element));
        });
        if (path === loadedScripts) callback;
    } else if (typeof path === 'function') {
        path();
    } else return console.log("Ошибка выполнения функции loadScript: аргументами могут быть только строка, массив или callback");

}