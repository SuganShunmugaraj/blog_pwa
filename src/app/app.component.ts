


          import { Component, OnInit } from '@angular/core';
          import { HttpClient } from '@angular/common/http';
          @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          })
          export class AppComponent implements OnInit {
            constructor(private http: HttpClient) { }
            title = 'pwa';
            lists: any;
            todoApi: string = 'https://jsonplaceholder.typicode.com/todos/';

            ngOnInit() {
              this.http.get(this.todoApi).subscribe(res => {
                this.lists = res;
              });
            }

          }
