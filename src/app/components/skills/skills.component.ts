import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  time: string;
  projects: Project[];
}

interface Project {
  name: string;
  url: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'HTML / CSS / JavaScript',
      time: '2 years and 6 months',
      projects: [
        {
          name: 'CalculatorGame',
          url: 'https://alexma2.github.io/CalculatorGame/',
        },
        {
          name: 'Animacion-del-Algoritmo-QuickSort',
          url: 'https://alexma2.github.io/Animacion-del-Algoritmo-QuickSort/',
        },
      ],
    },
    {
      name: 'Angular / TypeScript',
      time: '1 year and 6 months',
      projects: [
        {
          name: 'DooFast',
          url: 'https://github.com/AlexMA2/DooFast-FrontEnd',
        },
        {
          name: 'Authentication',
          url: 'https://github.com/AlexMA2/Authentication',
        },
      ],
    },
    {
      name: 'React.JS / Next.JS',
      time: '1 year and 6 months',
      projects: [
        {
          name: 'ColesRoom',
          url: 'https://github.com/AlexMA2/ColesRoom-Frontend',
        },
        {
          name: 'Questionary',
          url: 'https://github.com/AlexMA2/Questionary',
        },
        {
          name: 'Pokedex Pokemon',
          url: 'https://github.com/AlexMA2/pokemon-pokedex',
        },
      ],
    },
    {
      name: 'ASP. NET / C #',
      time: '1 year',
      projects: [
        {
          name: 'Veterinaria API',
          url: 'https://github.com/AlexMA2/API-VeterinariaAPP',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
