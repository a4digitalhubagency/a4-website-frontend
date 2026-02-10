import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/blog")} variant="default">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section with Image Placeholder */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-white via-blue-50/30 to-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="mb-8 -ml-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header - Optimized Width for Readability */}
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                {post.category}
              </span>
            </div>

            {/* Title - Large, Bold, High Contrast */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm md:text-base mb-10">
              <div className="flex items-center gap-2">
                <User size={18} className="text-primary" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Featured Image - Shows actual image if available, otherwise blue gradient placeholder */}
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 border border-blue-200 mb-12 flex items-center justify-center overflow-hidden">
              {post.featuredImage ? (
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Featured Image</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content - Typography Optimized for Readability */}
      <article className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Content Container - Max Width 65-75 Characters per Line for Optimal Readability */}
          <div
            className="max-w-3xl mx-auto prose prose-lg prose-slate
              prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-base prose-p:md:text-lg prose-p:leading-relaxed prose-p:text-slate-700 prose-p:mb-6
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-base prose-li:md:text-lg prose-li:leading-relaxed prose-li:text-slate-700
              prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content || '<p>Content coming soon...</p>' }}
          />

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto mt-16 pt-12 border-t border-slate-200">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 text-center border border-blue-100">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help bring your ideas to life with expert development and design.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="default" className="font-semibold">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Related Posts Placeholder */}
          <div className="max-w-3xl mx-auto mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-foreground mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group block"
                  >
                    <div className="rounded-xl bg-white border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                      {/* Related Post Image */}
                      <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center overflow-hidden">
                        {relatedPost.thumbnail || relatedPost.featuredImage ? (
                          <img
                            src={relatedPost.thumbnail || relatedPost.featuredImage}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <span className="text-xs text-muted-foreground font-medium">{relatedPost.category}</span>
                        )}
                      </div>
                      <div className="p-5">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
