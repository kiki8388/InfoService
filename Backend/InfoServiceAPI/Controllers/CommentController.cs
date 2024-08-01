using InfoServiceAPI.Models.DTOs;
using InfoServiceAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using InfoServiceAPI.Services.Comments;
using InfoServiceAPI.Models.Commands;

namespace InfoServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentServices _comments;

        public CommentController(ICommentServices comments)
        {
            _comments = comments;
        }

        [HttpPost]
        [Route("Create")]
        public async Task<ActionResult> Create([FromBody] CreateComment command)
        {
            await _comments.Create(command);
            return Ok();
        }

        [HttpDelete]
        [Route("Delete/{commentId}")]
        public async Task<ActionResult> Delete([FromRoute] Guid commentId)
        {
            await _comments.Delete(commentId);
            return Ok();
        }

        [HttpGet]
        [Route("GetComments/{postId}")]
        public async Task<ActionResult<IEnumerable<PostDto>>> GetCommentsForPost([FromRoute] Guid postId)
        {
            var comments = await _comments.GetCommentsForPost(postId);
            return Ok(comments);
        }
    }
}
