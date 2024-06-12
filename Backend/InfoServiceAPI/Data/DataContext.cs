using InfoServiceAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel;
using System.Security.Principal;

namespace InfoServiceAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opt) : base(opt) { }

        public DbSet<Post> Posts { get; set; }

    }
}
