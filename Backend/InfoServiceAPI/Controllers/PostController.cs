using InfoServiceAPI.Interfaces;
using InfoServiceAPI.Models.Commands;
using InfoServiceAPI.Models.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InfoServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPosts _posts;

        public PostController(IPosts posts)
        {
            _posts = posts;
        }

        [HttpPost]
        [Route("Create")]
        public async Task<ActionResult> Create([FromBody] CreatePost command)
        {
            await _posts.Create(command);
            return Ok();
        }

        [HttpDelete]
        [Route("Delete/{postId}")]
        public async Task<ActionResult> Delete([FromRoute] Guid postId)
        {
            await _posts.Delete(postId);
            return Ok();
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<ActionResult<IEnumerable<PostDto>>> GetAll()
        {
            var posts = await _posts.GetAll();
            return Ok(posts);
        }

        [HttpPut]
        [Route("UpdateViews/{postId}")]
        public async Task<ActionResult> UpdateViews([FromRoute] Guid postId)
        {
            await _posts.UpdateViews(postId);
            return Ok();
        }
    }
}
