import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { ReferenceService } from '../reference.service';
import { Clinic } from '../models/clinic.model';
import { Reference } from '../models/reference.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ClinicService, ReferenceService]
})
export class AdminComponent implements OnInit {

  constructor(private clinicService: ClinicService, private referenceService: ReferenceService) { }

  ngOnInit() {
  }

  submitClinic(name: string, address: string, phonenumber: string, rate: string, website: string, hours:string){
    var newClinic: Clinic = new Clinic(name, address, parseInt(phonenumber), parseInt(rate), website, hours,this.imageSrc);
    this.clinicService.addClinic(newClinic);
  }

  submitArticle(title: string, description: string, website: string, article: string, published: Date){
    var newReference: Reference = new Reference(title, description, website, article, published);
    this.referenceService.addReference(newReference);
  }

  private imageSrc: string = '';

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

}
