var app=angular.module('myApp', []);

app.controller('mainCtrl', function($scope){
    var polja=document.getElementsByTagName("div");
    
    var myImages=[new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150), new Image(150, 150)];
    
    myImages[0].src="images/macka.jpg";
    myImages[1].src="images/macka.jpg";
    myImages[2].src="images/jez.jpg";
    myImages[3].src="images/jez.jpg";
    myImages[4].src="images/tigar.jpg";
    myImages[5].src="images/tigar.jpg";
    myImages[6].src="images/lav.jpg";
    myImages[7].src="images/lav.jpg";
    myImages[8].src="images/panda.jpeg";
    myImages[9].src="images/panda.jpeg";
    myImages[10].src="images/pas.jpg";
    myImages[11].src="images/pas.jpg";
    myImages[12].src="images/koala.jpg";
    myImages[13].src="images/koala.jpg";
    myImages[14].src="images/zec.jpg";
    myImages[15].src="images/zec.jpg";
    
    var i=16;
   
    var izbori=[];
    while(i>=1){
        
        var izbor=Math.floor(Math.random()*16);
        
        if(izbori.indexOf(izbor)===-1){
            izbori.push(izbor);
            polja[i].appendChild(myImages[izbor]);
            i--;
        }
    };
    
    var slike=document.getElementsByTagName("img");
    
    i=1;
    while(i<=16){
        console.log(polja[i]);
        polja[i].addEventListener("click",okreni);
        
        i++;
    }
    var otvorene=[];
    
    function okreni(event){
        event.target.firstElementChild.style.visibility="visible";
        otvorene.push(event.target.firstElementChild);
        console.log(otvorene);
        if(otvorene.length===2){
            if(jednake(otvorene[0],otvorene[1])){
                
                otvorene.pop();
                otvorene.pop();
            }
        }
        else if(otvorene.length===3){
            otvorene[0].style.visibility="hidden";
            otvorene[1].style.visibility="hidden";
 
            var zadnja_otvorena=otvorene.pop();
            otvorene.pop();
            otvorene.pop();
            
            otvorene.push(zadnja_otvorena);
        }
    };
    
    function jednake(slika1, slika2){
        if(myImages.indexOf(slika1)%2==0)
            return myImages.indexOf(slika1)===(myImages.indexOf(slika2)-1)
        else
            return myImages.indexOf(slika1)===(myImages.indexOf(slika2)+1)
    }
});