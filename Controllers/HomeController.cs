using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TP5_MARASCH_TAGLIORETTI_WICNUDEL.Models;

namespace TP5_MARASCH_TAGLIORETTI_WICNUDEL.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Tutorial()
    {
        return View();
    }

    public IActionResult Comenzar()
    {
        string sala ="sala" + Escape.GetEstadoJuego();
        return View("Habitacion" + Escape.GetEstadoJuego());
    }
    public IActionResult Habitacion(int sala, string clave)
    {
        if (Escape.ResolverSala(sala, clave))
        {
            if (Escape.GetEstadoJuego() > 4)
            {
                return View("Victoria");
            }
            return RedirectToAction($"Habitacion{Escape.GetEstadoJuego()}");
        }
        else
        {
            ViewBag.Error = "Respuesta incorrecta. Inténtalo de nuevo.";
            return View($"Habitacion{sala}");
        }
    }
    public IActionResult Creditos()
    {
        return View();
    }
    public IActionResult Habitacion1()
    {
        return View();
    }

    public IActionResult Habitacion2()
    {
        return View();
    }

    public IActionResult Habitacion3()
    {
        return View();
    }

    public IActionResult Habitacion4()
    {
        return View();
    }
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
