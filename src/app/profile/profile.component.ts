import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Toast, ToastrService} from "ngx-toastr";
import {catchError, map, of, throwError} from "rxjs";
import {ProfileService} from "../../services/profile/profile.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile: any;

    constructor(private http: HttpClient, private toastr: ToastrService, private profileService: ProfileService) {
    }

    ngOnInit(): void {
        this.fetch(parseInt(localStorage.getItem("id")!));

    }

    fetch(id: number) {

        this.profileService.getProfile(id).subscribe( res => this.profile = res)
        console.log(this.profile);
    }

    update() {
        this.profileService.updateProfile(this.profile.id, this.profile.name, this.profile.email, this.profile.about).subscribe( res => this.profile = res)
        this.toastr.success("Profile Updated!")
    }

}
