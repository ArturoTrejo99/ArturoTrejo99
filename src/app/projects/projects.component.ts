import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { name: 'Proyecto 1', description: 'Descripción del Proyecto 1' },
    { name: 'Proyecto 2', description: 'Descripción del Proyecto 2' }
  ];
}

