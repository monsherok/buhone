// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


import '../libs/splide.js'

new Splide('.hero__splide', {
    type: 'loop',
    gap: 30,
}).mount();