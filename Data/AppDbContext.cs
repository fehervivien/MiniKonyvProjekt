using Microsoft.EntityFrameworkCore;
using MiniKonyvProjekt.Models;
using System.Collections.Generic;

namespace MiniKonyvProjekt.Data
{
    public class AppDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Book> Books { get; set; }
    }
}
