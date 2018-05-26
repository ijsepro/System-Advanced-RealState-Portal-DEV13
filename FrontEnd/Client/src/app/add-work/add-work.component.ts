import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PostWorkService} from '../services/post-work.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {forEach} from '@angular/router/src/utils/collection';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})
export class AddWorkComponent implements OnInit {
  url: any = '../../assets/img/upload.gif';
  urls: any[];
  fileName;

  // @ViewChild('descriptions') private deleteSwal: SwalComponent;
  constructor(private elem: ElementRef, private service: PostWorkService, private toaster: ToastrService) {
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
        .subscribe(res => {
          if (res.json() === 1) {
            this.url = '../../assets/img/pdf.jpg';
            reader.readAsDataURL(event.target.files[0]);
            this.fileName = event.target.files[0].name;
          } else {
            reader.onload = (event: any) => {
              this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
            this.fileName = event.target.files[0].name;
          }
        });
    }
  }

  description(evt: any) {
    const formData = new FormData();
    let files = this.elem.nativeElement.querySelector('#selectFile').files;
    let file = files[0];
    formData.append('work-file', file, file.name);
    const name = this.fileName;
    const dir = '../../assets/img/';
    const imgurl = dir + name;
    formData.append('imgname', imgurl);
    formData.append('description', evt);
    this.service.temparyPost(formData).subscribe(res => {
      if (res.json() == 0) {
        this.toaster.error('Error please try again')
      } else {
        this.service.loadPost()
          .subscribe(res => {
            this.urls = res.json();
          });
        for(let i of this.urls){
          console.log(i.url);
        }
      }

    });
  };

}
