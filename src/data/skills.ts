export interface SkillGroup {
  id: string;
  category: string;
  color: 'cyan' | 'orange' | 'emerald';
  skills: string[];
  statusLabel: string;
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'architecture',
    category: 'Architecture & Patterns',
    color: 'orange',
    skills: ['RESTful API', 'Domain Driven Design', '.NET MVC', 'Dependency Injection', 'OOP'],
    statusLabel: 'DESIGN.PATTERNS // OPERATIONAL',
  },
  {
    id: 'backend',
    category: 'Backend',
    color: 'cyan',
    skills: ['C# / .NET Core', 'Entity Framework Core', 'ASP.NET Core', 'Node.js', 'xUnit'],
    statusLabel: 'BACKEND.STACK // ONLINE',
  },
  {
    id: 'frontend',
    category: 'Frontend',
    color: 'orange',
    skills: ['JavaScript / TypeScript', 'HTML5 / CSS3', 'React'],
    statusLabel: 'FRONTEND.LAYER // ACTIVE',
  },
  {
    id: 'databases',
    category: 'Databases',
    color: 'cyan',
    skills: ['SQL Server', 'PostgreSQL'],
    statusLabel: 'DATA.LAYER // SYNCED',
  },
  {
    id: 'cloud',
    category: 'Cloud & DevOps',
    color: 'emerald',
    skills: ['AWS Lambda', 'AWS S3', 'AWS RDS', 'AWS ECS', 'AWS EC2', 'Secrets Manager', 'Docker', 'Git'],
    statusLabel: 'CLOUD.INFRA // DEPLOYED',
  },
  {
    id: 'methodologies',
    category: 'Methodologies',
    color: 'emerald',
    skills: ['Agile / Scrum'],
    statusLabel: 'WORKFLOW // OPTIMIZED',
  },
];
