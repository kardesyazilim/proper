/*
leonidas gorgo
molonlabetr@gmail.com
www.kardesyazilim.com

GNU General Public License
http://www.gnu.org/licenses/gpl-3.0.txt
ozgur yazılımı desteklemektedir.
kaynak kodları istediğiniz şekilde kullanabilirsiniz.
firmanın telif haklarını dikkate almanız şartıyla

User       :  polemarch
Document   :  login.js
Created on :  Dec 20, 2010, 11:21:53 AM
Encoding   :  UTF-8
*/
$(document).ready(function()
{
	$("#login_form").submit(function()
	{
		//remove all the class add the messagebox classes and start fading
		$("#msgbox").removeClass().addClass('messagebox').text('Kontrol ediliyor....').fadeIn(1000);
		//check the username exists or not from ajax
		$.post("LoginCheck.php",{ user_name:$('#username').val(),password:$('#password').val(),s3capcha:$('input:radio[name=s3capcha]:checked').val(),rand:Math.random() } ,function(data)
        {
		  if(data=='yes') //if correct login detail
		  {
		  	$("#msgbox").fadeTo(200,0.1,function()  //start fading the messagebox
			{ 
			  //add message and change the class of the box and start fading
			  $(this).html('Başarılı.....').addClass('messageboxok').fadeTo(900,1,
              function()
			  { 
			  	 //redirect to secure page
				 document.location='./';
			  });
			  
			});
		  }
		  else 
		  {
		  	$("#msgbox").fadeTo(200,0.1,function() //start fading the messagebox
			{ 
			  //add message and change the class of the box and start fading
			  $(this).html('Hatalı giriş..').addClass('messageboxerror').fadeTo(900,1,
                   function()
			  { 
			  	 //redirect to secure page
				 document.location='./';
			  }    
                  );
			});		
          }
				
        });
 		return false; //not to post the  form physically
	});
	//now call the ajax also focus move from 
//	$("#password").blur(function()
//	{
//		$("#login_form").trigger('submit');
//	});


});

