import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold">
            Tech Brothers
            <span className="text-blue-600"> Lab</span>
          </h1>

          <nav className="flex gap-8 text-sm font-medium">
            <Link href="/">
              홈
            </Link>
            <Link href="/blog">
              블로그
            </Link>
            <Link href="/projects">
              프로젝트
            </Link>
            <Link href="/study">
              공부기록
            </Link>
            <Link href="/about">
              소개
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
            두 남매가 함께 운영하는 개발 블로그
          </div>

          <h2 className="text-5xl leading-tight font-bold">
            함께 만들고,
            <br/>
            험께 기록하는
            <br/>
            <span className="text-blue-600">
              개발 블로그
            </span>
          </h2>

          <p>
            개발, 인프라, 배포, 공부, 일상을 함께 기록하는 공간입니다.
            <br />
            두 남매의 시선으로 오늘도 조금 더 나아가는 이야기를 남깁니다.
          </p>

          <div className="mt-10 flex gap-4">
            <Link href="/projects">
              프로젝트 보기 →
            </Link>

            <Link
              href="/blog"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 hover:bg-gray-50"
              >
                최신 글 보기
            </Link>

          </div>

        </div>

      </section>

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

    </main>
  );
}