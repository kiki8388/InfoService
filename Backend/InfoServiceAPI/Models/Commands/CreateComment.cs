using System.ComponentModel.DataAnnotations;

namespace InfoServiceAPI.Models.Commands
{
    public class CreateComment
    {
        public Guid PostId { get; set; }
        [Required]
        public string Author { get; set; }
        [StringLength(2000)]
        public string Content { get; set; }
    }
}
