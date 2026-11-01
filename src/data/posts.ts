import type { Post } from "@/types/post";

export const posts: Post[] = [
    {
        id: 1,
        title: "Next.js로 개발 블로그 만들기",
        description: "Next.js와 Tailwind CSS를 사용하여 개발 블로그를 만드는 방법을 소개합니다.",
        category: "프론트엔드",
        date: "2026-06-15",
        slug: "nextjs-blog-tutorial",
        thumbnail: "NEXT.JS",
    },
    {
        id: 2,
        title: "AWS EC2와 Nginx를 이용한 웹 서비스 배포",
        description:
        "AWS EC2 인스턴스에 Nginx를 설치하고 웹 서비스를 배포하는 과정을 정리했습니다.",
        category: "인프라",
        date: "2026-10-25",
        slug: "aws-ec2-nginx",
        thumbnail: "AWS",
    },
    {
        id: 3,
        title: "TypeScript 기초 문법 정리",
        description:
        "TypeScript의 기본 타입, 인터페이스, 타입 추론, 유니온 타입 등을 정리했습니다.",
        category: "공부기록",
        date: "2026-10-20",
        slug: "typescript-basic",
        thumbnail: "TS",
  },
  {
        id: 4,
        title: "Docker와 Docker Compose 기초",
        description:
        "Docker 컨테이너의 개념과 Docker Compose를 활용한 멀티 컨테이너 구성 방법을 알아봅니다.",
        category: "인프라",
        date: "2026-10-15",
        slug: "docker-compose",
        thumbnail: "DOCKER",
  },
  {
        id: 5,
        title: "Spring Boot REST API 개발하기",
        description:
        "Spring Boot를 사용하여 REST API를 설계하고 Controller, Service, Repository 계층을 구현합니다.",
        category: "백엔드",
        date: "2026-10-10",
        slug: "spring-boot-rest-api",
        thumbnail: "SPRING",
  },
]