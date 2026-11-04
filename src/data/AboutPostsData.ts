import { Developer } from "@/types/AboutusPost";

export const developers: Developer[] = [
  {
    id: 1,
    name: "오빠",
    role: "Backend / Infrastructure",
    description:
      "백엔드 개발과 서버 인프라에 관심이 많습니다. 안정적인 서비스를 구축하고 운영하는 개발자를 목표로 공부하고 있습니다.",
    skills: ["Java", "Spring Boot", "Linux", "Docker", "Network"],
    github: "https://github.com/DoubleSSB",
  },
  {
    id: 2,
    name: "동생",
    role: "Backend Developer",
    description:
      "백엔드 개발을 중심으로 다양한 기술을 학습하고 있습니다. 새로운 기술을 직접 구현하며 성장하는 것을 좋아합니다.",
    skills: ["Java", "Spring Boot", "SQL", "Git"],
  },
];