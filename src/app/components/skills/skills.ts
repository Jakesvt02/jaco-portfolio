import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  categories = [
    {
      label: 'Frontend',
      skills: ['Angular', 'Vue 3', 'TypeScript', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS'],
    },
    {
      label: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MySQL', 'Firebase'],
    },
    {
      label: 'Tools & Other',
      skills: ['Git / GitHub', 'Webpack / Vite', 'Figma', 'Linux', 'Docker', 'CI/CD'],
    },
  ];
}
