namespace InfoServiceAPI.Models.Commands
{
    public class CreatePost
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string Category { get; set; }
        public string Author { get; set; }
    }
}
