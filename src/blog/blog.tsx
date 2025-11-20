import { Link } from 'react-router-dom'
import './blog.css'
import Navbar from '../components/Navbar'

interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  path: string
}

const blogPosts: BlogPost[] = [
  {
    id: 'why-llms-use-emojis',
    title: 'Why Do LLMs Use Emojis?',
    date: 'November 2025',
    excerpt: 'An exploration of the training, design, and incentive structures that lead large language models to frequently use emojis in their responses.',
    path: '/blog/why-llms-use-emojis'
  }
]

export default function BlogHome() {
  return (
    <>
      <Navbar />
      <div className="blog-container">
      <div className="blog-header">
        <h1>Blog</h1>
        <p>Thoughts on ML, Math, and other things I find interesting</p>
      </div>
      <div className="blog-posts-list">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post-card">
            <Link to={post.path} className="blog-post-link">
              <h3>{post.title}</h3>
              <p className="blog-post-date">{post.date}</p>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <span className="read-more">Read more →</span>
            </Link>
          </article>
        ))}
      </div>
      </div>
    </>
  )
}
