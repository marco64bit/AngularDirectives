'use strict';

angular.module('changeRingtonesApp')
.directive('socialFacebook', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      link: function postLink(scope, element, attrs) {
        if(!attrs.title)
          attrs.title="";
        element.replaceWith("<a class='facebook'>"+attrs.title+"</a>");
      }
    };
})
.directive('socialTwitter', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: "<a class='twitter'></a>",
      link: function postLink(scope, element, attrs) {

      }
    };
})
.directive('socialGoogle', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: "<a class='google'></a>",
         link: function postLink(scope, element, attrs) {

    }
    };
})
.directive('socialEmail', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: "<a class='email'></a>",
         link: function postLink(scope, element, attrs) {

    }
    };
})
.directive('socialBar', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      compile: function(element,attrs) {
         var display;
         if(attrs.vertical=="true")
          display = "col"
         else
          display = "row"

         element.replaceWith("<div class='socialCont'><div class='social-"+display+" social-large' ng-transclude> </div></div>");
      },
      link: function postLink(scope, element, attrs) {

      }
    };
})



.directive('alphabetical', function () {
    return {
      restrict: 'E',
      scope: {active:"&"},
      templateUrl: 'views/inc/alphabetical.html',
      link: function($scope,element,attrs){
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(attrs.case=="lower"){str = str.toLowerCase()}
        $scope.alphabeth = str.split("");
        
        $scope.setActive = function(active) {$scope.active=active; $scope.$parent.active = active}
        var alpha = document.querySelector(".Alphabetical-wrap"),
        alphaWidth = alpha.offsetWidth,
        screenWidth = document.querySelector(".Alphabetical").offsetWidth,
        step = 2;
        var pos = 0;

        if(attrs.step)step=attrs.step
        $scope.displayLeft=false;
        $scope.displayRight=true;
        if(document.querySelector('body').offsetWidth>762){$scope.displayRight=false;$scope.displayLeft=false;}

        $scope.AlphabeticalPrev = function(){
          if(pos<0)
          {
            $scope.displayRight=true;
            pos+=(alphaWidth-(screenWidth))/step;
            translate();
            if(pos>=0)$scope.displayLeft=false;
          }
        };
        $scope.AlphabeticalNext = function(){
          if(pos>-(alphaWidth-(screenWidth)))
          {
            $scope.displayLeft=true;
            pos+=-((alphaWidth-(screenWidth))/step);
            translate();
            if(pos<=-(alphaWidth-(screenWidth))) $scope.displayRight=false;
          }
        };
        function translate(){
          alpha.style.webkitTransform = "translateX("+pos+"px)";
          alpha.style.MozTransform = "translateX("+pos+"px)";
        }
        if(attrs.row=="true"){$scope.row="row"}
        if(attrs.case=="lower"){str = str.toLowerCase()}
      }
    };
})


