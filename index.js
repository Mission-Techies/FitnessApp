var api_key = 'keyb5yyG63cFxlXVF';
var exercise_records = 'https://api.airtable.com/v0/appLn9msSiaJG7FNR/Exercises?api_key=' + api_key +'&sort%5B0%5D%5Bfield%5D=Body+Group&sort%5B0%5D%5Bdirection%5D=asc';

function renderRecords(data) {
    //console.log(data)
    $(data.records).each(function(index, exercise) {
        console.log(exercise.fields)
      var exercise_name = exercise.fields['Exercise'];
      var exercise_bodygroup = exercise.fields['Body Group'];
      var exercise_movement = exercise.fields['Movement'];
      var exercise_pics = exercise.fields['Attachments']
      var exercise_info = ''
      if (exercise_name) {
        exercise_info +=`<li class='row'>`
        if (exercise) {
          $.each(exercise_pics, function(i, pic){
            exercise_info +=`<img src="${pic.url}"><br>`;
          });
        }
        exercise_info += ` Exercise: ${exercise_name}`
        exercise_info += ` <br> Body Group: ${exercise_bodygroup}`
        exercise_info += ` <br> Movement: ${exercise_movement}`
        exercise_info +=`</li>`;
      }
      $('.exercises').append(exercise_info);
    });
}

$.get(exercise_records, renderRecords);