using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PeopleCar.Data;
using PeopleCar.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleCar.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private IConfiguration _configuration;

        public PeopleController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [Route("getall")]
        [HttpGet]
        public List<Person> GetAll()
        {
            var repo = new PersonCarsRepository(_configuration.GetConnectionString("ConStr"));
            return repo.GetAll();
        }
        [HttpPost]
        [Route("deletecars")]
        public void DeleteCars(DeleteCarVM vm)
        {
            var repo = new PersonCarsRepository(_configuration.GetConnectionString("ConStr"));
            repo.DeleteCars(vm.Id);
        }
        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PersonCarsRepository(_configuration.GetConnectionString("ConStr"));
            repo.AddPerson(person);
        }
        [HttpPost]
        [Route("addcar")]
        public void AddCar(Car car)
        {
            var repo = new PersonCarsRepository(_configuration.GetConnectionString("ConStr"));
            repo.AddCar(car);
        }
        [Route("getcars")]
        [HttpGet]
        public List<Car> GetCars(int id)
        {
            var repo = new PersonCarsRepository(_configuration.GetConnectionString("ConStr"));
            return repo.GetCarsForPerson(id);
        }
        [Route("getpersonbyid")]
        [HttpGet]
        public Person GetPersonById(int id)
        {
            var repo = new PersonCarsRepository(_configuration.GetConnectionString("ConStr"));
            return repo.GetPersonById(id);
        }

    }
}
