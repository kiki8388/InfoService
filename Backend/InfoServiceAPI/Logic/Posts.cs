using InfoServiceAPI.Data;
using InfoServiceAPI.Exceptions;
using InfoServiceAPI.Interfaces;
using InfoServiceAPI.Models;
using InfoServiceAPI.Models.Commands;
using InfoServiceAPI.Models.DTOs;
using Microsoft.EntityFrameworkCore;

namespace InfoServiceAPI.Logic
{
    public class Posts : IPosts
    {
        private readonly DataContext _db;

        public Posts(DataContext db)
        {
            _db = db;
        }

        public async Task Create(CreatePost command)
        {
            var post = new Post(command.Title, command.Content, command.Category, command.Author);
            await _db.AddAsync(post);
            await _db.SaveChangesAsync();
        }

        public async Task Delete(Guid postId)
        {
            var post = await _db.Posts.FirstOrDefaultAsync(p => p.Id == postId);
            if (post is null)
                throw new NotFoundException("Post doesn't exist");
            _db.Posts.Remove(post);
            await _db.SaveChangesAsync();
        }

        public async Task<IEnumerable<PostDto>> GetAll()
        {
            var posts = await _db.Posts
                .OrderBy(d => d.CreatedAt)
                .ToListAsync();

            var postsDto = posts.Select(p => new PostDto
            {
                Id = p.Id,
                Title = p.Title,
                Content = p.Content,
                Category = p.Category,
                Author = p.Author,
                Views = p.Views
            }).ToList();

            return postsDto;
        }

        public async Task<Post> Get(Guid postId)
        {
            var post = await _db.Posts.FirstOrDefaultAsync(p => p.Id == postId);
            return post;
        }

        public async Task UpdateViews(Guid postId)
        {
            var post = Get(postId);
            post.Result.Views++;
            await _db.SaveChangesAsync();
        }
    }
}
