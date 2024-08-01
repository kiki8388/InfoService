namespace InfoServiceAPI.Models
{
    public class Comment : Entity
    {
        public string Author { get; set; }
        public string Content { get; set; }

        public Comment(string author, string content)
        {
            Author = author;
            Content = content;
        }
    }
}
