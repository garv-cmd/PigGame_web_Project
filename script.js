var scores,roundScore,activePlayer;
scores=[0,0];
roundScore=0;
activePlayer=0;
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').innerHTML='0';
document.getElementById('score-1').innerHTML='0';
document.getElementById('current-0').innerHTML=0;
document.getElementById('current-1').innerHTML=0;
var x = document.querySelector('#score-'+activePlayer).textContent;
console.log(x);
document.querySelector('.btn-roll').addEventListener('click',function(){
    //1.random number
    var dice= Math.floor(Math.random()*6)+1;
    console.log(dice);
    //2.display
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    //update the score
    if (dice>1)
    {
        //update the score
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }
    else{
        activePlayer==0?activePlayer=1:activePlayer=0;
        roundScore=0;
        document.getElementById('current-0').innerHTML=0;
        document.getElementById('current-1').innerHTML=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
    }
});
    document.querySelector('.btn-hold').addEventListener('click',function(){
        //add current score to global score
        scores[activePlayer]+=roundScore;
        //update to gui
        document.getElementById('score-'+activePlayer).innerHTML=scores[activePlayer];
        //check if player won or not
        if (scores[activePlayer]>=100)
        {
            document.getElementById('name-'+activePlayer).innerHTML="WINNER!";
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        }
        else{
        //next player
        nextPlayer();
        }
    });
    function nextPlayer()
    {
        activePlayer==0?activePlayer=1:activePlayer=0;
        roundScore=0;
        document.getElementById('current-0').innerHTML=0;
        document.getElementById('current-1').innerHTML=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
    }
    function funcreload()
    {
        location.reload(true);
    }
    