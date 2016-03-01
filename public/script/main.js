var Candidate = Backbone.Model.extend({});

var Candidates = Backbone.Collection.extend({
    model: Candidate,
    url: '/candidates'
});

var candidates = new Candidates();
// candidates.fetch({
//     success: function (data_array) {
//         data = data_array.models[0].attributes;
//         data = JSON.stringify(data);
//         console.log(data_array);
//         var data = "<p>" + data + "</p>";
//         $('.content').append(data);
//     }
// });
var CandidateView = Backbone.View.extend({
    el: '.content',
    render: function () {
        var candidateTemplate = $("#candidate-template").html();
        $(this.$el).html(_.template(candidateTemplate, {'candidates': items}));
        return this;
    }
});

var candidateView = new CandidateView();
// var haha = function() {
//     var template = $('#candidate-template').html();
//     $('.content').html(_.template(template,{candidates:candidates.models}));
// }
// haha();
candidates.fetch({
    success: function (data) {
        console.log(data.models[0].attributes);
        console.log(candidates.models[0].get('name'));
        candidateView.render();
    }
});

console.log($('body').html());