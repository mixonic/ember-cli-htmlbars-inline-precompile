import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('inline precompilation works');

test('using `hbs` tagged string places the precompiled template', function(assert) {
  var view = Ember.View.create({
    greeting: "hello from view",
    template: hbs`greeting: {{view.greeting}}`
  });

  Ember.run(function() {
    view.appendTo('#ember-testing');
  });

  assert.equal(view.$().html().trim(), "greeting: hello from view", "inline precompile of the HTMLBars template works");
});
