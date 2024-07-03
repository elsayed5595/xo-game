let turn ='x';
let squares=[];
let titleGame=document.querySelector('.title');
//start end game
function end(num1,num2,num3){
    titleGame.innerHTML=`${squares[num1]} winner`;
    document.getElementById(`item`+num1).style.backgroundColor="black";
    document.getElementById(`item`+num2).style.backgroundColor="black";
    document.getElementById(`item`+num3).style.backgroundColor="black";
       
     setInterval( function(){
        titleGame.innerHTML +=`.`
     }, 1000);
     
     /*rel0ad game*/
     setTimeout(function() {
        location.reload()
     }, 4000);
     titleGame.style.fontSize="25px";
     titleGame.style.color="white";
     document.getElementById(`item` + num1).classList.add('colorChange');
    document.getElementById(`item` + num2).classList.add('colorChange');
    document.getElementById(`item` + num3).classList.add('colorChange');

};

function winner(){
for(let i=1; i<10; i++){
 squares[i]=document.getElementById('item'  + i).innerHTML;

  };
  if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!=''){
    end(1,2,3);

  }else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!=''){
    end(4,5,6);
 

  }else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!=''){
    end(7,8,9);
 

  }else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!=''){
 end(1,4,7);

  }else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!=''){
    end(2,5,8);
 

  }else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!=''){
    end(3,6,9);

  }else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!=''){
 
    end(1,5,9);
  }else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!=''){
   
    end(3,5,7);
  }

}

//start function game
function game(id){
 let element=document.getElementById(id);
 if(turn ==='x' && element.innerHTML==''){
    element.innerHTML="x";
    turn='o';
    titleGame.innerHTML='o';
    titleGame.style.fontSize='30px'
    titleGame.style.color='white'
 }else if(turn==='o'&& element.innerHTML==''){
    element.innerHTML="o";
   turn='x';
    titleGame.innerHTML='x';
 }else{
    document.getElementById('item').innerHTML=''
 }
 winner()
};
//end function game














