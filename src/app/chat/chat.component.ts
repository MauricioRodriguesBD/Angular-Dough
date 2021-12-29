import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    fetch('https://springbotchat-dough.herokuapp.com/token', {
        method: 'GET',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json'
        //   'Authorization': 'Bearer ' + this.state.clientToken,
        // },
        // body: JSON.stringify({UserName : 'julio.mig', Pass : 'abc123'})
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);

      })
      .catch(error => {
          window.alert("Usuario ou senha invÃ¡lidos!");
      });

    }

  }


