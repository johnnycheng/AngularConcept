using System.Web.Mvc;

namespace AngularConcept.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
            {
                return Redirect("http://localhost:4444");
            }

            return new FilePathResult("index.html", "text/html");
        }

    }
}
