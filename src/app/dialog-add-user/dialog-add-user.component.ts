import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore, collectionData, collection, addDoc, FirestoreDataConverter, DocumentData, QueryDocumentSnapshot, SnapshotOptions } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user: User = new User();
  birthDate: Date | null = null;
  loading = false;

  firestore: Firestore = inject(Firestore);
  

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {

  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  async saveUser() {
    if (this.birthDate) {
      this.user.birthDate = this.birthDate.getTime();
    }
    console.log(this.user);
}


}