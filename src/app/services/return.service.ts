import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReturnService {
  BACKEND_URI = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  prettifyDate(dateString: string): string {
    if (!dateString) return '';
    const months: string[] = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let date = new Date(dateString);
    let prettifiedDate = `${days[date.getDay()]}, ${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()} `;
    let time =
      date.toLocaleString().match(/\d{1,2}:\d{1,2}/)![0] +
      ' ' +
      date.toLocaleString().match(/[A-Z]{2}/)![0];
    return prettifiedDate + time;
  }

  getReturnHistory() {
    return this.http.get(`${this.BACKEND_URI}/return-history`);
  }
}
