using InfoServiceAPI.Data;
using InfoServiceAPI.Models;
using System.Reflection;

namespace InfoServiceAPI.Seeder
{
    public class Seeder
    {
        private readonly DataContext _db;

        public Seeder(DataContext db)
        {
            _db = db;
        }

        public void Seed()
        {
            if(!_db.Posts.Any())
            {
                var posts = GetPosts();
                _db.Posts.AddRange(posts);
                _db.SaveChanges();
            }
        }

        private IEnumerable<Post> GetPosts()
        {
            var posts = new List<Post>()
            {
                new Post()
                {
                    Title = "Example title 1",
                    Content = "Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda.",
                    Category = "Sports",
                    Author = "Jan Nowak",
                },
                new Post()
                {
                    Title = "Example title 2",
                    Content = "Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda.",
                    Category = "Sports",
                    Author = "Jan Kowalski",
                },
                new Post()
                {
                    Title = "Example title 3",
                    Content = "Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda.",
                    Category = "World",
                    Author = "Jan Kowalski",
                },
                new Post()
                {
                    Title = "Example title 4",
                    Content = "Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda. Lorem ipsum dolor sit amet. Et blanditiis perspiciatis non quia saepe hic perspiciatis laudantium est ipsa voluptas. Et blanditiis commodi rem esse galisum et repellendus dolores. Est nisi rerum aut voluptatem molestiae ut voluptates assumenda.",
                    Category = "Politics",
                    Author = "Jan Nowak",
                }
            };
            return posts;
        }
    }
}
