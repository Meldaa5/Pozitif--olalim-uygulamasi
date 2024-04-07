using Microsoft.EntityFrameworkCore;
using PozitifKal.Model;

namespace PozitifKal.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions options):base(options)
        {
            
        }
        public DbSet<User> Users { get; set; }
        //public DbSet<Admin> Admins { get; set; }
    }
}
