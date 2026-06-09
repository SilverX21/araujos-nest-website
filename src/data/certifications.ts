export type Platform = 'Udemy' | 'Dometrain' | 'Code With Mosh' | 'Rumos'
export type CertCategory = 'AI & Tooling' | 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'Testing' | 'Agile'

export interface Certification {
  id: string
  title: string
  platform: Platform
  date: string
  year: number
  category: CertCategory
}

export const certifications: Certification[] = [
  {
    id: 'claude-code',
    title: 'Claude Code — The Practical Guide',
    platform: 'Udemy',
    date: 'June 2026',
    year: 2026,
    category: 'AI & Tooling',
  },
  {
    id: 'typescript',
    title: 'Understanding TypeScript',
    platform: 'Udemy',
    date: 'April 2026',
    year: 2026,
    category: 'Frontend',
  },
  {
    id: 'nodejs',
    title: 'NodeJS — The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    platform: 'Udemy',
    date: 'January 2026',
    year: 2026,
    category: 'Backend',
  },
  {
    id: 'ef-core-tour',
    title: 'Entity Framework Core — A Full Tour',
    platform: 'Udemy',
    date: 'September 2025',
    year: 2025,
    category: 'Backend',
  },
  {
    id: 'aspnet-postgres',
    title: 'ASP.NET Core Development with PostgreSQL & Azure',
    platform: 'Udemy',
    date: 'June 2025',
    year: 2025,
    category: 'Backend',
  },
  {
    id: 'aws-csharp',
    title: 'Cloud Fundamentals — AWS Services for C# Developers',
    platform: 'Dometrain',
    date: 'May 2025',
    year: 2025,
    category: 'Cloud & DevOps',
  },
  {
    id: 'docker-dotnet',
    title: 'Docker for .NET Developers',
    platform: 'Udemy',
    date: 'May 2025',
    year: 2025,
    category: 'Cloud & DevOps',
  },
  {
    id: 'rest-dotnet',
    title: 'From Zero to Hero: REST APIs in .NET',
    platform: 'Dometrain',
    date: 'March 2025',
    year: 2025,
    category: 'Backend',
  },
  {
    id: 'aspnet9',
    title: 'The Complete ASP.NET Core 9 Course for Busy Developers',
    platform: 'Udemy',
    date: 'February 2025',
    year: 2025,
    category: 'Backend',
  },
  {
    id: 'react18',
    title: 'React 18 for Beginners',
    platform: 'Code With Mosh',
    date: 'September 2024',
    year: 2024,
    category: 'Frontend',
  },
  {
    id: 'xunit',
    title: 'Unit Testing .NET Applications with xUnit & MOQ',
    platform: 'Udemy',
    date: 'May 2024',
    year: 2024,
    category: 'Testing',
  },
  {
    id: 'clean-code',
    title: 'C# Developers: Learn the Art of Writing Clean Code',
    platform: 'Udemy',
    date: 'September 2022',
    year: 2022,
    category: 'Backend',
  },
  {
    id: 'js-basics',
    title: 'JavaScript Basics for Beginners',
    platform: 'Udemy',
    date: 'September 2021',
    year: 2021,
    category: 'Frontend',
  },
  {
    id: 'di-dotnet',
    title: 'Dependency Injection in .NET 5 (.NET Core)',
    platform: 'Udemy',
    date: 'December 2020',
    year: 2020,
    category: 'Backend',
  },
  {
    id: 'ef-depth',
    title: 'Entity Framework in Depth: The Complete Guide',
    platform: 'Udemy',
    date: 'December 2020',
    year: 2020,
    category: 'Backend',
  },
  {
    id: 'restful-api',
    title: 'RESTful API with ASP.NET Core Web API — Create and Consume',
    platform: 'Udemy',
    date: 'December 2020',
    year: 2020,
    category: 'Backend',
  },
  {
    id: 'csharp-advanced',
    title: 'C# Advanced Topics: Prepare for Technical Interviews',
    platform: 'Udemy',
    date: 'November 2020',
    year: 2020,
    category: 'Backend',
  },
  {
    id: 'csharp-intermediate',
    title: 'C# Intermediate: Classes, Interfaces and OOP',
    platform: 'Udemy',
    date: 'September 2020',
    year: 2020,
    category: 'Backend',
  },
  {
    id: 'csharp-basics',
    title: 'C# Basics for Beginners: Learn C# Fundamentals by Coding',
    platform: 'Udemy',
    date: 'August 2020',
    year: 2020,
    category: 'Backend',
  },
  {
    id: 'agile-scrum',
    title: 'Agile Software Development with Scrum',
    platform: 'Rumos',
    date: 'March 2018',
    year: 2018,
    category: 'Agile',
  },
]
