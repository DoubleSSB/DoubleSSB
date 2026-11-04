import {developers} from "@/data/AboutPostsData";

export default function AboutUs() {
    return(
        <section
            id="about"
            className="mx-auto max-w-7xl px-6 py-16"
        >
            {/* 섹션 제목 */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900">
                    About Us
                </h2>

                <p className="mt-3 text-gray-500">
                    개발을 좋아하는 두 남매가 함께 배우고,
                    기록하며 성장하는 공간입니다.
                </p>
            </div>

            {/* 개발자 프로필 */}
            <div className="grid gap-6 mmd:grid-cols-2">
                {developers.map((developer) => (
                    <div 
                        key={developer.id}
                        className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
                    >
                        {/* 프로필 상단 */}
                        <div className="flex items-center gap-4">
                           <div className="h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                                {developer.id === 1 ? "C" : "A"}
                           </div>

                           <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    {developer.name}
                                </h3>

                                <p className="mt-1 text-sm font-medium text-blue-600">
                                    {developer.role}
                                </p>
                           </div>
                        </div>

                        {/* 소개 */}
                        <p className="mt-6 min-h-16 text-sm leading-7 text-gray-600">
                            {developer.description}
                        </p>

                        {/* 기술 스택 */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {developer.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* GitHub 링크 */}
                        {developer.github && (
                            <div className="mt-8 border-t border-gray-100 pt-5">
                                <a
                                    href={developer.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-blue-600 hover:underline"
                                >
                                    GitHub 방문하기 →
                                </a>
                            </div>
                        )}
                    </div>
                ))

                }
            </div>
        </section>
    )
}