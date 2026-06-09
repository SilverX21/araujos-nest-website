export type SkillColor = 'cyan' | 'orange' | 'emerald'

export interface SkillGroup {
  id: string
  category: string
  color: SkillColor
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    category: 'Backend',
    color: 'cyan',
    skills: ['C#', '.NET Core', 'ASP.NET Core', 'Entity Framework Core', 'Node.js', 'REST API', 'xUnit'],
  },
  {
    id: 'frontend',
    category: 'Frontend',
    color: 'orange',
    skills: ['TypeScript', 'JavaScript', 'React', 'HTML5', 'CSS3'],
  },
  {
    id: 'databases',
    category: 'Databases',
    color: 'cyan',
    skills: ['PostgreSQL', 'SQL Server'],
  },
  {
    id: 'cloud',
    category: 'Cloud & DevOps',
    color: 'emerald',
    skills: ['AWS Lambda', 'AWS S3', 'AWS RDS', 'AWS ECS', 'AWS EC2', 'Secrets Manager', 'Docker'],
  },
  {
    id: 'architecture',
    category: 'Architecture',
    color: 'orange',
    skills: ['Domain Driven Design', 'RESTful API', '.NET MVC', 'Dependency Injection', 'OOP'],
  },
  {
    id: 'tools',
    category: 'Tools & Methods',
    color: 'emerald',
    skills: ['Git', 'GitHub', 'Agile / Scrum', 'Docker'],
  },
]
