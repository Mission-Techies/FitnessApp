var exercise_records = 'https://api.airtable.com/v0/appLn9msSiaJG7FNR/Exercises/?api_key=' + api_key +'&sort%5B0%5D%5Bfield%5D=Body+Group&sort%5B0%5D%5Bdirection%5D=asc';

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

          exercise_info +=`<a href='details.html?exerciseID=${exercise.id}' class='col-md-4'>`

            if (exercise) {
              $.each(exercise_pics, function(i, pic){
                exercise_info +=`<img src="${pic.url}"><br>`;
              });
            }
            exercise_info +=`<div class='col-md-4'>`;
              exercise_info += '<h2 class="thicker">';
                exercise_info += ` Exercise: ${exercise_name}`;
              exercise_info += '</h2>';
            exercise_info +=`</div>`;

            exercise_info +=`<div class='col-md-4'>`;
              exercise_info += `Body Group: ${exercise_bodygroup}`;
            exercise_info +=`</div>`;

            exercise_info +=`<div class='col-md-4'>`;
              exercise_info += `Movement: ${exercise_movement}`;
            exercise_info +=`</div>`;

          exercise_info +=`</a>`

        exercise_info +=`</li>`;
      }
      $('.exercises').append(exercise_info);
    });
//     function makeCircuit (list, exerciseID) {
//       var circuit = [];
//       circuit.push(exerciseID)
//       console.log(circuit);
//     } return circuit;
//
//     var faveExercises = [];
//
//     function addFaveExercise(list, exerciseID) {
//         faveExercises.push(exerciseID)
//     }
//     function removeFaveExercise(list, exerciseID) {
//       for (var i = 0; i < list.length; i++) {
//         if (list[i].exerciseID === exerciseID) {
//           list.splice(i, 1);
//           return 'removed' + exerciseID;
//         }
//       }
//     }
//     function updateLocalStorage (){
//
//     }
//
//     }

 }

$.get(exercise_records, renderRecords);
