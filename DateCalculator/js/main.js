import "./pages/dateCalc.js";
import "./pages/timer.js";
import { changeHTML } from "./utils/selectPage.js";

//Перключение между функциями
const pageDate = document.querySelector(".pageDates");
const pageTimer = document.querySelector(".pageTimer");
const dateCalcForm = document.getElementById("calcDate");
const timerForm = document.getElementById("timer");

pageDate.onclick = pageTimer.onclick = function(){changeHTML(pageDate, pageTimer, dateCalcForm, timerForm);};

