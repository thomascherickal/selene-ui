import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AccountPreferences } from '../../shared/models/preferences.model';
import { Device } from '../../shared/models/device.model';
import { DeviceAttribute } from '../../shared/models/deviceAttribute.model';
import { FormGroup } from '@angular/forms';
import { AccountDefaults } from '../../shared/models/defaults.model';
import { subscribeOn } from 'rxjs/operators';
import { Observable } from 'rxjs';

const defaultsUrl = '/api/defaults';
const deviceUrl = '/api/devices';
const geographyUrl = 'api/geographies';
const preferencesUrl = '/api/preferences';
const voicesUrl = '/api/voices';
const wakeWordUrl = '/api/wake-words';



@Injectable({providedIn: 'root'})
export class DeviceService {
    public devicePlacements: DeviceAttribute[] = [
        {id: '1', name: 'None', userDefined: true},
        {id: null, name: 'Bedroom', userDefined: true},
        {id: null, name: 'Kitchen', userDefined: true},
        {id: '2', name: 'Living Room', userDefined: false}
    ];

    constructor(private http: HttpClient) {
    }

    getDevices() {
        return this.http.get<Device[]>(deviceUrl);
    }

    addDevice(deviceForm: FormGroup) {
        this.http.post<any>(deviceUrl, deviceForm.value).subscribe();
    }

    deleteDevice(device: Device): void {
        console.log('deleting device... ');
    }

    addAccountPreferences(preferencesForm: FormGroup) {
        return this.http.post<any>(preferencesUrl, preferencesForm.value);
    }

    getAccountPreferences() {
        return this.http.get<AccountPreferences>(preferencesUrl);
    }

    updateAccountPreferences(preferencesForm: FormGroup): Observable<any> {
        return this.http.patch<any>(preferencesUrl, preferencesForm.value);
    }

    addAccountDefaults(defaultsForm: FormGroup) {
        return this.http.post<any>(defaultsUrl, defaultsForm.value);
    }

    updateAccountDefaults(defaultsForm: FormGroup) {
        return this.http.patch<any>(defaultsUrl, defaultsForm.value);
    }

    getAccountDefaults() {
        return this.http.get<AccountDefaults>(defaultsUrl);
    }

    getGeographies() {
        return this.http.get<DeviceAttribute[]>(geographyUrl);
    }

    getVoices() {
        return this.http.get<DeviceAttribute[]>(voicesUrl);
    }

    getWakeWords() {
        return this.http.get<DeviceAttribute[]>(wakeWordUrl);
    }
}
