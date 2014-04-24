using System;
using System.Threading;
using System.Web;
using System.Web.Http;
using System.Web.Security;
using Newtonsoft.Json.Serialization;
using Sentry.Common.Web.Entities;

namespace AngularConcept
{
    public class AngularConcept : HttpApplication
    {
        protected void Application_Start()
        {
            var json = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
       }

        protected void Application_PostAuthenticateRequest(Object sender, EventArgs e)
        {
            SetCurrentUserForRequest(Request);
        }

        public static void SetCurrentUserForRequest(HttpRequest request)
        {
            var authCookie = request.Cookies[FormsAuthentication.FormsCookieName];

            if (authCookie != null && !string.IsNullOrEmpty(authCookie.Value))
            {
                var authTicket = FormsAuthentication.Decrypt(authCookie.Value);

                var newUser = new CustomPrincipal(authTicket.Name) { SessionKey = authTicket.UserData };

                Thread.CurrentPrincipal = newUser;
            }
        }
    }
}