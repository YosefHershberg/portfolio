import { docker, aws, express, git, redis, javascript, mongodb, node, react, typescript, culinarygpt, codesplainer, whatsappthing, next, mysql, postgresql, sqlserver, kubernetes } from "@/assets";

export const products = [
  {
    title: "CulinaryGPT",
    link: "https://culinary-gpt.vercel.app",
    thumbnail:
      culinarygpt,
  },
  {
    title: "CodeSplainer",
    link: "https://code-explain-app.vercel.app",
    thumbnail:
      codesplainer,
  },
  {
    title: "MessageSpace",
    link: "https://github.com/YosefHershberg/MessageSpace_App_Frontend",
    thumbnail:
      whatsappthing,
  },
  {
    title: "CulinaryGPT",
    link: "https://culinary-gpt.vercel.app",
    thumbnail:
      culinarygpt,
  },
  {
    title: "CodeSplainer",
    link: "https://code-explain-app.vercel.app",
    thumbnail:
      codesplainer,
  },
  {
    title: "MessageSpace",
    link: "https://github.com/YosefHershberg/MessageSpace_App_Frontend",
    thumbnail:
      whatsappthing,
  },
  {
    title: "CulinaryGPT",
    link: "https://culinary-gpt.vercel.app",
    thumbnail:
      culinarygpt,
  },
  {
    title: "CodeSplainer",
    link: "https://code-explain-app.vercel.app",
    thumbnail:
      codesplainer,
  },
  {
    title: "MessageSpace",
    link: "https://github.com/YosefHershberg/MessageSpace_App_Frontend",
    thumbnail:
      whatsappthing,
  },
];

export const technologies = [
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: 'Express JS',
    icon: express
  },
  {
    name: 'NextJS',
    icon: next
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker
  },
  {
    name: 'AWS',
    icon: aws
  },
  {
    name: 'Redis',
    icon: redis
  },
  {
    name: 'MySQL',
    icon: mysql
  },
  {
    name: 'PostgreSQL',
    icon: postgresql
  },
  {
    name: 'SQL Server',
    icon: sqlserver
  },
  {
    name: 'Kubernetes',
    icon: kubernetes
  },
];

export const projects = [
  {
    name: "CulinaryGPT",
    description:
      `"CulinaryGPT" is a AI Based application that helps users discover personalized dishes based on dietary preferences, ingredient availability, and nutritional requirements.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: 'express',
        color: 'green-text-gradient'
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: culinarygpt,
    source_code_link: "https://github.com/YosefHershberg/culinary_gpt_app",
    deploy_link: "https://culinary-gpt.vercel.app/",
  },
  {
    name: "CodeSplainer",
    description:
      'This AI powered project is an app that helps new developers understand any code uploaded to github by explaining it in simple terms.',
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: codesplainer,
    source_code_link: "https://github.com/YosefHershberg/code_explain_app",
    deploy_link: "https://code-explain-app.vercel.app/",
  },
  {
    name: "MessageSpace",
    description:
      `"MessageSpace" is a WhatsApp management platform that helps companies optimize their organizational processes`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: whatsappthing,
    source_code_link: "https://github.com/YosefHershberg/MessageSpace_App_Frontend",
  },
];