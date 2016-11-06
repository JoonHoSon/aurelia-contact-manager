import {WebAPI} from './web-api';

export class App {
    static inject() {
        return [WebAPI];
    }

    constructor(api) {
        this.api = api;
    }

    configureRouter(config, router) {
        config.title = 'Contacts';
        // config.options.pushState = true; // hash 제거
        config.map([
            { route: '', moduleId: 'no-selection', title: 'Select' },
            { route: 'contact/:id', moduleId: 'contact-detail', name: 'contacts' }
        ]);
    }
}
