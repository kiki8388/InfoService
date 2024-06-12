namespace InfoServiceAPI.Models
{
    public class Post : Entity
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string Category { get; set; }
        public string Author{ get; set; }
        public int Views { get; set; }

        public Post(string title, string content, string category, string author)
        {
            Title = title;
            Content = content;
            Category = category;
            Author = author;
            Views = 0;
        }
    }
}
