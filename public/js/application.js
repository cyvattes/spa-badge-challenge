$.ready(function(){
  console.log("ready");
  var ajaxRequest = $("#teacher-list").ajax({
    url: "/apis/teachers",
    type: "get"
  })
  ajaxRequest.then(function(response){
    var teachers = JSON.parse(response);
    for (var i=0; i<teachers.length; i++){
      // debugger;
      console.log(teachers[i].name)
      var liTag = document.createElement("LI");
      var aTag = document.createElement("A");
      aTag.setAttribute("href", "/apis/teachers/" + teachers[i].id);
      var listItem = document.createTextNode(teachers[i].name);
      aTag.appendChild(listItem);
      liTag.appendChild(aTag);
      $("#teacher-list")[0].appendChild(liTag);
      // $("#teacher-list")[i].innerHTML += ("<li><a href=# id=" + teachers[i].id +">" + teachers[i].name +"</a></li>");
    }
  })
  // ajaxRequest.catch(function(){
  //   console.log("Oops, something broke!");
  // })
}())
