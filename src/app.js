export class App {
    constructor() {
        this.message = 'Hello World!';
    }

    configureRouter(config, router) {
        config.title = 'Contacts';
        config.map([
            { route: '', moduleId: 'no-selection', title: 'Select' },
            { route: 'contact/:id', moduleId: 'contact-detail', name: 'contacts' }
        ]);
    }
}