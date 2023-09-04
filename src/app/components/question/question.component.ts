import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  Form:FormGroup;
  questions: any[] = []
  
  currentSlideIndex = 0;
  correctAnswers: { QuesId: string; CorrectAnswerId: string; }[] = [];

  constructor(private service:MainService){}
  trueisClicked: boolean[]
  ngOnInit(){
    this.service.getquestions().subscribe((res:any)=>{
console.log(res.data)
this.questions=res.data
this.questions.forEach((ele,i)=>{
    this.correctAnswers.push({ QuesId: ele.id, CorrectAnswerId:ele.choices.filter((choice)=>{
    return choice.status===1;  })[0].id   })
})
    console.log(this.correctAnswers)

this.trueisClicked = new Array<boolean>(this.questions.length);
this.trueisClicked.fill(false)
console.log(this.trueisClicked)
    })
    this.Form=new FormGroup({
      rad: new FormControl('')
    })

  }


  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex = (this.currentSlideIndex === 0) ? (this.questions.length - 1) : (this.currentSlideIndex - 1);
    }

  }
  selectedAnswers: any[] = [];


  nextSlide(id,i) {
    if (this.currentSlideIndex < this.questions.length - 1) this.currentSlideIndex = (this.currentSlideIndex === this.questions.length - 1) ? 0 : (this.currentSlideIndex + 1);

      this.selectedAnswers[i]={
        quesId:id,
        ansId:this.rad,
        check:this.trueisClicked[i]
      }
      localStorage.setItem('Answers',JSON.stringify(this.selectedAnswers))
  console.log(this.selectedAnswers[i])
  this.rad=null
}  error: boolean =false

rad:any;
correct: boolean[] = [];


  radioDisable(i) {
    this.trueisClicked[i] = true;


  this.correct[i] = (this.rad === this.correctAnswers[i].CorrectAnswerId);

}
  }
