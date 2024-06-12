using InfoServiceAPI.Models.Commands;
using InfoServiceAPI.Models.DTOs;

namespace InfoServiceAPI.Interfaces
{
    public interface IPosts
    {
        Task Create(CreatePost command);
        Task Delete(Guid postId);
        Task<IEnumerable<PostDto>> GetAll();
        Task UpdateViews(Guid postId);
    }
}