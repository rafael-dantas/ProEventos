using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {

        public EventoController()
        {
            
        }

        IEnumerable<Evento> _evento = new Evento[]{
            new Evento{
                EventoId = 1,
                Tema = "Angular 11 e .NET 5",
                Local = "São Paulo",
                Lote = "1º Lote",
                QtdPessoas = 250,
                DataEvento = new DateTime(2023, 8 , 15).ToString("dd/MM/yyyy"),
                ImagemURL = "foto.png"
            },
            new Evento{
                EventoId = 2,
                Tema = "Angular 12 e .NET 7",
                Local = "São Paulo",
                Lote = "2º Lote",
                QtdPessoas = 450,
                DataEvento = new DateTime(2023, 9 , 15).ToString("dd/MM/yyyy"),
                ImagemURL = "foto1.png"
            }
        };

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;
        }

        [HttpGet("{id}")]
        public Evento Get(int id)
        {
            return _evento.Where(x => x.EventoId == id).FirstOrDefault(); 
        }
    }
}
