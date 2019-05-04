  function getCarCredit(documents) {
   console.log("Your credit request is under consideration...");	
	  let promise = new Promise(function(resolve, reject) {
		      setTimeout(function() {
			  Math.random() > 0.4 ? resolve({}): reject("Sorry, your credit request is denied");
		  }, 2000);
			
	  });
	  return promise;
  }	
  
  
  function takeMoney(money){   // Object money = Object promise
	  console.info("Bank has given you money");
	  console.log("Money", money);
	  return money;
  }

  
  // After you've got the money from bank you can have an Object "car"
  function buyNewCar(money) {  
	  console.info("Congratulations! You have a new Car!");
	  let car = {};              
	  console.log("Car", car);
	  return car;  
	  
  }  
  
 
  // After you've bought the car you can make the insurance
  function getInsurance(car) {
	 console.log("You have car insurance to feel safety abroad!");
	 let insurance = {};
	 console.log("Insurance", insurance);
	 
  }  
  // Then let's rent a hotel room
   function rentHotel() {
	  console.log("Hotel is rented");
	  let booking = {};
	  console.log("Booking", booking);
	  
  }
  
  
  function goToEurope() {
	  console.info("Finally you are in Europe! And you have all you need!");
  }	  
  


	  
	getCarCredit()
       .then(takeMoney)
       .then(buyNewCar)	 
       .then(getInsurance)
       .then(rentHotel)	
       .then(goToEurope)	   
	   .catch(error => console.log(error));
   
   