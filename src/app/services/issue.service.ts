import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  BACKEND_URI = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  prettifyDate(dateString: string): string {
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

  getIssueHistory() {
    return this.http.get(`${this.BACKEND_URI}/issue-history`);
  }
}
