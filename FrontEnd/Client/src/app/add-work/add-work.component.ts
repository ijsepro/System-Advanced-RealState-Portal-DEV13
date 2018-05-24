import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PostWorkService} from '../services/post-work.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';


@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})
export class AddWorkComponent implements OnInit {
  url: any = '../../assets/img/upload.gif';
  fileName:String;
  // @ViewChild('descriptions') private deleteSwal: SwalComponent;
  constructor(private elem: ElementRef, private service: PostWorkService) {
  }

  ngOnInit() {
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const formData = new FormData();
      var reader = new FileReader();
      let files = this.elem.nativeElement.querySelector('#selectFile').files;
      let file = files[0];
      formData.append('work-file', file, file.name);
      this.service.postFileType(formData)
        .subscribe(res=>{
            if(res.json() === 1){
              this.url='../../assets/img/pdf.jpg';
            }else{
              reader.onload = (event: any) => {
                this.url = event.target.result;
              };
              reader.readAsDataURL(event.target.files[0]);
              this.fileName=event.target.files[0].name;
            }
        });
    }
  }

  description(){
    // alert("swal");
    // this.deleteSwal.show();
  }
}
