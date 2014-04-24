using System;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using Newtonsoft.Json.Serialization;
using Sentry.Common.Web.Utilities;

namespace AngularConcept
{
    public class AngularConcept : HttpApplication
    {
        protected void Application_Start()
        {
            var json = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }

        protected void Application_PostAuthenticateRequest(Object sender, EventArgs e)
        {
            HttpContext.Current.SetCurrentUserForRequest(Request);
        }
    }
}