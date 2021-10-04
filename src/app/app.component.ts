import { Component } from '@angular/core';
import { Lists } from 'src/file';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  works:Array<Lists>=[]    

  addToList(value:string)
  {
    let data={
      work:value,
      finished:true
    }

    this.works.push(data);
    
    console.log(this.works)
  }
  change(index:number){
    if(this.works[index].finished==true){
      this.works[index].finished=false;
    }
    else{
      this.works[index].finished=true;
    }
    console.log(this.works[index])
  }
  remove()
  {
    for(let i=this.works.length-1;i>=0;i--)
    {
      debugger
      if(this.works[i].finished==false)
      {  
        this.works.splice(i,1);
      }
    }
  }
}
