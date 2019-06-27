import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ClinicService } from '../clinic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-clinic',
  templateUrl: './edit-clinic.component.html',
  styleUrls: ['./edit-clinic.component.css'],
  providers: [ClinicService]
})
export class EditClinicComponent implements OnInit {
  private imageSrc: string = '';
  clinicId: string;
  clinicToDisplay;


  constructor(private route: ActivatedRoute,
              private auth: AuthenticationService, 
              private clinicService: ClinicService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.clinicId = urlParameters['id'];
    });
    this.clinicToDisplay = this.clinicService.getClinicById(this.clinicId)
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }

  beginToEdit(clinicToUpdate){
    this.clinicService.updateClinic(clinicToUpdate);
  }

}
