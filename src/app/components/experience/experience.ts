import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface Role {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  roles: Role[] = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Company Name',
      period: '2024 — Present',
      location: 'South Africa',
      description: 'Led development of key product features, collaborated with cross-functional teams, and improved performance across the stack.',
      skills: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Frontend Developer',
      company: 'Company Name',
      period: '2022 — 2024',
      location: 'South Africa',
      description: 'Built and maintained responsive web applications, worked closely with design teams to implement pixel-perfect UIs.',
      skills: ['Vue 3', 'SCSS', 'REST APIs', 'Git'],
    },
    {
      title: 'Junior Developer',
      company: 'Company Name',
      period: '2021 — 2022',
      location: 'South Africa',
      description: 'Started my career building web interfaces and contributing to team projects in an agile environment.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
    },
  ];
}
