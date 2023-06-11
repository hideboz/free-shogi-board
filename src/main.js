import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// divの大きさをセットする
function setTopDivSize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const minWH = (w < h) ? w : h;

    const elem = document.getElementById("app");
    // elem.style.width = `${minWH}px`;
    elem.style.height = `${minWH}px`;
}
setTopDivSize();
window.addEventListener('resize', setTopDivSize);

createApp(App).mount('#app')
