set up

if you use AngularJs, you must include the directive in your project followind this steps:

1 - include .js file in your directive folder
2 - include .css file in your scripts folder
3 - include .html file in your views/inc folder

Components : 

Social component: 

  description : display responsive flex social buttons on your app
  
  require : fontawesome fonts http://fontawesome.io/
  
  example : 
              <social-bar vertical="false">
                <social-facebook title=""></social-facebook>
                <social-email></social-email>
                <social-twitter ></social-twitter>
                <social-google></social-google>
              </social-bar>
  
  TAG : 
        "social-bar"  contain social button
        
        attributes : 
        
            vertical[true|false]:    display your social buttons in vertical position or horizontal position      

  TAG:
        "social-[facebook,email,twitter,google]"  social button type  
        
        attributes :
        
        title : add an additional text inside a single button
        
        
Alphabetical component:

  description : filter a list of item for A,B,C,D,E....Z
  
  example : 
            <alphabetical case="UPPER" step="2" row="false"></alphabetical>
            
  TAG : "alphabetical" contain alphabet letters
  
  attributes :
        
        case[UPPER,lower]:    set alphabet in UPPER or lower case
        step[number ]:        define next and prev slide step
        row[true|false]:      display item in vertical position or horizontal position      
  
  
