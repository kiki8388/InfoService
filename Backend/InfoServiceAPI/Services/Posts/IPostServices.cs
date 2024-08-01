using InfoServiceAPI.Models;
using InfoServiceAPI.Models.Commands;
using InfoServiceAPI.Models.DTOs;

namespace InfoServiceAPI.Services.Posts
{
    public interface IPostServices
    {
        Task Create(CreatePost command);
        Task Delete(Guid postId);
        Task<Post> Get(Guid postId);
        Task<IEnumerable<PostDto>> GetAll();
        Task UpdateViews(Guid postId);
    }
}