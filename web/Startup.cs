using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;

namespace JSONConverter
{
  public class Startup
  {
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      // 静的ファイルのデフォルト設定を有効にする
      app.UseDefaultFiles();

      // 静的ファイルを使用する
      app.UseStaticFiles();

      // ヒットしないファイルの処理
      app.Run(async (context) =>
      {
        await Task.Run(()=>{
          if ($"{context.Request.Path}".IndexOf(".") <= 0)
          {
            // 拡張子なしの場合はjsファイルとしてリダイレクトする
            context.Response.Redirect($"{context.Request.Path}.js");
          }
        });
      });

      
    }
  }
}
