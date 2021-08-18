var formdata=document.querySelector('.form');
var button=document.querySelector('.btn-check');
var output=document.querySelector('.output-div');


console.log(formdata)

const Answers = ["yes", "no", "yes", "yes", "yes", "Isosceles", "30", "Both", "5cm", "Scalene" ];

var score=0;

function clickListner()
{
    var FormResults=new FormData(formdata);
    let index=0;
    for(let value of FormResults.values())
    {
        if(value===Answers[index])
        {
            score=score+1;
        }
        index=index+1;
    }
    output.innerText='your score is '+score;
}

button.addEventListener("click",clickListner);