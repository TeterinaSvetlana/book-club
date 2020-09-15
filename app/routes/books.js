import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // return fetch("http://localhost:3000/books").then(response => response.json())
        return this.store.findAll('book');
    }
});
