import DS from 'ember-data';

export default DS.Model.extend({
    reporter: DS.attr('string'),
    grage: DS.attr('number'),
    presentation: DS.attr('string'),
    link: DS.attr('string'),
    description: DS.attr('string'),
});
