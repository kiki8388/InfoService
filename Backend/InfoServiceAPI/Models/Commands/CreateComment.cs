namespace InfoServiceAPI.Models.Commands
{
    public class CreateComment
    {
        public Guid PostId { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
    }
}
