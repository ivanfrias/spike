// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  // Pull in the Collection module from above,
  'models/project/ProjectModel',
  'collections/projects/ProjectsCollection',
  'text!templates/projects/projectsListTemplate.html'

], function($, _, Backbone, Bootstrap, ProjectModel, ProjectsCollection, projectsListTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $("#projects-list"),

    render: function(){
      
      var data = {
        projects: this.collection.models,
        _: _ 
      };

      var html = _.template(projectsListTemplate);
      
	  $("#projects-list").html(html({projects: this.collection.toJSON()})); 
    }
  });
  return ProjectListView;
});
