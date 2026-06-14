export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "iss",
    company: "ISS Tech Team Portugal",
    role: "Software Developer (Backend)",
    type: "Full-time",
    period: "2025/04 – Present",
    location: "Porto, Portugal",
    highlights: [
      "IoT projects for smart building management — space management & predictive maintenance",
      "Design and implementation of REST APIs and AWS Lambda functions",
      "PostgreSQL and SQL Server database management",
      "AWS infrastructure: Lambda, S3, RDS, ECS, EC2, Secrets Manager",
      "Docker containerized deployments",
    ],
    stack: [".NET Core", "C#", "PostgreSQL", "SQL Server", "AWS", "Docker"],
  },
  {
    id: "itsector",
    company: "ITSector, S.A.",
    role: "SI Consultant (.NET Developer)",
    type: "Full-time",
    period: "2020/10 – 2025/03",
    location: "Braga, Portugal",
    highlights: [
      "Banking and insurance sector solutions across 4+ years",
      "RESTful APIs for Ageas and Millennium BCP Poland (Goodie's platform)",
      "Montepio Mobile App backend development",
      "Analyst role for Ageas + Ocidental merger integration",
      "Public portal development: Montepio Crédito, FNB Banks",
    ],
    stack: [
      ".NET Core",
      "C#",
      "SQL Server",
      "ASP.NET MVC",
      "REST APIs",
      "Agile",
    ],
  },
  {
    id: "nrnow",
    company: "NRNow",
    role: "Software Developer (Full-Stack)",
    type: "Full-time",
    period: "2019/07 – 2020/06",
    location: "Braga, Portugal",
    highlights: [
      "RealPeritos portal for car inspection and expert examination",
      "Full-stack development covering front-end and back-end",
    ],
    stack: [".NET", "C#", "JavaScript", "HTML", "CSS", "SQL Server"],
  },
  {
    id: "f3m-dev",
    company: "F3M Information Systems S.A.",
    role: "Software Developer",
    type: "Full-time",
    period: "2018/03 – 2019/03",
    location: "Braga, Portugal",
    highlights: [
      "ESocial and Produz internal products development",
      "Full-stack development across both products",
    ],
    stack: [".NET", "C#", "JavaScript", "HTML", "CSS", "SQL Server"],
  },
  {
    id: "f3m-trainee",
    company: "F3M Information Systems S.A.",
    role: "Developer Trainee",
    type: "Internship",
    period: "2017/02 – 2017/06",
    location: "Braga, Portugal",
    highlights: [
      "Professional internship — first industry experience",
      "Introduction to enterprise software development practices",
    ],
    stack: [".NET", "C#", "SQL Server"],
  },
];

export const education = {
  institution: "Instituto Politécnico do Cávado e do Ave (IPCA)",
  degree: "Bachelor's Degree in Computer Systems Engineering",
  period: "2013/10 – 2017/10",
  location: "Barcelos, Portugal",
};
