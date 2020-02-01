import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Subject } from 'rxjs/Subject';

@Injectable()

export class DataService {
	data: string;
	// data = new Subject<string>();
	// data$ = this.data.asObservable();

	insertData(data: string) {
		this.data = data;
	}
}