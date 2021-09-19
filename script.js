const quizdata = [
    {
        question: 'What is the capital of India?',
        a: 'New Delhi',
        b: 'Banglore',
        c: 'West Bengal',
        d: 'Kolkata',
        answer: 'a'
    },
    {
        question: 'Full form of HTML?',
        a: "Hybrid Text Mail Language",
        b: "Hyper tool markup language",
        c: "Hypertext Markup language",
        d: "NOT",
        answer: 'c'
    },
    {
        question: 'Which of these is not a programming language?',
        a: "Python",
        b: "Sass",
        c: "C++",
        d: "Java",
        answer: 'b'
    },
    {
        question: 'How many wonders are there in the world?',
        a: "1",
        b: "3",
        c: "2",
        d: "7",
        answer: 'd'
    },
    {
        question: 'Which city is most populated?',
        a: "UP",
        b: "MP",
        c: "Bihar",
        d: "Delhi",
        answer: 'a'
    }
]

const res = document.querySelector('#score')

const question = document.getElementById('que')
const a = document.getElementById('lbl1')
const b = document.getElementById('lbl2')
const c = document.getElementById('lbl3')
const d = document.getElementById('lbl4')
const submitbtn = document.getElementById('submit')

const inputs = document.getElementsByName('option')

let i=0



const loadquizdata = ()=>{

    const answer = quizdata[i].answer
    const userSelected = document.querySelectorAll('.inp')

    userSelected.forEach((i)=>{
        if(i.checked){
            if (i.id === answer){
                console.log('coreect ans')
                
            }else{
                console.log('wrong ans')
                
            }
        }
    })
    
    if (i<quizdata.length){
        question.innerText = quizdata[i].question
        a.innerText = quizdata[i].a
        b.innerText = quizdata[i].b
        c.innerText = quizdata[i].c
        d.innerText = quizdata[i].d

        i++ 
    }
    else{
        
        return alert('You have finished this quiz.')
    }

}










