import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    author: DS.attr('string'),
    pages: DS.attr('number'),
    photo: DS.attr('string'),
    link: DS.attr('string'),
});
