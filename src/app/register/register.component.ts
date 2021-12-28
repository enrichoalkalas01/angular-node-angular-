import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  state = {
    data: null
  }
  
  constructor() {
    this.fetchData()
    
  }

  ngOnInit(): void {
  }

  async fetchData() {
    let data = await fetch('http://localhost:7575/dev/tester').then(response => response.json()).catch(err => err)
    this.state.data = data
    console.log(this.state.data)
  }
}
