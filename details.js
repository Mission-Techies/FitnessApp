$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results) {
	  return results[1] || 0;
	}
	return false;
}

var url_one_exercise = function() {
  var url_id = $.urlParam('exerciseID');
  return 'https://api.airtable.com/v0/appLn9msSiaJG7FNR/Exercises/' + url_id +'?api_key=' + api_key;
}

//detail view
function renderOneExercise(exercise) {
  var exercise_name = exercise.fields['Exercise'];
  var exercise_bodygroup = exercise.fields['Body Group'];
  var exercise_movement = exercise.fields['Movement'];
  var exercise_pics = exercise.fields['Attachments'];
  var exercise_detail = exercise.fields['Description'];
  var exercise_info = ''
  if (exercise) {
    $.each(exercise_pics, function(i, pic){
      exercise_info +=`<img src="${pic.url}"><br>`;
    });
  }
      if (exercise_name) {
        exercise_info +=`<div class="panel panel-default">`;
          exercise_info +=`<div class="panel-body">`;
          if (exercise_pics) {
            $.each(exercise_pics, function(i, pic){
              exercise_info +=`<a href="detail.html?exerciseID=${exercise.id}"></a>`;
            });
          }
          exercise_info +=`</div>`;
        exercise_info += `<div class="panel-footer">Name: ${exercise_name}<br>Location: ${exercise_bodygroup}</div>`;
        exercise_info +=`</div>`;
      }
      $('.exercise-detail').append(exercise_info);
}

$.get(url_one_exercise(), renderOneExercise);
