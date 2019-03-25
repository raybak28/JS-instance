
  //******************************************************************** Preliminary variables  *************************************************************************************//

var flag = 0;  // this variable defines correctness of ships configuration
var table1 = document.getElementById("t1");
var table2 = document.getElementById("t2");
	
var userArr = []; // main Array with User ships

     for (var i=0; i < 10; i++) {
     userArr[i] = [];
	}
	
var userArrAdded = []; // additional Array with User ships

     for (var x=0; x < 16; x++) {
     userArrAdded[x] = [];
	}
   
var cellCountUser = 20;
var cellCountComp = 20;
	
var compArr = [];  // main Array with Computer ships

     for (var i=0; i < 10; i++) {
     compArr[i] = [];
	}
	
var compArrAdded = [];  // additional Array with Computer ships

     for (var x=0; x < 16; x++) {
     compArrAdded[x] = [];
	}

	
	//**************************************************************** Create User and Computer ships area *********************************************************************//
  
  CreateUserBattleField();
  
  // Create User ships configuration
  function CreateUserBattleField() {
    
  $('#t1 td').click( function() {
    
	
	if(flag == 0) {
	  $(this).toggleClass("ship-cell");
	} else { 
      $(this).preventDefault();
	}
  } );  
  
 } 
 
    
   button.addEventListener("click", CreateUserShipsArray);
   
   CreateCompShipsArray();
   
   
   // According to chosen cells in User ships area we populate the values in userArr and userArrAdded (need to avoid "undefined" in neighbour cell estimation snippet)
   function CreateUserShipsArray() {
        	
		
	var checkUserDecks = 0;
	flag = 1; 
              
         for (var r = 0, n = table1.rows.length; r < n; r++) {
         for (var c = 0, m = table1.rows[r].cells.length; c < m; c++) {
            if (table1.rows[r].cells[c].classList.contains('ship-cell')) {
				userArr[r][c] = 1;
				checkUserDecks++;
				
							
			} else {
			    userArr[r][c] = 0;
				
			}	
			
			
        }
    }
	
	for (var x = 0; x < 16; x++) {
    for (var y = 0; y < 16; y++) { 
	    userArrAdded[x][y] = 0;
	}
    }	
	
	
	
	    for (var i = 0; i < userArr.length; i++) {
        for (var j = 0; j < userArr.length; j++) {
		    userArrAdded[i+3][j+3] = userArr[i][j];
		}
        }		
		   
	
    for (var i = 3; i < userArrAdded.length - 3; i++) {
    for (var j = 3; j < userArrAdded.length - 3; j++) {
	
	    // make sure that different ships have at least 1 cell between them	    
		if (((userArrAdded[i][j] == 1)&&(userArrAdded[i+1][j+1] == 1))||((userArrAdded[i][j] == 1)&&(userArrAdded[i+1][j-1] == 1))) { 
		    flag = 0;
		    alert("Ships position isn't right. Re-configure your ships properly and start the game again!");
		} 
			
	}
	} 
	
	   // check the deck count in User ships area, all ships should have 20 decks
	   if (checkUserDecks != cellCountUser) {  
	       flag = 0;
	       alert("Ships configuration isn't right. Re-configure your ships properly and start the game again!");	
	   }
	
	
	
	for (var i = 3; i < userArrAdded.length - 3; i++) {
    for (var j = 3; j < userArrAdded.length - 3; j++) {
	 
	   	
      if ((userArrAdded[i][j] == 1)&&(userArrAdded[i][j+1] == 1)&&(userArrAdded[i][j+2] == 1)&&(userArrAdded[i][j+3] == 1)) {
	     userArrAdded[i][j] = 140;  //four-deck ship / horizontal
		 userArrAdded[i][j+1] = 140;  //four-deck ship / horizontal
		 userArrAdded[i][j+2] = 140;  //four-deck ship / horizontal
		 userArrAdded[i][j+3] = 140;  //four-deck ship / horizontal
      }
		
	  if ((userArrAdded[i][j] == 1)&&(userArrAdded[i+1][j] == 1)&&(userArrAdded[i+2][j] == 1)&&(userArrAdded[i+3][j] == 1)) {
	     userArrAdded[i][j] = 141;  //four-deck ship / vertical
		 userArrAdded[i+1][j] = 141;  //four-deck ship / vertical
		 userArrAdded[i+2][j] = 141;  //four-deck ship / vertical
		 userArrAdded[i+3][j] = 141;  //four-deck ship / vertical
      }	 
	  
	  if ((userArrAdded[i][j] == 1)&&(userArrAdded[i][j+1] == 1)&&(userArrAdded[i][j+2] == 1)) {
	     userArrAdded[i][j] = 130;  //three-deck ship / horizontal
		 userArrAdded[i][j+1] = 130;  //three-deck ship / horizontal
		 userArrAdded[i][j+2] = 130;  //three-deck ship / horizontal
	  }
	  
	  if ((userArrAdded[i][j] == 1)&&(userArrAdded[i+1][j] == 1)&&(userArrAdded[i+2][j] == 1)) {
	     userArrAdded[i][j] = 131;  //three-deck ship / vertical
		 userArrAdded[i+1][j] = 131;  //three-deck ship / vertical
		 userArrAdded[i+2][j] = 131;  //three-deck ship / vertical
	  }
	    
	  if ((userArrAdded[i][j] == 1)&&(userArrAdded[i][j+1] == 1)) {
	     userArrAdded[i][j] = 120;  //two-deck ship / horizontal
		 userArrAdded[i][j+1] = 120;  //two-deck ship / horizontal
		 
	  }

      if ((userArrAdded[i][j] == 1)&&(userArrAdded[i+1][j] == 1)) {
	     userArrAdded[i][j] = 121;  //two-deck ship / vertical
		 userArrAdded[i+1][j] = 121;  //two-deck ship / vertical
		 
	  }	  
		
	  if ((userArrAdded[i][j] == 1)&&(userArrAdded[i][j-1] != 1)&&(userArrAdded[i][j+1] != 1)&&(userArrAdded[i-1][j] != 1)&&(userArrAdded[i+1][j] != 1)) {
	     userArrAdded[i][j] = 110;  //one-deck ship
      }  	
	 
	}
	}
	
	
	return userArrAdded;
	
		
}	



    function CreateCompShipsArray() {
   
   
	for (var x = 0; x < 16; x++) {
    for (var y = 0; y < 16; y++) { 
	    compArrAdded[x][y] = 0;
	}
    }	
	
      SetFourDeckShip();
	  SetThreeDeckShip();	
	  SetTwoDeckShip();
	  SetOneDeckShip();
      SetThreeDeckShip();	
	  SetTwoDeckShip();
	  SetOneDeckShip();
	  SetTwoDeckShip();	
	  SetOneDeckShip();
	  SetOneDeckShip();
	
	
	 
	    for (var i = 0; i < compArr.length; i++) {
        for (var j = 0; j < compArr.length; j++) {
		     compArr[i][j] = compArrAdded[i+3][j+3];
		}
        }	
	 
     // To show computer ships uncomment the code below (for-for)  //
	 
	/*    for (var i = 0; i < compArr.length; i++) {
        for (var j = 0; j < compArr.length; j++) {
	    
		if ((compArr[i][j] != 0)&&(compArr[i][j] != 999)) {
		table2.rows[i].cells[j].classList.add('ship-cell');
		
	    }
		
	}	
	}  */
	
        return compArr;		
		return compArrAdded;
        
} 


   
   function SetOneDeckShip() {
	 
	    var indexSet = false;
		
		while (indexSet == false) {
		
		var x1 = getRandom(9);
		var y1 = getRandom(9);
		
		
		if (compArrAdded[x1+3][y1+3] == 0) {
		  indexSet = true;
		  compArrAdded[x1+3][y1+3] = 110;
		  compArrAdded[x1+2][y1+2] = 999; // 999 - restricted cell (near the ship)
		  compArrAdded[x1+2][y1+3] = 999;
		  compArrAdded[x1+2][y1+4] = 999;
		  compArrAdded[x1+3][y1+2] = 999;
		  compArrAdded[x1+3][y1+4] = 999;
		  compArrAdded[x1+4][y1+2] = 999;
		  compArrAdded[x1+4][y1+3] = 999;
		  compArrAdded[x1+4][y1+4] = 999;
		  
		  		  		  
		}
				
	}	
		
		return compArrAdded;
	}
	
   
    function SetTwoDeckShip() {
	 
	    var indexSet = false;
		
		while (indexSet == false) {
		
		var x2 = getRandom(9);
		var y2 = getRandom(9);
		var pos2 = getRandom(1); // 0 - horizontal; 1 - vertical
		
		if ((pos2 == 0)&&(y2 <= 8)&&(compArrAdded[x2+3][y2+3] == 0)&&(compArrAdded[x2+3][y2+4] == 0)) {
		  indexSet = true;
		  compArrAdded[x2+3][y2+3] = 120;
		  compArrAdded[x2+3][y2+4] = 120;
		  compArrAdded[x2+2][y2+2] = 999;  // 999 - restricted cell (near the ship)
		  compArrAdded[x2+2][y2+3] = 999;
		  compArrAdded[x2+2][y2+4] = 999;
		  compArrAdded[x2+2][y2+5] = 999;
		  compArrAdded[x2+3][y2+2] = 999;
		  compArrAdded[x2+3][y2+5] = 999;
		  compArrAdded[x2+4][y2+2] = 999;
		  compArrAdded[x2+4][y2+3] = 999;
		  compArrAdded[x2+4][y2+4] = 999;
		  compArrAdded[x2+4][y2+5] = 999;
		  
		  		  
		}
		
		
		if ((pos2 == 0)&&(y2 > 8)&&(compArrAdded[x2+3][y2+3] == 0)&&(compArrAdded[x2+3][y2+2] == 0)) {
		  indexSet = true;
		  compArrAdded[x2+3][y2+3] = 120;
		  compArrAdded[x2+3][y2+2] = 120;
		  compArrAdded[x2+2][y2+4] = 999;  // 999 - restricted cell (near the ship)
		  compArrAdded[x2+2][y2+3] = 999;
		  compArrAdded[x2+2][y2+2] = 999;
		  compArrAdded[x2+2][y2+1] = 999;
		  compArrAdded[x2+3][y2+4] = 999;
		  compArrAdded[x2+3][y2+1] = 999;
		  compArrAdded[x2+4][y2+4] = 999;
		  compArrAdded[x2+4][y2+3] = 999;
		  compArrAdded[x2+4][y2+2] = 999;
		  compArrAdded[x2+4][y2+1] = 999;
		  
		  
		}  
		
		
		if ((pos2 == 1)&&(x2 <= 8)&&(compArrAdded[x2+3][y2+3] == 0)&&(compArrAdded[x2+4][y2+3] == 0)) {
		  indexSet = true;
		  compArrAdded[x2+3][y2+3] = 121;
		  compArrAdded[x2+4][y2+3] = 121;
		  compArrAdded[x2+2][y2+2] = 999;  // 999 - restricted cell (near the ship)
		  compArrAdded[x2+3][y2+2] = 999;
		  compArrAdded[x2+4][y2+2] = 999;
		  compArrAdded[x2+5][y2+2] = 999;
		  compArrAdded[x2+2][y2+3] = 999;
		  compArrAdded[x2+5][y2+3] = 999;
		  compArrAdded[x2+2][y2+4] = 999;
		  compArrAdded[x2+3][y2+4] = 999;
		  compArrAdded[x2+4][y2+4] = 999;
		  compArrAdded[x2+5][y2+4] = 999;
				
		
		 }	
		 
		 if ((pos2 == 1)&&(x2 > 8)&&(compArrAdded[x2+3][y2+3] == 0)&&(compArrAdded[x2+2][y2+3] == 0)) {
		  indexSet = true;
		  compArrAdded[x2+3][y2+3] = 121;
		  compArrAdded[x2+2][y2+3] = 121;
		  compArrAdded[x2+4][y2+2] = 999;  // 999 - restricted cell (near the ship)
		  compArrAdded[x2+3][y2+2] = 999;
		  compArrAdded[x2+2][y2+2] = 999;
		  compArrAdded[x2+1][y2+2] = 999;
		  compArrAdded[x2+4][y2+3] = 999;
		  compArrAdded[x2+1][y2+3] = 999;
		  compArrAdded[x2+4][y2+4] = 999;
		  compArrAdded[x2+3][y2+4] = 999;
		  compArrAdded[x2+2][y2+4] = 999;
		  compArrAdded[x2+1][y2+4] = 999;
		 	 
		
		}
	}	
		
		return compArrAdded;
	}
	
	
    function SetThreeDeckShip() {
	 
	    var indexSet = false;
		
		while (indexSet == false) {
		
		var x3 = getRandom(9);
		var y3 = getRandom(9);
		var pos3 = getRandom(1); // 0 - horizontal; 1 - vertical
		
		
		if ((pos3 == 0)&&(y3 <= 7)&&(compArrAdded[x3+3][y3+3] == 0)&&(compArrAdded[x3+3][y3+4] == 0)&&(compArrAdded[x3+3][y3+5] == 0)) {
		  indexSet = true;
		  compArrAdded[x3+3][y3+3] = 130;
		  compArrAdded[x3+3][y3+4] = 130;
		  compArrAdded[x3+3][y3+5] = 130;
		  compArrAdded[x3+2][y3+2] = 999; // 999 - restricted cell (near the ship)
		  compArrAdded[x3+2][y3+3] = 999;
		  compArrAdded[x3+2][y3+4] = 999;
		  compArrAdded[x3+2][y3+5] = 999;
		  compArrAdded[x3+2][y3+6] = 999;
		  compArrAdded[x3+3][y3+2] = 999;
		  compArrAdded[x3+3][y3+6] = 999;
		  compArrAdded[x3+4][y3+2] = 999;
		  compArrAdded[x3+4][y3+3] = 999;
		  compArrAdded[x3+4][y3+4] = 999;
		  compArrAdded[x3+4][y3+5] = 999;
		  compArrAdded[x3+4][y3+6] = 999;
		  
		}
		
		if ((pos3 == 0)&&(y3 > 7)&&(compArrAdded[x3+3][y3+3] == 0)&&(compArrAdded[x3+3][y3+2] == 0)&&(compArrAdded[x3+3][y3+1] == 0)) {
		  indexSet = true;
		  compArrAdded[x3+3][y3+3] = 130;
		  compArrAdded[x3+3][y3+2] = 130;
		  compArrAdded[x3+3][y3+1] = 130;
		  compArrAdded[x3+2][y3+4] = 999; // 999 - restricted cell (near the ship)
		  compArrAdded[x3+2][y3+3] = 999;
		  compArrAdded[x3+2][y3+2] = 999;
		  compArrAdded[x3+2][y3+1] = 999;
		  compArrAdded[x3+2][y3] = 999;
		  compArrAdded[x3+3][y3+4] = 999;
		  compArrAdded[x3+3][y3] = 999;
		  compArrAdded[x3+4][y3+4] = 999;
		  compArrAdded[x3+4][y3+3] = 999;
		  compArrAdded[x3+4][y3+2] = 999;
		  compArrAdded[x3+4][y3+1] = 999;
		  compArrAdded[x3+4][y3] = 999;
		  		  		  
		}  
		
		if ((pos3 == 1)&&(x3 <= 7)&&(compArrAdded[x3+3][y3+3] == 0)&&(compArrAdded[x3+4][y3+3] == 0)&&(compArrAdded[x3+5][y3+3] == 0)) {
		  indexSet = true;
		  compArrAdded[x3+3][y3+3] = 131;
		  compArrAdded[x3+4][y3+3] = 131;
		  compArrAdded[x3+5][y3+3] = 131;
		  compArrAdded[x3+2][y3+2] = 999;  // 999 - restricted cell (near the ship)
		  compArrAdded[x3+3][y3+2] = 999; 
		  compArrAdded[x3+4][y3+2] = 999;
		  compArrAdded[x3+5][y3+2] = 999;
		  compArrAdded[x3+6][y3+2] = 999;
		  compArrAdded[x3+2][y3+3] = 999;
		  compArrAdded[x3+6][y3+3] = 999;		  
		  compArrAdded[x3+2][y3+4] = 999;
		  compArrAdded[x3+3][y3+4] = 999;
		  compArrAdded[x3+4][y3+4] = 999;
		  compArrAdded[x3+5][y3+4] = 999;
		  compArrAdded[x3+6][y3+4] = 999;
		  
		}  
		
		if ((pos3 == 1)&&(x3 > 7)&&(compArrAdded[x3+3][y3+3] == 0)&&(compArrAdded[x3+2][y3+3] == 0)&&(compArrAdded[x3+1][y3+3] == 0)) {
		  indexSet = true;
		  compArrAdded[x3+3][y3+3] = 131;
		  compArrAdded[x3+2][y3+3] = 131;
		  compArrAdded[x3+1][y3+3] = 131;
		  compArrAdded[x3+4][y3+2] = 999;  // 999 - restricted cell (near the ship)
		  compArrAdded[x3+3][y3+2] = 999;
		  compArrAdded[x3+2][y3+2] = 999;
		  compArrAdded[x3+1][y3+2] = 999;
		  compArrAdded[x3][y3+2] = 999;
		  compArrAdded[x3+4][y3+3] = 999;
		  compArrAdded[x3][y3+3] = 999;		  
		  compArrAdded[x3+4][y3+4] = 999;
		  compArrAdded[x3+3][y3+4] = 999;
		  compArrAdded[x3+2][y3+4] = 999;
		  compArrAdded[x3+1][y3+4] = 999;
		  compArrAdded[x3][y3+4] = 999;
		  		  
		
		}
		
	  }	
		
		return compArrAdded;
	}
   
   
   function SetFourDeckShip() {
	    		
		var x4 = getRandom(9);
		var y4 = getRandom(9);
		var pos4 = getRandom(1);  // 0 - horizontal; 1 - vertical
		
		
		if ((pos4 == 0)&&(y4 <= 6)) {
		  compArrAdded[x4+3][y4+3] = 140;
		  compArrAdded[x4+3][y4+4] = 140;
		  compArrAdded[x4+3][y4+5] = 140;
		  compArrAdded[x4+3][y4+6] = 140;
		  compArrAdded[x4+2][y4+2] = 999;  // 999 - restricted cell (near the ship)
		  compArrAdded[x4+2][y4+3] = 999;
		  compArrAdded[x4+2][y4+4] = 999;
		  compArrAdded[x4+2][y4+5] = 999;
		  compArrAdded[x4+2][y4+6] = 999;
		  compArrAdded[x4+2][y4+7] = 999;
		  compArrAdded[x4+3][y4+2] = 999;
		  compArrAdded[x4+3][y4+7] = 999;
		  compArrAdded[x4+4][y4+2] = 999;
		  compArrAdded[x4+4][y4+3] = 999;
		  compArrAdded[x4+4][y4+4] = 999;
		  compArrAdded[x4+4][y4+5] = 999;
		  compArrAdded[x4+4][y4+6] = 999;
		  compArrAdded[x4+4][y4+7] = 999;
		
		}
		
		if ((pos4 == 0)&&(y4 > 6)) {
		  compArrAdded[x4+3][y4+3] = 140;
		  compArrAdded[x4+3][y4+2] = 140;
		  compArrAdded[x4+3][y4+1] = 140;
		  compArrAdded[x4+3][y4] = 140;
		  compArrAdded[x4+2][y4+4] = 999;  // 999 - restricted cell (near the ship)
		  compArrAdded[x4+2][y4+3] = 999;
		  compArrAdded[x4+2][y4+2] = 999;
		  compArrAdded[x4+2][y4+1] = 999;
		  compArrAdded[x4+2][y4] = 999;
		  compArrAdded[x4+2][y4-1] = 999;
		  compArrAdded[x4+3][y4+4] = 999;
		  compArrAdded[x4+3][y4-1] = 999;
		  compArrAdded[x4+4][y4+4] = 999;
		  compArrAdded[x4+4][y4+3] = 999;
		  compArrAdded[x4+4][y4+2] = 999;
		  compArrAdded[x4+4][y4+1] = 999;
		  compArrAdded[x4+4][y4] = 999;
		  compArrAdded[x4+4][y4-1] = 999;
		  		
		}
		
		if ((pos4 == 1)&&(x4 <= 6)) {
		  compArrAdded[x4+3][y4+3] = 141;
		  compArrAdded[x4+4][y4+3] = 141;
		  compArrAdded[x4+5][y4+3] = 141;
		  compArrAdded[x4+6][y4+3] = 141;
		  compArrAdded[x4+2][y4+2] = 999;  // 999 - restricted cell (near the ship)
		  compArrAdded[x4+3][y4+2] = 999;
		  compArrAdded[x4+4][y4+2] = 999;
		  compArrAdded[x4+5][y4+2] = 999;
		  compArrAdded[x4+6][y4+2] = 999;
		  compArrAdded[x4+7][y4+2] = 999;
		  compArrAdded[x4+2][y4+3] = 999;
		  compArrAdded[x4+7][y4+3] = 999;
		  compArrAdded[x4+2][y4+4] = 999;
		  compArrAdded[x4+3][y4+4] = 999;
		  compArrAdded[x4+4][y4+4] = 999;
		  compArrAdded[x4+5][y4+4] = 999;
		  compArrAdded[x4+6][y4+4] = 999;
		  compArrAdded[x4+7][y4+4] = 999;
		
		}
		
		if ((pos4 == 1)&&(x4 > 6)) {
		  compArrAdded[x4+3][y4+3] = 141;
		  compArrAdded[x4+2][y4+3] = 141;
		  compArrAdded[x4+1][y4+3] = 141;
		  compArrAdded[x4][y4+3] = 141;
		  compArrAdded[x4+4][y4+2] = 999;  // 999 - restricted cell (near the ship)
		  compArrAdded[x4+3][y4+2] = 999;
		  compArrAdded[x4+2][y4+2] = 999;
		  compArrAdded[x4+1][y4+2] = 999;
		  compArrAdded[x4][y4+2] = 999;
		  compArrAdded[x4-1][y4+2] = 999;
		  compArrAdded[x4+4][y4+3] = 999;
		  compArrAdded[x4-1][y4+3] = 999;
		  compArrAdded[x4+4][y4+4] = 999;
		  compArrAdded[x4+3][y4+4] = 999;
		  compArrAdded[x4+2][y4+4] = 999;
		  compArrAdded[x4+1][y4+4] = 999;
		  compArrAdded[x4][y4+4] = 999;
		  compArrAdded[x4-1][y4+4] = 999;
		
		}
		
		return compArrAdded;
		
}	

         
  //**************************************************************** Supplementary Variables  ***********************************************************************************//     
  
     
    var xCompShot;  // vertical coordinate, computer shot
	var yCompShot;  // horizontal coordinate, computer shot
    var xUserShot;  // vertical coordinate, user shot
	var yUserShot;	// horizontal coordinate, user shot
	var randomCoord = true;  // define random / non-random computer shot
	var lastXCompShot;  // vertical coordinate, last computer shot
	var lastYCompShot;  // horizontal coordinate, last computer shot
	var iteration = 1;  // define fire direction in case first computer shot was successful
	var deckCount = 0;  // define a kind of user ship 
	
	
	
	//******************************************************** The main function: User and Computer fire one by one **************************************************************//
	
	
	t2.addEventListener('click', function() {
    
	FireCompArea(compArrAdded, cellCountComp, xUserShot, yUserShot); 
	playShotSound();
	
	defineCompShotCoord();
	FireUserArea(userArrAdded, cellCountUser, xCompShot, yCompShot);
	
	if ((userArrAdded[xCompShot][yCompShot] >= 710)&&(userArrAdded[xCompShot][yCompShot] <= 741)) {
	    randomCoord = true;
		iteration = 1;
		deckCount = 0;
	  }
	showCompShips(compArr, cellCountUser);  
		
});
	
	//**********************************************************   Fire to User Ships Area  *********************************************************************************************//
	
	
	function defineCompShotCoord() {
	  var validCoord = false;
	  
	  // computer starts to fire randomly 
	  if (randomCoord) {
	  while (validCoord == false) {
	  xCompShot = getRandom(9) + 3;
	  yCompShot = getRandom(9) + 3;
	  
	  // empty cell
	  if (userArrAdded[xCompShot][yCompShot] == 0){
	    validCoord = true;
	  }
	  
	  // one-deck ship cell
	  if (userArrAdded[xCompShot][yCompShot] == 110){
	    validCoord = true;
	  }
	  
	   // two-deck ship cell
	   if ((userArrAdded[xCompShot][yCompShot] == 120)||(userArrAdded[xCompShot][yCompShot] == 121)){
	    validCoord = true;
		randomCoord = false;
		deckCount = 2;
		lastXCompShot = xCompShot;
		lastYCompShot = yCompShot;
	  }
	  
	  // tree-deck ship cell
	  if ((userArrAdded[xCompShot][yCompShot] == 130)||(userArrAdded[xCompShot][yCompShot] == 131)){
	    validCoord = true;
		randomCoord = false;
		deckCount = 3;
		lastXCompShot = xCompShot;
		lastYCompShot = yCompShot;
	  }
	  
	  // four-deck ship cell
	  if ((userArrAdded[xCompShot][yCompShot] == 140)||(userArrAdded[xCompShot][yCompShot] == 141)){
	    validCoord = true;
		randomCoord = false;
		deckCount = 4;
		lastXCompShot = xCompShot;
		lastYCompShot = yCompShot;
	  }
	  
	 }
	  
	} else {
	    findNeighborDeck();  // in case first shot was successful, need to fire near this cell
	} 
}	
	
	
	
	function findNeighborDeck() {
		
		 var iterDef = false; // define validity of shot in particular cell
		 
		 while (iterDef == false) {
		 
		 // two-deck ship cell
		 if ((deckCount == 2)&&(iteration == 1)&&(lastYCompShot < 12)&&(userArrAdded[lastXCompShot][lastYCompShot + 1] != 555)&&(userArrAdded[lastXCompShot][lastYCompShot + 1] != 999)) { 
	    xCompShot = lastXCompShot;
		yCompShot = lastYCompShot + 1;
		iterDef = true;
		if ((userArrAdded[xCompShot][yCompShot] == 120)||(userArrAdded[xCompShot][yCompShot] == 121)) {
		  lastXCompShot = xCompShot;
		  lastYCompShot = yCompShot;
		
		} else {
		iteration++;
		}
		break;
	 } 
	    
		if ((deckCount == 2)&&(iteration == 1)&&((lastYCompShot >= 12)||(userArrAdded[lastXCompShot][lastYCompShot + 1] == 555)||(userArrAdded[lastXCompShot][lastYCompShot + 1] == 999))) {
		iteration++;
		}
		
		
		if ((deckCount == 2)&&(iteration == 2)&&(lastYCompShot > 3)&&(userArrAdded[lastXCompShot][lastYCompShot - 1] != 555)&&(userArrAdded[lastXCompShot][lastYCompShot - 1] != 999)) { 
	    xCompShot = lastXCompShot;
		yCompShot = lastYCompShot - 1;
		iterDef = true;
		if ((userArrAdded[xCompShot][yCompShot] == 120)||(userArrAdded[xCompShot][yCompShot] == 121)) {
		  lastXCompShot = xCompShot;
		  lastYCompShot = yCompShot;
		
		} else {
		iteration++;
		}
		break;
	} 
		
		if ((deckCount == 2)&&(iteration == 2)&&((lastYCompShot <= 3)||(userArrAdded[lastXCompShot][lastYCompShot - 1] == 555)||(userArrAdded[lastXCompShot][lastYCompShot - 1] == 999))) { 
		iteration++;
		}
		
		
		if ((deckCount == 2)&&(iteration == 3)&&(lastXCompShot < 12)&&(userArrAdded[lastXCompShot + 1][lastYCompShot] != 555)&&(userArrAdded[lastXCompShot + 1][lastYCompShot] != 999)) { 
	    xCompShot = lastXCompShot + 1;
		yCompShot = lastYCompShot;
		iterDef = true;
		if ((userArrAdded[xCompShot][yCompShot] == 120)||(userArrAdded[xCompShot][yCompShot] == 121)) {
		  lastXCompShot = xCompShot;
		  lastYCompShot = yCompShot;
		
		} else {
		iteration++;
		}
		break;
	} 
	    
		if ((deckCount == 2)&&(iteration == 3)&&((lastXCompShot >= 12)||(userArrAdded[lastXCompShot + 1][lastYCompShot] == 555)||(userArrAdded[lastXCompShot + 1][lastYCompShot] == 999))) { 
		iteration++;
		}


		if ((deckCount == 2)&&(iteration == 4)&&(lastXCompShot > 3)&&(userArrAdded[lastXCompShot - 1][lastYCompShot] != 555)&&(userArrAdded[lastXCompShot - 1][lastYCompShot] != 999)) { 
	    xCompShot = lastXCompShot - 1;
		yCompShot = lastYCompShot;
		iterDef = true;
		break;
	} 
	    // tree-deck ship cell
	    if ((deckCount == 3)&&(iteration == 1)&&(lastYCompShot < 12)&&(userArrAdded[lastXCompShot][lastYCompShot + 1] != 555)&&(userArrAdded[lastXCompShot][lastYCompShot + 1] != 999)) { 
	    xCompShot = lastXCompShot;
		yCompShot = lastYCompShot + 1;
		iterDef = true;
		if ((userArrAdded[xCompShot][yCompShot] == 130)||(userArrAdded[xCompShot][yCompShot] == 131)) {
		  lastXCompShot = xCompShot;
		  lastYCompShot = yCompShot;
		
		} else {
		iteration++;
		}
		break;
	 } 
	    
		if ((deckCount == 3)&&(iteration == 1)&&((lastYCompShot >= 12)||(userArrAdded[lastXCompShot][lastYCompShot + 1] == 555)||(userArrAdded[lastXCompShot][lastYCompShot + 1] == 999))) {
		iteration++;
		}
		
		
		if ((deckCount == 3)&&(iteration == 2)&&(lastYCompShot > 3)&&(userArrAdded[lastXCompShot][lastYCompShot - 1] != 555)&&(userArrAdded[lastXCompShot][lastYCompShot - 1] != 999)&&(userArrAdded[lastXCompShot][lastYCompShot - 1] != 630)) { 
	    xCompShot = lastXCompShot;
		yCompShot = lastYCompShot - 1;
		iterDef = true;
		if ((userArrAdded[xCompShot][yCompShot] == 130)||(userArrAdded[xCompShot][yCompShot] == 131)) {
		  lastXCompShot = xCompShot;
		  lastYCompShot = yCompShot;
		
		} else {
		iteration++;
		}
		break;
	} 
	
	
	    if ((deckCount == 3)&&(iteration == 2)&&(userArrAdded[lastXCompShot][lastYCompShot - 1] == 630)) { 
	    xCompShot = lastXCompShot;
		yCompShot = lastYCompShot - 2;
		iterDef = true;
		if ((userArrAdded[xCompShot][yCompShot] == 130)||(userArrAdded[xCompShot][yCompShot] == 131)) {
		  lastXCompShot = xCompShot;
		  lastYCompShot = yCompShot;
		
		} else {
		iteration++;
		}
		break;
	} 
		
		if ((deckCount == 3)&&(iteration == 2)&&((lastYCompShot <= 3)||(userArrAdded[lastXCompShot][lastYCompShot - 1] == 555)||(userArrAdded[lastXCompShot][lastYCompShot - 1] == 999))) { 
		iteration++;
		}
		
		
		if ((deckCount == 3)&&(iteration == 3)&&(lastXCompShot < 12)&&(userArrAdded[lastXCompShot + 1][lastYCompShot] != 555)&&(userArrAdded[lastXCompShot + 1][lastYCompShot] != 999)) { 
	    xCompShot = lastXCompShot + 1;
		yCompShot = lastYCompShot;
		iterDef = true;
		if ((userArrAdded[xCompShot][yCompShot] == 130)||(userArrAdded[xCompShot][yCompShot] == 131)) {
		  lastXCompShot = xCompShot;
		  lastYCompShot = yCompShot;
		
		} else {
		iteration++;
		}
		break;
	} 
	    
		if ((deckCount == 3)&&(iteration == 3)&&((lastXCompShot >= 12)||(userArrAdded[lastXCompShot + 1][lastYCompShot] == 555)||(userArrAdded[lastXCompShot + 1][lastYCompShot] == 999))) { 
		iteration++;
		}


		if ((deckCount == 3)&&(iteration == 4)&&(lastXCompShot > 3)&&(userArrAdded[lastXCompShot - 1][lastYCompShot] != 555)&&(userArrAdded[lastXCompShot - 1][lastYCompShot] != 999)&&(userArrAdded[lastXCompShot - 1][lastYCompShot] != 631)) { 
	    xCompShot = lastXCompShot - 1;
		yCompShot = lastYCompShot;
		iterDef = true;
		break;
	} 
	
	    if ((deckCount == 3)&&(iteration == 4)&&(userArrAdded[lastXCompShot - 1][lastYCompShot] == 631)) { 
	    xCompShot = lastXCompShot - 2;
		yCompShot = lastYCompShot;
		iterDef = true;
		break;
	} 
	
	    // four-deck ship cell
	    if ((deckCount == 4)&&(iteration == 1)&&(lastYCompShot < 12)&&(userArrAdded[lastXCompShot][lastYCompShot + 1] != 555)&&(userArrAdded[lastXCompShot][lastYCompShot + 1] != 999)) { 
	    xCompShot = lastXCompShot;
		yCompShot = lastYCompShot + 1;
		iterDef = true;
		if ((userArrAdded[xCompShot][yCompShot] == 140)||(userArrAdded[xCompShot][yCompShot] == 141)) {
		  lastXCompShot = xCompShot;
		  lastYCompShot = yCompShot;
		
		} else {
		iteration++;
		}
		break;
	 } 
	    
		if ((deckCount == 4)&&(iteration == 1)&&((lastYCompShot >= 12)||(userArrAdded[lastXCompShot][lastYCompShot + 1] == 555)||(userArrAdded[lastXCompShot][lastYCompShot + 1] == 999))) {
		iteration++;
		}
		
		
		if ((deckCount == 4)&&(iteration == 2)&&(lastYCompShot > 3)&&(userArrAdded[lastXCompShot][lastYCompShot - 1] != 555)&&(userArrAdded[lastXCompShot][lastYCompShot - 1] != 999)&&(userArrAdded[lastXCompShot][lastYCompShot - 1] != 640)) { 
	    xCompShot = lastXCompShot;
		yCompShot = lastYCompShot - 1;
		iterDef = true;
		if ((userArrAdded[xCompShot][yCompShot] == 140)||(userArrAdded[xCompShot][yCompShot] == 141)) {
		  lastXCompShot = xCompShot;
		  lastYCompShot = yCompShot;
		
		} else {
		iteration++;
		}
		break;
	} 
		
		
		if ((deckCount == 4)&&(iteration == 2)&&(userArrAdded[lastXCompShot][lastYCompShot - 1] == 640)&&(userArrAdded[lastXCompShot][lastYCompShot - 2] != 640)) { 
	    xCompShot = lastXCompShot;
		yCompShot = lastYCompShot - 2;
		iterDef = true;
		if ((userArrAdded[xCompShot][yCompShot] == 140)||(userArrAdded[xCompShot][yCompShot] == 141)) {
		  lastXCompShot = xCompShot;
		  lastYCompShot = yCompShot;
		
		} else {
		iteration++;
		}
		break;
	} 
	
	    if ((deckCount == 4)&&(iteration == 2)&&(userArrAdded[lastXCompShot][lastYCompShot - 1] == 640)&&(userArrAdded[lastXCompShot][lastYCompShot - 2] == 640)) { 
	    xCompShot = lastXCompShot;
		yCompShot = lastYCompShot - 3;
		iterDef = true;
		if ((userArrAdded[xCompShot][yCompShot] == 140)||(userArrAdded[xCompShot][yCompShot] == 141)) {
		  lastXCompShot = xCompShot;
		  lastYCompShot = yCompShot;
		
		} else {
		iteration++;
		}
		break;
	} 
		
		
		
		if ((deckCount == 4)&&(iteration == 2)&&((lastYCompShot <= 3)||(userArrAdded[lastXCompShot][lastYCompShot - 1] == 555)||(userArrAdded[lastXCompShot][lastYCompShot - 1] == 999))) { 
		iteration++;
		}
		
		
		if ((deckCount == 4)&&(iteration == 3)&&(lastXCompShot < 12)&&(userArrAdded[lastXCompShot + 1][lastYCompShot] != 555)&&(userArrAdded[lastXCompShot + 1][lastYCompShot] != 999)) { 
	    xCompShot = lastXCompShot + 1;
		yCompShot = lastYCompShot;
		iterDef = true;
		if ((userArrAdded[xCompShot][yCompShot] == 140)||(userArrAdded[xCompShot][yCompShot] == 141)) {
		  lastXCompShot = xCompShot;
		  lastYCompShot = yCompShot;
		
		} else {
		iteration++;
		}
		break;
	} 
	
	    
		if ((deckCount == 4)&&(iteration == 3)&&((lastXCompShot >= 12)||(userArrAdded[lastXCompShot + 1][lastYCompShot] == 555)||(userArrAdded[lastXCompShot + 1][lastYCompShot] == 999))) { 
		iteration++;
		}


		if ((deckCount == 4)&&(iteration == 4)&&(lastXCompShot > 3)&&(userArrAdded[lastXCompShot - 1][lastYCompShot] != 555)&&(userArrAdded[lastXCompShot - 1][lastYCompShot] != 999)&&(userArrAdded[lastXCompShot - 1][lastYCompShot] != 641)) { 
	    xCompShot = lastXCompShot - 1;
		yCompShot = lastYCompShot;
		iterDef = true;
		break;
	} 
	
	    if ((deckCount == 4)&&(iteration == 4)&&(userArrAdded[lastXCompShot - 1][lastYCompShot] == 641)&&(userArrAdded[lastXCompShot - 2][lastYCompShot] != 641)) { 
	    xCompShot = lastXCompShot - 2;
		yCompShot = lastYCompShot;
		iterDef = true;
		break;
	} 
	
	    if ((deckCount == 4)&&(iteration == 4)&&(userArrAdded[lastXCompShot - 1][lastYCompShot] == 641)&&(userArrAdded[lastXCompShot - 2][lastYCompShot] == 641)) { 
	    xCompShot = lastXCompShot - 3;
		yCompShot = lastYCompShot;
		iterDef = true;
		break;
	} 
	
  }	
						
}  
	


	function FireUserArea() {
    
	var i = xCompShot;
	var j = yCompShot;
	
		
    if (userArrAdded[i][j] == 0)  { 
	     userArrAdded[i][j] = 555; // this cell was fired
	     table1.rows[i-3].cells[j-3].classList.add('dot');
	}
		
	if (userArrAdded[i][j] == 110)  { 
	     userArrAdded[i][j] = 610;  //damaged
         table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountUser = cellCountUser - 1;
	 }
	
	
	if (userArrAdded[i][j] == 120)  { 
	     userArrAdded[i][j] = 620;  //damaged
         table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountUser = cellCountUser - 1;
	 }
	 
	if (userArrAdded[i][j] == 121) { 
	     userArrAdded[i][j] = 621;  //damaged
         table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountUser = cellCountUser - 1;
	 }
	 
	 if (userArrAdded[i][j] == 130) { 
	     userArrAdded[i][j] = 630;  //damaged
         table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountUser = cellCountUser - 1;
	 }
	 
	 if (userArrAdded[i][j] == 131) { 
	     userArrAdded[i][j] = 631;  //damaged
         table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountUser = cellCountUser - 1;
	 } 
	 
	 if (userArrAdded[i][j] == 140) { 
	     userArrAdded[i][j] = 640;  //damaged
         table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountUser = cellCountUser - 1;
	 }
	 
	 if (userArrAdded[i][j] == 141) { 
	     userArrAdded[i][j] = 641;  //damaged
         table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountUser = cellCountUser - 1;
	 }   
	 
			
	  for (var i = 3; i < userArrAdded.length - 3; i++) {
      for (var j = 3; j < userArrAdded.length - 3; j++) {
	  
	   //one-deck killed
	  if (userArrAdded[i][j] == 610) {
	     userArrAdded[i][j] = 710;
		 userArrAdded[i][j+1] = 999; // no need to fire these cells
		 userArrAdded[i][j-1] = 999;
		 userArrAdded[i+1][j] = 999;
		 userArrAdded[i-1][j] = 999;		 
         table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('killed');
		 
	   }
	   //two-deck horizontal killed
	  if ((userArrAdded[i][j] == 620)&&(userArrAdded[i][j-1] == 620)) {
	     userArrAdded[i][j] = 720;  
		 userArrAdded[i][j-1] = 720; 
		 userArrAdded[i-1][j-2] = 999; // no need to fire these cells
		 userArrAdded[i-1][j-1] = 999;
		 userArrAdded[i-1][j] = 999;
		 userArrAdded[i-1][j+1] = 999;
		 userArrAdded[i][j-2] = 999;
		 userArrAdded[i][j+1] = 999;
		 userArrAdded[i+1][j-2] = 999;
		 userArrAdded[i+1][j-1] = 999;
		 userArrAdded[i+1][j] = 999;
		 userArrAdded[i+1][j+1] = 999; 
		 table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('killed');
		 table1.rows[i-3].cells[j-4].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-4].classList.add('killed');
	   }
	   
	  	//two-deck vertical killed    
	   if ((userArrAdded[i][j] == 621)&&(userArrAdded[i+1][j] == 621)) { 
	     userArrAdded[i][j] = 721;
		 userArrAdded[i+1][j] = 721;
		 userArrAdded[i-1][j-1] = 999; // no need to fire these cells
		 userArrAdded[i][j-1] = 999;
		 userArrAdded[i+1][j-1] = 999;
		 userArrAdded[i+2][j-1] = 999;
		 userArrAdded[i-1][j] = 999;
		 userArrAdded[i+2][j] = 999;
		 userArrAdded[i-1][j+1] = 999;
		 userArrAdded[i][j+1] = 999;
		 userArrAdded[i+1][j+1] = 999;
		 userArrAdded[i+2][j+1] = 999;
		 table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('killed');
		 table1.rows[i-2].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-2].cells[j-3].classList.add('killed');
	   } 
	   
	   	//three-deck horizontal killed   
	   if ((userArrAdded[i][j] == 630)&&(userArrAdded[i][j+1] == 630)&&(userArrAdded[i][j+2] == 630)){    
	     userArrAdded[i][j] = 730; 
		 userArrAdded[i][j+1] = 730;
		 userArrAdded[i][j+2] = 730;
		 userArrAdded[i-1][j-1] = 999; // no need to fire these cells
		 userArrAdded[i-1][j] = 999;
		 userArrAdded[i-1][j+1] = 999;
		 userArrAdded[i-1][j+2] = 999;
		 userArrAdded[i-1][j+3] = 999;
		 userArrAdded[i][j-1] = 999;
		 userArrAdded[i][j+3] = 999;
		 userArrAdded[i+1][j-1] = 999;
		 userArrAdded[i+1][j] = 999;
		 userArrAdded[i+1][j+1] = 999;
		 userArrAdded[i+1][j+2] = 999;
		 userArrAdded[i+1][j+3] = 999;
         table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('killed');
		 table1.rows[i-3].cells[j-2].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-2].classList.add('killed');
		 table1.rows[i-3].cells[j-1].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-1].classList.add('killed');
		 
	   }
	  	   
	      
	   //three-deck vertical killed 
	   if ((userArrAdded[i][j] == 631)&&(userArrAdded[i+1][j] == 631)&&(userArrAdded[i+2][j] == 631)) { 
	     userArrAdded[i][j] = 731;  
		 userArrAdded[i+1][j] = 731;
		 userArrAdded[i+2][j] = 731;
		 userArrAdded[i-1][j-1] = 999; // no need to fire these cells
		 userArrAdded[i][j-1] = 999;
		 userArrAdded[i+1][j-1] = 999;
		 userArrAdded[i+2][j-1] = 999;
		 userArrAdded[i+3][j-1] = 999;
		 userArrAdded[i-1][j] = 999;
		 userArrAdded[i+3][j] = 999;
		 userArrAdded[i-1][j+1] = 999;
		 userArrAdded[i][j+1] = 999;
		 userArrAdded[i+1][j+1] = 999;
		 userArrAdded[i+2][j+1] = 999;
		 userArrAdded[i+3][j+1] = 999;
         table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('killed');
		 table1.rows[i-2].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-2].cells[j-3].classList.add('killed');
		 table1.rows[i-1].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-1].cells[j-3].classList.add('killed');
		 
	 } 
	
	 
	   //four-deck horizontal killed  
	 if ((userArrAdded[i][j] == 640)&&(userArrAdded[i][j+1] == 640)&&(userArrAdded[i][j+2] == 640)&&(userArrAdded[i][j+3] == 640)) { 
	     userArrAdded[i][j] = 740;
		 userArrAdded[i][j+1] = 740;
		 userArrAdded[i][j+2] = 740;
		 userArrAdded[i][j+3] = 740;
		 userArrAdded[i-1][j-1] = 999; // no need to fire these cells
		 userArrAdded[i-1][j] = 999;
		 userArrAdded[i-1][j+1] = 999;
		 userArrAdded[i-1][j+2] = 999;
		 userArrAdded[i-1][j+3] = 999;
		 userArrAdded[i-1][j+4] = 999;
		 userArrAdded[i][j-1] = 999;
		 userArrAdded[i][j+4] = 999;
		 userArrAdded[i+1][j-1] = 999;
		 userArrAdded[i+1][j] = 999;
		 userArrAdded[i+1][j+1] = 999;
		 userArrAdded[i+1][j+2] = 999;
		 userArrAdded[i+1][j+3] = 999;
		 userArrAdded[i+1][j+4] = 999;
         table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('killed');
		 table1.rows[i-3].cells[j-2].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-2].classList.add('killed');
		 table1.rows[i-3].cells[j-1].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-1].classList.add('killed');
		 table1.rows[i-3].cells[j].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j].classList.add('killed');
	 }
	 
	  //four-deck vertical killed  
	 if ((userArrAdded[i][j] == 641)&&(userArrAdded[i+1][j] == 641)&&(userArrAdded[i+2][j] == 641)&&(userArrAdded[i+3][j] == 641)) { 
	     userArrAdded[i][j] = 741;
		 userArrAdded[i+1][j] = 741;
		 userArrAdded[i+2][j] = 741;
		 userArrAdded[i+3][j] = 741;
		 userArrAdded[i-1][j-1] = 999; // no need to fire these cells
		 userArrAdded[i][j-1] = 999;
		 userArrAdded[i+1][j-1] = 999;
		 userArrAdded[i+2][j-1] = 999;
		 userArrAdded[i+3][j-1] = 999;
		 userArrAdded[i+4][j-1] = 999;
		 userArrAdded[i-1][j] = 999;
		 userArrAdded[i+4][j] = 999;
		 userArrAdded[i-1][j+1] = 999;
		 userArrAdded[i][j+1] = 999;
		 userArrAdded[i+1][j+1] = 999;
		 userArrAdded[i+2][j+1] = 999;
		 userArrAdded[i+3][j+1] = 999;
		 userArrAdded[i+4][j+1] = 999;
         table1.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-3].cells[j-3].classList.add('killed');
		 table1.rows[i-2].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-2].cells[j-3].classList.add('killed');
		 table1.rows[i-1].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i-1].cells[j-3].classList.add('killed');
		 table1.rows[i].cells[j-3].classList.remove('ship-cell');
		 table1.rows[i].cells[j-3].classList.add('killed');
	 }  
	  
	    	 	
	}
	}  
	
		return cellCountUser;   		   
		return userArrAdded;   
}    
	  
		
		
	//****************************************************************  Fire to Computer Ships Area ******************************************************************************//
	
	
	
     // define User shot coordinates
	 FireCompBattleField();
  
     function FireCompBattleField() {
    
  $('#t2 td').click( function(shot) {
    
	xUserShot = shot.target.parentElement.rowIndex + 3;	
    yUserShot = shot.target.cellIndex + 3;
    	
  } );  
        
 } 
    
	
	
		
	function FireCompArea() {
    
	
	var i = xUserShot;
	var j = yUserShot;
	
	
    if ((compArrAdded[i][j] == 0)||(compArrAdded[i][j] == 999))  { 
	     table2.rows[i-3].cells[j-3].classList.add('dot');  // miss
	}
		
	if (compArrAdded[i][j] == 110)  { 
	     compArrAdded[i][j] = 610;  //damaged
         table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountComp = cellCountComp - 1;
	 }
	
	
	if (compArrAdded[i][j] == 120)  { 
	     compArrAdded[i][j] = 620;  //damaged
         table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountComp = cellCountComp - 1;
	 }
	 
	if (compArrAdded[i][j] == 121) { 
	     compArrAdded[i][j] = 621;  //damaged
         table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountComp = cellCountComp - 1;
	 }
	 
	 if (compArrAdded[i][j] == 130) { 
	     compArrAdded[i][j] = 630;  //damaged
         table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountComp = cellCountComp - 1;
	 }
	 
	 if (compArrAdded[i][j] == 131) { 
	     compArrAdded[i][j] = 631;  //damaged
         table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountComp = cellCountComp - 1;
	 } 
	 
	 if (compArrAdded[i][j] == 140) { 
	     compArrAdded[i][j] = 640;  //damaged
         table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountComp = cellCountComp - 1;
	 }
	 
	 if (compArrAdded[i][j] == 141) { 
	     compArrAdded[i][j] = 641;  //damaged
         table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('damaged');
		 cellCountComp = cellCountComp - 1;
	 }   
	 
	
		// check if all ship decks are fired - than mark all ship as killed	
	  for (var i = 3; i < compArrAdded.length - 3; i++) {
      for (var j = 3; j < compArrAdded.length - 3; j++) {
	  
	   //one-deck killed
	  if (compArrAdded[i][j] == 610) {
	     compArrAdded[i][j] = 710; 
         table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('killed');
		 
	   }
	   //two-deck horizontal killed
	  if ((compArrAdded[i][j] == 620)&&(compArrAdded[i][j-1] == 620)) {
	     compArrAdded[i][j] = 720;  
		 compArrAdded[i][j-1] = 720; 
		 table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('killed');
		 table2.rows[i-3].cells[j-4].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-4].classList.add('killed');
	   }
	   
	 
	   //two-deck vertical killed
	   if ((compArrAdded[i][j] == 621)&&(compArrAdded[i+1][j] == 621)) { 
	     compArrAdded[i][j] = 721;
		 compArrAdded[i+1][j] = 721;
		 table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('killed');
		 table2.rows[i-2].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-2].cells[j-3].classList.add('killed');
	   } 
	   
	   	//three-deck horizontal killed   
	   if ((compArrAdded[i][j] == 630)&&(compArrAdded[i][j+1] == 630)&&(compArrAdded[i][j+2] == 630)){    
	     compArrAdded[i][j] = 730; 
		 compArrAdded[i][j+1] = 730;
		 compArrAdded[i][j+2] = 730;
         table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('killed');
		 table2.rows[i-3].cells[j-2].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-2].classList.add('killed');
		 table2.rows[i-3].cells[j-1].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-1].classList.add('killed');
		 
	   }
	  
	      
	   //three-deck vertical killed 
	   if ((compArrAdded[i][j] == 631)&&(compArrAdded[i+1][j] == 631)&&(compArrAdded[i+2][j] == 631)) { 
	     compArrAdded[i][j] = 731;  
		 compArrAdded[i+1][j] = 731;
		 compArrAdded[i+2][j] = 731;
         table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('killed');
		 table2.rows[i-2].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-2].cells[j-3].classList.add('killed');
		 table2.rows[i-1].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-1].cells[j-3].classList.add('killed');
		 
	 } 
	 
	 
	 
	   //four-deck horizontal killed  
	 if ((compArrAdded[i][j] == 640)&&(compArrAdded[i][j+1] == 640)&&(compArrAdded[i][j+2] == 640)&&(compArrAdded[i][j+3] == 640)) { 
	     compArrAdded[i][j] = 740;
		 compArrAdded[i][j+1] = 740;
		 compArrAdded[i][j+2] = 740;
		 compArrAdded[i][j+3] = 740;
         table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('killed');
		 table2.rows[i-3].cells[j-2].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-2].classList.add('killed');
		 table2.rows[i-3].cells[j-1].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-1].classList.add('killed');
		 table2.rows[i-3].cells[j].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j].classList.add('killed');
	 }
	 
	  //four-deck vertical killed  
	 if ((compArrAdded[i][j] == 641)&&(compArrAdded[i+1][j] == 641)&&(compArrAdded[i+2][j] == 641)&&(compArrAdded[i+3][j] == 641)) { 
	     compArrAdded[i][j] = 741;
		 compArrAdded[i+1][j] = 741;
		 compArrAdded[i+2][j] = 741;
		 compArrAdded[i+3][j] = 741;
         table2.rows[i-3].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-3].cells[j-3].classList.add('killed');
		 table2.rows[i-2].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-2].cells[j-3].classList.add('killed');
		 table2.rows[i-1].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i-1].cells[j-3].classList.add('killed');
		 table2.rows[i].cells[j-3].classList.remove('ship-cell');
		 table2.rows[i].cells[j-3].classList.add('killed');
	 }  
	  
	    	 	
	}
	}  
	
	
	   if (cellCountComp == 0) {
	     alert("Congratulations! You won the game!");
		 }
	   	   
		return cellCountComp;   		   
		return compArrAdded;   
}    

    //***********************************************************  Additional functions  ****************************************************************************************//

   
   
 
     function getRandom(n) {
	// n - max value in random sequence
	 return Math.floor(Math.random() * (n + 1));
  }
   
   
    // if User lost - function shows all Computer ships
    function showCompShips() {
   
     if (cellCountUser == 0) {
	    alert("You lost the game!");
		 
		for (var i = 0; i < compArr.length; i++) {
        for (var j = 0; j < compArr.length; j++) {
	    
		if ((compArr[i][j] >= 110)&&(compArr[i][j] <= 141)) {
		table2.rows[i].cells[j].classList.add('ship-cell');
		
	    }
		
	}	
	}  
		 
	}
	 
   }


   function playShotSound(){
       var audio = document.getElementById("audio");
       audio.play();
    }


