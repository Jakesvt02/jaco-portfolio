import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Zeal & Fire Studio',
      description: 'Premium art portfolio website for South African artist Zané van Tonder. Features a masonry gallery, lightbox, carousel, contact form, and full mobile-responsive design.',
      tags: ['Vue 3', 'SCSS', 'Vue Router', 'Webpack'],
      github: 'https://github.com/Jakesvt02/zeal-fire',
      featured: true,
    },
    {
      title: 'Project Two',
      description: 'A full-stack web application built with modern technologies. Details coming soon.',
      tags: ['Angular', 'TypeScript', 'Node.js'],
      github: 'https://github.com/Jakesvt02',
    },
    {
      title: 'Project Three',
      description: 'Another exciting project. Details coming soon.',
      tags: ['React', 'PostgreSQL', 'REST API'],
      github: 'https://github.com/Jakesvt02',
    },
  ];
}
