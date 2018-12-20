import WidgetView from 'amoe-butterworth-widgets';
import mountWidgets from 'amoe-butterworth-widgets';

// load the css
import 'amoe-butterworth-widgets/dist/amoe-butterworth-widgets.css';

function onClick() {
    console.log("output button clicked");
}

function onReady() {
    const outputButton = document.getElementById('output-button');
    outputButton.addEventListener('click', onClick);

    mountWidgets('#app');

}

document.addEventListener('DOMContentLoaded', onReady);
