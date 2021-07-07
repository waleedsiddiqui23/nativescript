import Vue from 'nativescript-vue';

import Lessons from './components/App';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <Lessons />
        </Frame>`,

    components: {
        Lessons
    }
}).$start();