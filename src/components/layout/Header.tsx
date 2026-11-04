import Link from "next/link";

export default function Header() {
    return (
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
    );
}