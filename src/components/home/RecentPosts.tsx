import Link from "next/link";
import { posts } from "@/data/posts"
import PostCard from "@/components/ui/PostCard";

export default function RecentPosts() {

        // 최신 글 3개 가져오기
        const recentPosts = [...posts]
        .sort((a,b) => b.date.localeCompare(a.date))
        .slice(0,3);

        return(
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-6">

                    {/* 제목 */}
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">
                                최근 글
                            </h2>

                            <p className="mt-3 text-gray-600">
                                새로운 경험과 배운 것을 꾸준히 기록하고 있습니다.
                            </p>
                        </div>

                        <Link
                            href="/blog"
                            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                        >
                            전체 글 보기 →
                        </Link>
                    </div>

                    {/* 최근 게시글 3개 */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {recentPosts.map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}   
                            />
                        ))}
                    </div>
                    
                </div>
            </section>
        );
}
