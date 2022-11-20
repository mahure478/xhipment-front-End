import { Component, OnInit, Input } from '@angular/core';
import { MainPageService } from 'src/app/main-page/main-page.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {

  tableData = new Array();
  title:string = ''
  body:string = ''

  @Input() data = new Array();

  constructor(private ds:DashboardService,private ms: MainPageService) { }

  ngOnInit(): void {
    if(this.data) {
      this.tableData =this.data;
    }
    this.ms.getAllPosts().subscribe((x:any) => {
      for(let i of x) {
        i['edit'] = false
      }
      this.tableData.unshift(...x);

    })
  }

  onEdit(data:any,name:string) {
    if(name === 'Edit') {
      data.edit = !data.edit;
    } else {
     data.edit = !data.edit;
     this.ds.updatePost(data).subscribe(x => console.log(x))

  }
}

  onDelete(id:number,data:any) {
   this.tableData.splice(id,1);
   this.ds.deletePost(data.id).subscribe(x => console.log('Data Deleted'))
  }


}
