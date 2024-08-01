using InfoServiceAPI.Models;
using InfoServiceAPI.Models.Commands;

namespace InfoServiceAPI.Services.Comments
{
    public interface ICommentServices
    {
        Task Create(CreateComment command);
        Task Delete(Guid commentId);
        Task<Comment> Get(Guid commentId);
        Task<IEnumerable<Comment>> GetAll();
        Task<IEnumerable<Comment>> GetCommentsForPost(Guid postId);
    }
}