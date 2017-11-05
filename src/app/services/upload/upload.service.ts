import { Injectable } from '@angular/core';
import { Upload } from './upload';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
@Injectable()
export class UploadService {


  private basePath = '/uploads';
  
  constructor(private db: AngularFireDatabase) {

    
   }

   pushUpload(upload: Upload) {

    return new Promise((res,reject) => {
      let storageRef = firebase.storage().ref();
      let uploadTask = storageRef.child(`uploads/${upload.file.name}`).put(upload.file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {
            // upload in progress
            upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        },
        (error) => {
          // upload failed
          console.log(error)
          reject(error)
        },
        () => {
          // upload success
          console.log(uploadTask.snapshot);
          upload.url = uploadTask.snapshot.downloadURL
          upload.name = upload.file.name
          this.saveFileData(upload)
          res(upload.url);
        }
      );
    })
    
  }


  getFileUploads() {
    return this.db.list('uploads').valueChanges();
    
  }
   // Writes the file details to the realtime db
   private saveFileData(upload: Upload) {
    this.db.list(`uploads`).push(upload);
  }

}
