import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-full-stack-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full-stack-portfolio.html',
  styleUrl: './full-stack-portfolio.scss',
})
export class FullStackPortfolio {
  currentYear = new Date().getFullYear();
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isMenuOpen = false;
    }
  }

  // --- DATA ---
  profile = {
    name: 'Aniket Balel',
    title: 'Full Stack Developer',
    email: 'aniketbalel@gmail.com',
    phone: '+91 7384808391',
    image: 'images/profile-pic_5.1.jpg', // Ensure this file exists in /public/images/
    location: 'India',
    links: {
      linkedin: 'https://www.linkedin.com/in/aniket-balel/',
      github: 'https://github.com/aniketbalel',
    },
    summary:
      `Mean Stack Developer with 3.5+ years of experience in building scalable and high-performance web applications. Proficient in <b> Angular, Node.js, MongoDB, JavaScript, TypeScript, </b> HTML5, CSS, and Bootstrap. Expertise in RxJS, Observables, and Angular CLI.`,
  };

  skills = {
    frontend: [
      'Angular',
      'TypeScript',
      'HTML5',
      'CSS',
      'Bootstrap',
      'Tailwind',
      'RxJS',
      'Angular CLI',
      'EJS',
    ],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'RESTful APIs'],
    tools: [
      'Git',
      'GitHub',
      'Jira',
      'Agile Development',
      'Time Management',
      'Postman',
      'Docker (Basic)',
      'Digital Ocean',
    ],
  };

  experience = [
    {
      company: 'Invesmate Insights Private Limited',
      role: 'Full-Stack Developer',
      duration: 'May 2022 - Present',
      highlights: [
        'Led development of multiple enterprise admin modules such as HRMS, Attendance, Travel Asset & Order Management within a large internal product ecosystem.',
        'Additionally contributed to Angular-based Finance and EdTech platforms, Product page, travel website, travel admin panel, course dashboard, dynamic dashboards, and optimized data-driven views.',
        'Enhanced front-end performance using RxJS & Observables, resulting in a 30% boost in application speed.',
        'Integrated Node.js & MongoDB with Angular, ensuring a 60% reduction in API response times.',
        'Increased user engagement by 55% through responsive UI/UX implementation.',
      ],
    },
    {
      company: 'SpatialHawk Geoinformatics Pvt Ltd',
      role: 'Junior Software Developer Internship',
      duration: 'Nov 2021 - Mar 2022',
      type: 'Remote',
      highlights: ['Design implementation plan.', 'Design UI and API.', 'Develop business logic.'],
    },
  ];

  education = [
    {
      degree: 'Bachelor of Computer Application (BCA)',
      school: 'JIS College of Engineering, Kalyani, WB',
      year: 'April 2022',
      score: 'CGPA: 9.1',
    },
  ];

  certifications = [
    {
      name: 'Cyber Security Palo Alto Institute Certified',
      id: '4Pmo40ESbT',
      link: 'https://paloaltonetworksacademy.net/mod/customcert/verify_certificate.php',
    },
    {
      name: 'AWS - Solutions Architecture Job Simulation',
      id: 'FYqrDj7zfoWm6zs5z',
      link: 'https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_68f212718aab92192a10f747_1760699514831_completion_certificate.pdf',
    },
    {
      name: 'Deloitte Australia - Technology  Job Simulation',
      id: 'xcPvABxyhqumBYrbH',
      link: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_68f212718aab92192a10f747_1760703312237_completion_certificate.pdf',
    },
  ];

  awards = [
    {
      title: 'Most Consistent Performance in Software Development',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7160516727150161920/',
    },
  ];

  languages = ['English', 'Hindi', 'Bengali'];
   projects = [
    {
      id: 'proj-invesmate',
      title: 'Enterprise Admin Suite (HRMS, Attendance, Travel, Assets)',
      company: 'Invesmate Insights Pvt Ltd',
      year: '2023',
      summary: 'Led front-end & integration for admin modules, dashboards and data-driven views.',
      videoUrl: '/assets/invesmate-demo.mp4', // production: put mp4 in src/assets
      poster: '/mnt/data/b8d0b037-c8b2-4732-9cbb-ad48e77acd28.png', // test poster path you uploaded
      highlights: [
        'Led dev of HRMS, Attendance, Travel, Asset & Order Management modules.',
        'Improved front-end perf with RxJS → ~30% faster.',
        'Optimized API integration reducing response times by ~60%.'
      ]
    },
    {
      id: 'proj-travel',
      title: 'Travel Admin Panel & Customer Portal',
      company: 'Invesmate Insights',
      year: '2025',
      summary: 'Admin dashboard & public-facing travel site components.',
      videoUrl: '/assets/travel-demo.mp4',
      poster: '/assets/travel-poster.png',
      highlights: ['Dynamic booking flows', 'Role-based admin views', 'Optimized lazy-loading']
    }
  ];
    activeVideoUrl: string | null = null;
  activePoster: string | null = null;

  openVideo(videoUrl: string, poster?: string) {
    this.activeVideoUrl = videoUrl;
    this.activePoster = poster || null;
    // prevent body scroll
    document.body.style.overflow = 'hidden';
  }

  closeVideo() {
    this.activeVideoUrl = null;
    this.activePoster = null;
    document.body.style.overflow = '';
  }

  // keyboard close (optional)
  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.activeVideoUrl) this.closeVideo();
  }
}
