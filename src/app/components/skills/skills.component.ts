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
      time: '4/1/2020',
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
      time: '12/1/2021',
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
      time: '4/1/2021',
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
      time: '3/1/2022',
      projects: [
        {
          name: 'Veterinaria API',
          url: 'https://github.com/AlexMA2/API-VeterinariaAPP',
        },
        {
          name: 'Pizzeria API',
          url: 'https://github.com/AlexMA2/PizzeriaAPI',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.skills.forEach((skill) => {
      skill.time = this.calculatetime(skill.time);
    });
  }

  calculatetime(time: string): string {
    const date = new Date(time);
    const now = new Date();
    const diffDays = Math.ceil(
      Math.abs(now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    let msg = '';
    if (years > 0) {
      msg += `${years} year${years !== 1 ? 's' : ''}`;
    }
    if (years > 0 && months > 0) {
      msg += ' and ';
    }
    if (months > 0) {
      msg += `${months} month${months !== 1 ? 's' : ''}`;
    }
    return msg;
  }
}
