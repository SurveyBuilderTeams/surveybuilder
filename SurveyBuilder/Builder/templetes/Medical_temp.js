function setupMedTemp(){
	//title
	document.getElementById("yourTitle").innerHTML = "Medical Template";
	document.getElementById("UserTitle").innerHTML = "Medical Template - SurveyBuilder";
	//clear
	document.getElementById("Insert-Object").innerHTML = "";
	//title
	let heading = document.createElement("DIV");
	heading.className = "heading";
	let a = Math.random().toString(36).substring(7);
	heading.id = a;
	heading.innerHTML = "<h1>Medical Template</h1>";
	document.getElementById("Insert-Object").appendChild(heading);
	//name 
	let name = document.createElement("DIV");
	name.className = "Name";
	let b = Math.random().toString(36).substring(7);
	name.id = b;
	name.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i>First Name: <input type='text' placeholder='First Name' id='FirstName' name='FirstName' required='true'/><br/> <i class='fas fa-asterisk' style='color:red;'></i>Middle Name: <input type='text' placeholder='Middle Name' id='MName' name='MName' required='true'/><br/> <i class='fas fa-asterisk' style='color:red;'></i>Last Name: <input type='text' placeholder='Last name' id='LastName' name='LastName' required='true'/>";
	
	document.getElementById("Insert-Object").appendChild(name);
	//address
	let address = document.createElement("DIV");
	address.className = "Address";
	let c = Math.random().toString(36).substring(7);
	address.id = c;
	let street = "<i class='fas fa-asterisk' style='color:red;'></i> Street 1: <input type='text' placeholder='Street 1' id='Street' required='true'/>";
		let street2 = "Street 2: <input type='text' placeholder='Street 2' id='Street2'/>";
	    let City = "<i class='fas fa-asterisk' style='color:red;'></i> City: <input type='text' placeholder='City' id='City' required='true'/>";
	    let State = "<i class='fas fa-asterisk' style='color:red;'></i> State: <input type='text' placeholder='State' id='State' required='true'/>";
	    let Zip = "<i class='fas fa-asterisk' style='color:red;'></i> Zip Code: <input type='text' placeholder='Zip code' pattern='[0-9]{3,5}' id='Zip' required='true'/>";
	    let Country = "<i class='fas fa-asterisk' style='color:red;'></i> Country: <select id='countries-select' required='true'><option value='dnt' disabled='true'>[Do Not Touch]</option></select>";
		let allData = street + "<br>" + street2 + "<br>" + City + "<br>" + Zip + "<br>" + Country;
	   address.innerHTML = allData;
	   document.getElementById("Insert-Object").appendChild(address);
	   var selects = document.getElementById("countries-select"),
	      arr = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
		
		for(var i = 0; i < arr.length; i++){
			 var options = document.createElement("OPTION");
			 txt = document.createTextNode(arr[i]);
			 options.appendChild(txt);
			 options.setAttribute("value", arr[i]);
			 selects.insertBefore(options,selects.lastChild);
			 //console.log(Selects);
		 }
		 let setdisplay = prompt("Enter a number from 0-195\nUse 0 to set Default\n0 is at the top of the list");
		 if(setdisplay == null){
			 console.error("Medical_temp: countires was null");
		 }
		 document.getElementById("countries-select").options[setdisplay].setAttribute("selected", "selected");
		 //document.getElementById("countries-select").options[196].disabled = true;
		
		 
		 //date-of-birth
		 let dob = document.createElement("DIV");
		 dob.className = "Date";
		 let d = Math.random().toString(36).substring(7);
		 dob.id = d;
		 dob.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i>&nbsp;Enter DOB: <input required='true' type='date' name='Date' id='Date' />";
		 document.getElementById("Insert-Object").appendChild(dob);
		 //time 
		 let time = document.createElement("DIV");
		 time.className = "Time";
		 let e = Math.random().toString(36).substring(7);
	     time.id = e;
	     time.innerHTML = "<i class='fas fa-asterisk' style='color:red;'></i>&nbsp;Enter Time of Appointment: <input type='time' required='true' id='Time' name='Time'/>";
          document.getElementById("Insert-Object").appendChild(time);
}