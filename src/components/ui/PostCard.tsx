import type {Post} from "@/types/post";

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        
            {/* 썸네일 */}
            <div className="flex h-48 items-center justify-center bg-linear-to-br from-blue-900 to-blue-500">
                <span className="text-3xl font-bold text-white">
                    {post.thumbnail}
                </span>
            </div>

            {/* 게시글 내용 */}
            <div className="p-6">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                    {post.category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {post.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                    {post.description}
                </p>

                <p className="mt-6 text-sm text-gray-400">
                    {post.date}
                </p>

            </div>
        </article>
    );
}