import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import RecentPosts from "@/components/home/RecentPosts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* Hero */}
      <Hero/>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          
          <div className="rounded-xl border border-gray-200 p-8">
            <h3>
              💻 개발 기록
            </h3>
            <p className="text-gray-600">
              프론트엔드, 백엔드, 기능 구현 과정에서
              배운 점과 해결한 문제들을 정리합니다.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-8">
            <h3 className="mb-3 text-xl font-bold">
              ☁️ 인프라 & 배포
            </h3>
            <p className="text-gray-600">
              서버, 클라우드, 배포, 운영 경험을
              차근차근 기록하고 공유합니다.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-8">
            <h3 className="mb-3 text-xl font-bold">
              📚 일상 & 회고
            </h3>
            <p className="text-gray-600">
              공부와 프로젝트, 그리고 일상의 고민까지
              두 남매의 이야기를 담습니다.
            </p>
          </div>

        </div>
      </section>

      <RecentPosts/>

      <AboutUs/>

    </main>
  );
}