using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
namespace PozitifKal
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            // CORS politikalarını ekle
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                        .AllowAnyOrigin() // Tüm origin'lere izin vermek için
                        .AllowAnyMethod() // Tüm HTTP metodlarına izin vermek için
                        .AllowAnyHeader()); // Tüm HTTP başlıklarına izin vermek için
            });

            // Diğer servisleri ekleyin...
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // CORS politikasını etkinleştir
            app.UseCors("CorsPolicy");

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
