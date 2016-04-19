$.ready(function(){
  console.log("ready");
  onPageLoad();
  bindListeners();
}())

function bindListeners(){
  teacherButtonListener();

}

function onPageLoad(){
  var ajaxRequest = $("#teacher-list").ajax({
    url: "/apis/teachers",
    type: "get"
  })
  ajaxRequest.then(function(response){
    var teachers = JSON.parse(response);
    for (var i=0; i<teachers.length; i++){
      var liTag = document.createElement("LI");
      var aTag = document.createElement("A");
      aTag.setAttribute("href", "#" + teachers[i].id);
      aTag.setAttribute("id", teachers[i].id);
      aTag.setAttribute("class", "teacher");
      var listItem = document.createTextNode(teachers[i].name);
      aTag.appendChild(listItem);
      liTag.appendChild(aTag);
      $("#teacher-list")[0].appendChild(liTag);
    }
  })
  ajaxRequest.catch(function(){
    console.log("Oops, something broke!");
  })
}

function teacherButtonListener(){
  // This runs when the program starts

  // $("#1").on("click", function(){
  //   console.log(this);
  // })
  // $(".teacher").trigger("click");
}
