import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-gray-50">

            <div className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-12 md:grid-cols-3">

                    {/* 브랜드 소개 */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Tech Brothers
                            <span className="text-blue-600"> Lab</span>
                        </h2>

                        <p className="mt-4 text-sm leading-relaxed text-gray-600">
                            함께 배우고, 함께 성장하는
                            <br />
                            두 형제의 개발 기록 공간입니다.
                            <br />
                            개발, 인프라, 프로젝트와 일상을 공유합니다.
                        </p>
                    </div>

                {/* 페이지 메뉴 */}
                <div>
                    <h3 className="mb-5 text-sm font-bold text-gray-900">
                        Explore
                    </h3>

                    <nav className="flex flex-col gap-3 text-sm text-gray-600">
                        <Link href="/blog" className="hover:text-blue-600">
                            블로그
                        </Link>

                        <Link href="/projects" className="hover:text-blue-600">
                            프로젝트
                        </Link>

                        <Link href="/study" className="hover:text-blue-600">
                            공부기록
                        </Link>

                        <Link href="/about" className="hover:text-blue-600">
                            소개
                        </Link>
                    </nav>
                </div>

                {/* 외부 링크 */}
                <div>
                    <h3 className="mb-5 text-sm font-bold text-gray-900">
                        Connect
                    </h3>

                    <div className="flex flex-col gap-3 text-sm text-gray-600">
                        
                        <a
                            href="https://gitbub.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600"
                        >
                            GitHub ↗
                        </a>

                        <span className="text-gray-400">
                            Email (준비 중)
                        </span>


                    </div>
                </div>
            </div>

            {/* 하단 저작권 */}
            <div className="mt-16 flex flex-col gap-4 border-t border-gray-200 pt-8 
            text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

                <p>
                   © {new Date().getFullYear()} Tech Brothers Lab.
                   All rights reserved. 
                </p>

                <p>
                    Built with Next.js & Tailwind CSS.
                </p>

             </div>

            </div>

        </footer>
    );
}