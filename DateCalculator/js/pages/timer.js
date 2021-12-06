import { remainTime } from "../utils/getTimeRemain.js";
import "../libs/howler.core.js";

const timerForm = document.getElementById("timer");
const timeError = document.getElementById("time__error");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

const sound = new Howl({
    src: ['./media/alarm.mp3']
});

timerForm.addEventListener('submit', function(event){
    event.preventDefault();
    timeError.innerHTML = "";

    let { timerSetHour, timerSetMin, timerSetSec } = event.target.elements;
    timerSetHour = timerSetHour.value, timerSetMin = timerSetMin.value, timerSetSec = timerSetSec.value;

    if (timerSetSec !== '0' || timerSetMin !== '0' || timerSetHour !== '0') {
        const intervalTimer = window.setInterval(myCallback, 1000, timerSetHour, timerSetMin, timerSetSec);
        
        function myCallback() {
            let lastTime = remainTime(timerSetHour, timerSetMin, timerSetSec);
            timerForm.elements.timerSetHour.value = timerSetHour = lastTime.hours;
            timerForm.elements.timerSetMin.value = timerSetMin = lastTime.minutes;
            timerForm.elements.timerSetSec.value = timerSetSec = lastTime.seconds;
            
            if (lastTime.hours === 0 && lastTime.minutes === 0 && lastTime.seconds === 0) {
                clearInterval(intervalTimer);
                sound.play();
            }
            pauseButton.onclick = resetButton.onclick = function() {
                clearInterval(intervalTimer);
            };
        }
    } else timeError.innerHTML = formatError("Для запуска таймера необходимо установить время");
});