import WidgetView from 'amoe-butterworth-widgets';
import mountWidgets from 'amoe-butterworth-widgets';

import style from '../node_modules/amoe-butterworth-widgets/dist/amoe-butterworth-widgets.css';

function onReady() {
    mountWidgets('#app');
}

document.addEventListener('DOMContentLoaded', onReady);
