using System.Collections.Generic;
using System.Web.Http;

namespace AngularConcept.Api
{
    public class UserFiltersController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<UserFilter> Get()
        {
            return new UserFilter[]
            {
                new UserFilter { Name = "Filter 1" }, 
                new UserFilter { Name = "Filter 2" }, 
            };
        }

        // GET api/<controller>/5
        public UserFilter Get(int id)
        {
            return new UserFilter { Name = "Filter 1" };
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }

    public class UserFilter
    {
        public string Name { get; set; }
    }
}