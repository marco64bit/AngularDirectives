set up

if you use AngularJs, you must include the directive in your project followind this steps:

1 - include .js file in your directive folder
2 - include .css file in your scripts folder
3 - include .html file in your views/inc folder


<h3>Social component</h3>

  display responsive flex social buttons on your app
  
  require : fontawesome fonts http://fontawesome.io/
  
  example : <pre>
              &lt;social-bar vertical=&quot;false&quot;&gt; 
                &lt;social-facebook title=&quot;&quot;&gt;&lt;/social-facebook&gt;
                &lt;social-email&gt;&lt;/social-email&gt; 
                &lt;social-twitter &gt;&lt;/social-twitter&gt;
                &lt;social-google&gt;&lt;/social-google&gt;
              &lt;/social-bar&gt;</pre>
              
<b>social-bar</b>  contain social button
        
<ul><li>vertical [true|false]:    display your social buttons in vertical position or horizontal position      
</li><ul/>
<br>
<b>social</b> -[facebook,email,twitter,google]  social button type  
<br>
<ul><li>title : add an additional text inside a single button</li><ul/>
        
        
        <h3>Alphabetical component</h3>

filter a list of item for A,B,C,D,E....Z
  
  example : 
            <pre>&lt;alphabetical case=&quot;UPPER&quot; step=&quot;2&quot; row=&quot;false&quot;&gt;&lt;/alphabetical&gt;</pre>
            
<b>alphabetical</b> contain alphabet letters
  
<ul>        
<li>case[UPPER,lower]:    set alphabet in UPPER or lower case</li>
<li>step[number ]:        define next and prev slide step</li>
<li>row[true|false]      display item in vertical position or horizontal position     </li> 
</ul>  
  
