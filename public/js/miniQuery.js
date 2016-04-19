function miniQuery(str) {
  var selectors = [];
    if (str[0] === "#") {
      selectors = [(document.getElementById(str.slice(1)))];
    }
    else if (str[0] === ".") {
      selectors = (document.getElementsByClassName(str.slice(1)));
    }
    else {
      selectors = (document.getElementsByTagName(str));
    };

  selectors.hide = function() {
    for (var i=0; i < selectors.length; i++) {
      selectors[i].style.visibility = "hidden";
    }
  };

  selectors.show = function() {
    for (var i=0; i < selectors.length; i++) {
      selectors[i].style.visibility = "visible";
    }
  };

  selectors.addClass = function(className) {
    for(var i = 0; i < selectors.length; i++) {
      selectors[i].classList.add(className);
    }
  };

  selectors.removeClass = function(className){
    for (var i = 0; i < selectors.length; i++) {
      selectors[i].classList.remove(className);
    }
  };

  selectors.on = function(eventName, eventHandler) {
    for(var i = 0; i < selectors.length; i++) {
      selectors[i].addEventListener(eventName, eventHandler);
    }
  };

  selectors.trigger = function(eventName) {
    var event = new Event(eventName);
    for(var i = 0; i < selectors.length; i++) {
      selectors[i].dispatchEvent(event);
    }
  };

  selectors.ajax = function(args) {
    var promise = new Promise(function(resolve, reject){
      var request = new XMLHttpRequest();
      var dataURL = args.url;
      var type = args.type;
      var data = args.data;
      // var dataType = "JSON"
      request.open(type, dataURL);
      request.onload = function() {
        if (request.status >= 200 && request.status < 300){
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.send(data);
    })
    return promise;
  };

  return selectors;
}

var $ = function(selectors) {
  return miniQuery(selectors)
}

$.ready = function(func){
  if (document.readyState === "complete"){
    return func;
  }
  document.addEventListener("DomContentLoaded", func, false);
};

