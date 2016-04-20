$.ready(function(){
  console.log("ready");
  onPageLoad();
}())

function onPageLoad(){
  var ajaxRequest = $("#teacher-list").ajax({
    url: "/api/teachers",
    method: "GET"
  })
  ajaxRequest.then(function(response){
    var teachers = JSON.parse(response);
    for (var i=0; i<teachers.length; i++){
      var liTag = document.createElement("LI");
      var aTag = document.createElement("A");
      aTag.setAttribute("href", "/api/teachers/" + teachers[i].id);
      aTag.setAttribute("class", "teacher");
      aTag.setAttribute("id", "#" + teachers[i].id);
      var listItem = document.createTextNode(teachers[i].name);
      aTag.appendChild(listItem);
      liTag.appendChild(aTag);
      $("#teacher-list")[0].appendChild(liTag);
    }
    bindListeners();
  })
  ajaxRequest.catch(function(){
    console.log("Oops, something broke!");
  })

}

function bindListeners(){
  homeListener();
  teacherListener();
}

function homeListener(){
  $("#home").on("click", function(e){
    $(".teacher-visible").show();
    $(".badge-visible").hide();
  })
}

function teacherListener(){
  $(".teacher").on("click", function(e){
    e.preventDefault();
    var teacher_id = this.id;
    var teacherRequest = $(teacher_id).ajax({
      url: "/api/teachers/" + teacher_id.slice(1),
      method: "GET",
      data: teacher_id
    })
    teacherRequest.then(function(response){
      var teacher = JSON.parse(response);
      console.log(teacher)
      $(".teacher-visible").hide();
      $(".badge-visible").show();
      $("#teacher-name")[0].textContent = teacher.name + "'s Badges";
      // loop stuff goes here
      // Don't forget to add badges to controller
    })
    teacherRequest.catch(function(){
      console.log("Oops, something broke!");
    })
  })
}


