using System;
using System.Web;
using System.Web.Http;
using Newtonsoft.Json.Serialization;
using Sentry.Common.Web.Utilities;

namespace AngularConcept
{
    public class AngularConcept : HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(Register);
        }

        protected void Application_PostAuthenticateRequest(Object sender, EventArgs e)
        {
           HttpContext.Current.SetCurrentUserForRequest(Request);
        }

        public static void Register(HttpConfiguration config)
        {
            var json = config.Formatters.JsonFormatter;
            json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );

            config.Routes.MapHttpRoute(
                name: "Default",
                routeTemplate: "{*catchall}",
                defaults: new { controller = "Home" }
            );

        }
    }
}