using InfoServiceAPI.Data;
using InfoServiceAPI.Exceptions;
using InfoServiceAPI.Models;
using InfoServiceAPI.Models.Commands;
using InfoServiceAPI.Services.Posts;
using Microsoft.EntityFrameworkCore;

namespace InfoServiceAPI.Services.Comments
{
    public class CommentServices : ICommentServices
    {
        private readonly DataContext _db;
        private readonly IPostServices _postServices;

        public CommentServices(DataContext db, IPostServices postServices)
        {
            _db = db;
            _postServices = postServices;
        }

        public async Task Create(CreateComment command)
        {
            var comment = new Comment(command.Author, command.Content);
            var post = await _postServices.Get(command.PostId);
            post.Comments.Add(comment);
            await _db.AddAsync(comment);
            await _db.SaveChangesAsync();
        }

        public async Task<Comment> Get(Guid commentId)
        {
            if (commentId == Guid.Empty)
                throw new NotFoundException("Comment ID cannot be empty");

            var comment = await _db.Comments.FirstOrDefaultAsync(c => c.Id == commentId);

            if (comment is null)
                throw new NotFoundException("Comment doesn't exist");

            return comment;
        }

        public async Task<IEnumerable<Comment>> GetAll()
        {
            var comments = await _db.Comments
                .OrderBy(d => d.CreatedAt)
                .ToListAsync();

            return comments;
        }

        public async Task<IEnumerable<Comment>> GetCommentsForPost(Guid postId)
        {
            var post = await _postServices.Get(postId);

            var comments = post.Comments;

            foreach (var comment in comments)
            {
               comment.CreatedAt.ToString("yyyy-MM-dd HH:mm");
            }

            return comments;
        }

        public async Task Delete(Guid commentId)
        {
            var post = await Get(commentId);

            _db.Comments.Remove(post);
            await _db.SaveChangesAsync();
        }
    }
}

