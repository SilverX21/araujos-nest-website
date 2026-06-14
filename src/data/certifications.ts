export interface Certification {
  id: string;
  title: string;
  platform: 'Udemy' | 'Dometrain' | 'Mosh' | 'Rumos';
  date: string;
  year: number;
}

export const certifications: Certification[] = [
  { id: 'c01', title: 'Claude Code - The Practical Guide', platform: 'Udemy', date: 'June 2026', year: 2026 },
  { id: 'c02', title: 'Understanding TypeScript', platform: 'Udemy', date: 'April 2026', year: 2026 },
  { id: 'c03', title: 'NodeJS - The Complete Guide', platform: 'Udemy', date: 'January 2026', year: 2026 },
  { id: 'c04', title: 'Entity Framework Core - A Full Tour', platform: 'Udemy', date: 'September 2025', year: 2025 },
  { id: 'c05', title: 'ASP.NET Core Development with PostgreSQL & Azure', platform: 'Udemy', date: 'June 2025', year: 2025 },
  { id: 'c06', title: 'Cloud Fundamentals - AWS Services for C# Developers', platform: 'Dometrain', date: 'May 2025', year: 2025 },
  { id: 'c07', title: 'Docker for .NET Developers', platform: 'Udemy', date: 'May 2025', year: 2025 },
  { id: 'c08', title: 'From Zero to Hero: REST APIs in .NET', platform: 'Dometrain', date: 'March 2025', year: 2025 },
  { id: 'c09', title: 'The Complete ASP.NET Core 9 Course for Busy Developers', platform: 'Udemy', date: 'February 2025', year: 2025 },
  { id: 'c10', title: 'React 18 for Beginners', platform: 'Mosh', date: 'September 2024', year: 2024 },
  { id: 'c11', title: 'Unit Testing .NET Application with xUnit & MOQ', platform: 'Udemy', date: 'May 2024', year: 2024 },
  { id: 'c12', title: 'C# Developers: Learn the Art of Writing Clean Code', platform: 'Udemy', date: 'September 2022', year: 2022 },
  { id: 'c13', title: 'JavaScript Basics for Beginners', platform: 'Udemy', date: 'September 2021', year: 2021 },
  { id: 'c14', title: 'Dependency Injection in .NET 5 (.NET Core)', platform: 'Udemy', date: 'December 2020', year: 2020 },
  { id: 'c15', title: 'Entity Framework in Depth: The Complete Guide', platform: 'Udemy', date: 'December 2020', year: 2020 },
  { id: 'c16', title: 'RESTful API with ASP.NET Core Web API', platform: 'Udemy', date: 'December 2020', year: 2020 },
  { id: 'c17', title: 'C# Advanced Topics: Prepare for Technical Interviews', platform: 'Udemy', date: 'November 2020', year: 2020 },
  { id: 'c18', title: 'C# Intermediate: Classes, Interfaces and OOP', platform: 'Udemy', date: 'September 2020', year: 2020 },
  { id: 'c19', title: 'C# Basics for Beginners', platform: 'Udemy', date: 'August 2020', year: 2020 },
  { id: 'c20', title: 'Agile Software Development with Scrum', platform: 'Rumos', date: 'March 2018', year: 2018 },
];
