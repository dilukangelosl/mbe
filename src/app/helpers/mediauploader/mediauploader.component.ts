import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload/upload.service';
import { Upload } from '../../services/upload/upload';
import * as _ from "lodash";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mediauploader',
  templateUrl: './mediauploader.component.html',
  styleUrls: ['./mediauploader.component.scss'],
  providers:[UploadService]
})
export class MediauploaderComponent implements OnInit {

  images: Observable<any[]>;
  currentUpload: Upload;
  dropzoneActive:boolean = false;
  uploads:any = [];

  constructor(private upSvc: UploadService) {

    this.images = this.upSvc.getFileUploads();
  
   }

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }
  handleDrop(fileList: FileList) {
    console.log(fileList.length + "files Added");
    let filesIndex = _.range(fileList.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(fileList[idx]);
      this.upSvc.pushUpload(this.currentUpload).then(res => {
        console.log("Uploaded " + res);
        this.uploads.push(res);
      })
    
    
    }
    )
  }



  ngOnInit() {
  }

}
