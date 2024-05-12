
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PozitifKal.Data;
using PozitifKal.Model;

namespace PozitifKal.Controllers;
[Route("api/[controller]")]
[ApiController]
[EnableCors("*")]
public class UserControllers:ControllerBase
{   
    private readonly AppDbContext appDbContext;
    public UserControllers(AppDbContext appDbContext)
    {
        this.appDbContext = appDbContext;
    }
    [HttpPost]
    public async Task<IActionResult> AddUser(User user)
    {
        appDbContext.Users.Add(user);
        await appDbContext.SaveChangesAsync();
        return Ok(user);
    }
    [HttpGet]
    public async Task<IActionResult> getUsers()
    {
        var users = await appDbContext.Users.ToListAsync();
        return Ok(users);
    }
    [HttpGet("{id}")]
    public async Task<IActionResult> GetUserById(int id)
    {
        var user = await appDbContext.Users.FindAsync(id);

        if (user == null)
        {
            return NotFound(); // Kullanıcı bulunamadıysa 404 Not Found döndür
        }

        return Ok(user); // Kullanıcıyı bulduğumuzda 200 OK döndür
    }
    [HttpPost("login")]
    
    public async Task<IActionResult> LoginUser(string email, string password)
    {
        var user = await appDbContext.Users.FirstOrDefaultAsync(u => u.Email == email && u.Password == password);

        if (user == null)
        {
            return Unauthorized(); // Kullanıcı kimlik doğrulaması başarısızsa 401 Unauthorized döndür
        }

        return Ok(user); // Kullanıcı kimlik doğrulaması başarılıysa 200 OK döndür
    }
}
