using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web.Hosting;
using System.Web.Http;

namespace AngularConcept
{
    public class HomeController : ApiController
    {
        public HttpResponseMessage Get()
        {
            if (!User.Identity.IsAuthenticated)
            {
                var response = Request.CreateResponse(HttpStatusCode.Redirect);
                response.Headers.Location = new Uri("http://localhost:4444");
                return response;
            }

            var file = File.OpenRead(HostingEnvironment.MapPath("~/index.html"));
            return new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StreamContent(file)
            };

        }

    }
}
