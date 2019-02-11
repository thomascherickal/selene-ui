import { Component, Input, OnInit } from '@angular/core';

import {
    faComment,
    faPlusCircle,
    faSignInAlt,
    faSignOutAlt,
    faMicrochip,
    faUserCircle
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'globalnav-account-menu',
    templateUrl: './account-menu.component.html',
    styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent implements OnInit {
    public accountIcon = faUserCircle;
    public addDeviceIcon = faPlusCircle;
    public devicesIcon = faMicrochip;
    @Input() isAuthenticated: boolean;
    public logInIcon = faSignInAlt;
    public logOutIcon = faSignOutAlt;
    @Input() mycroftUrls;
    public skillsIcon = faComment;

    constructor() { }

    ngOnInit() {
  }

    navigate_to_log_in() {
        const url = this.mycroftUrls.singleSignOn + '/login?redirect=' + window.location.href;
    }

    navigate_to_log_out() {
        const url = this.mycroftUrls.singleSignOn + '/logout?redirect=' + window.location.href;
    }

}
