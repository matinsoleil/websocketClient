var connection;

    connection.onerror = function(event) {
       console.log(event);
    };

    connection.onopen = function(event) {
    
	  console.log('open');
	
    };

    connection.onmessage = function(event) {

 
	    var received_msg = event.data;
                  console.log(received_msg);
    };	


    connection = new WebSocket('ws://Admin:Admin@easy.mx:8080/3/157',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxlamFuZHJhLmZsb3Jlc0B0ZXNzZW5ncm91cC5teCIsImlkQ2xpZW50QXBwIjoiMiIsIm1vYmlsZUlkTnVtYmVyIjoiMiIsImlkRW1wbG95ZWUiOiIiLCJpZFVzZXIiOiI1NjYyOWU1Ny1hNzRjLWU3MTEtODBjMy0xODY2ZGE0OTE4MGUiLCJpZExlYWQiOiIiLCJpZFJvbGUiOiIwIiwibWluU2Vzc2lvblRpbWUiOiIwIiwiaWRQYXNzd29yZFJlcXVlc3QiOiIiLCJpZENvbXBhbnkiOiIiLCJqdGkiOiJiMTI1OWQzMi0wZDBjLTQ1MWEtODliNS03MTIxY2E1ZThjMjgiLCJpYXQiOjE1MzY5MzY0NTgsIm5iZiI6MTUzNjkzNTg1OCwiZXhwIjoxNTM2OTY4ODU4LCJpc3MiOiJPcmlvblN5c3RlbVRva2VuIiwiYXVkIjoiaHR0cDovLzAuMC4wLjA6NTAwMC8ifQ.WqQu5Ah8ExFFI8L97-bhJPWFL9atLEzSpKucXQNICpm");

			 
	connection.send('luis 100');
