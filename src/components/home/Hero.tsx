import Link from "next/link";

export default function Hero() {
    return (
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
    );
}