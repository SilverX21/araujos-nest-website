export interface WorkExperience {
  id: string
  company: string
  role: string
  type: string
  period: string
  location: string
  current: boolean
  description: string
  highlights: string[]
  tech: string[]
}

export const experience: WorkExperience[] = [
  {
    id: 'iss',
    company: 'ISS Tech Team Portugal',
    role: 'Software Developer',
    type: 'Backend Developer',
    period: 'Apr 2025 – Present',
    location: 'Porto, Portugal',
    current: true,
    description:
      'Working as a Backend Developer on multiple IoT projects that collect and process real-time building data to enable smart space management and predictive maintenance.',
    highlights: [
      'Design, develop and maintain REST APIs and AWS Lambda functions for IoT data pipelines',
      'Manage and optimise relational databases (PostgreSQL and SQL Server)',
      'Work daily with AWS services: Lambda, S3, RDS, ECS, EC2, Secrets Manager',
      'Deploy and manage containerised applications using Docker on AWS',
      'Collaborate across teams for feature delivery and system reliability',
    ],
    tech: ['.NET Core', 'C#', 'PostgreSQL', 'SQL Server', 'AWS', 'Docker', 'REST API'],
  },
  {
    id: 'itsector',
    company: 'ITSector, S.A.',
    role: 'SI Consultant',
    type: '.NET Developer',
    period: 'Oct 2020 – Mar 2025',
    location: 'Braga, Portugal',
    current: false,
    description:
      'Over 4 years delivering software solutions for the banking and insurance sectors. Worked across API development, mobile backends, and public web portals. Also took on an analyst role during a major insurance company merger.',
    highlights: [
      "Developed RESTful APIs for Ageas (insurance) and Millennium BCP Poland (Goodie's flyer search & competition tracking)",
      "Contributed to the backend of Montepio's Mobile App",
      'Analyst role during the Ageas and Ocidental company merger process',
      'Developed and maintained public portals: Montepio Crédito, FNB Banks, and others',
    ],
    tech: ['.NET Core', 'C#', 'SQL Server', 'ASP.NET MVC', 'REST API', 'Agile / Scrum'],
  },
  {
    id: 'nrnow',
    company: 'NRNow',
    role: 'Software Developer',
    type: 'Full-Stack Developer',
    period: 'Jul 2019 – Jun 2020',
    location: 'Braga, Portugal',
    current: false,
    description:
      'Full-stack developer on RealPeritos, a portal dedicated to car inspection, investigation, and expert examination workflows.',
    highlights: [
      'Developed and maintained new features across the RealPeritos platform',
      'Worked across both front-end and back-end layers of the application',
      'Collaborated closely within a small, fast-paced team',
    ],
    tech: ['.NET', 'C#', 'JavaScript', 'HTML', 'CSS', 'SQL Server'],
  },
  {
    id: 'f3m',
    company: 'F3M Information Systems, S.A.',
    role: 'Software Developer',
    type: 'Full-Stack Developer',
    period: 'Mar 2018 – Mar 2019',
    location: 'Braga, Portugal',
    current: false,
    description:
      'Full-stack developer on two internal products: ESocial (HR/social management) and Produz (production management).',
    highlights: [
      'Developed new features and maintained existing modules on ESocial and Produz',
      'Worked across both UI and business logic layers of both platforms',
    ],
    tech: ['.NET', 'C#', 'JavaScript', 'HTML', 'CSS', 'SQL Server'],
  },
  {
    id: 'f3m-trainee',
    company: 'F3M Information Systems, S.A.',
    role: 'Developer Trainee',
    type: 'Internship',
    period: 'Feb 2017 – Jun 2017',
    location: 'Braga, Portugal',
    current: false,
    description:
      "Professional internship during the final year of the Bachelor's degree. First industry exposure to enterprise software development.",
    highlights: [
      'First professional exposure to enterprise .NET development',
      'Contributed to internal tooling and tasks under mentorship',
    ],
    tech: ['.NET', 'C#', 'SQL Server'],
  },
]
