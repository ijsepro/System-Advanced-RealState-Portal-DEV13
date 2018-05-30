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
  urls: any[] = [];
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
            this.fileName = 'pdf.jpg';
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
    this.service.temparyPost(formData).subscribe(res => {
      if (res.json() == 0) {
        this.toaster.error('You have choose this Image already ')
      } else {
        this.urls.push({'url': imgurl, 'description': evt});
      }

    });
  };

  postWork() {
    var json_arr = JSON.stringify(this.urls);
    const formdata = new FormData();
    formdata.append('name', this.elem.nativeElement.querySelector('#projectName').value);
    formdata.append('description', this.elem.nativeElement.querySelector('#projectDescription').value);
    formdata.append('files', json_arr);

    this.service.postProject(formdata)
      .subscribe(res => {
        if (res.json() === 1) {
          this.toaster.success('Your project will be in Projects Category in a moment ');
        } else {
          this.toaster.error('Please try again');
        }
      });
  }


}
