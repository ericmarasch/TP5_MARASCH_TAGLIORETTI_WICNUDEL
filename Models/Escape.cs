class Escape{

private static string[] incognitasSalas;
private static int estadoJuego = 1;

public Escape(){
}

private List<int> numSala = new List<int>{1,2,3,4}; 
private List<string> Sala = new List<string>{ "Sala de Control", "Sala de Mantenimiento", "Laboratorio Médico", "Sala de Motores"};

private static void InicializarJuego()
{
    incognitasSalas = new string[] {"Alien", "1979", "Palermo", "Simon"};
}    
public static int GetEstadoJuego()
{
    return estadoJuego;
}
public static bool ResolverSala(int Sala, string Incognita)
{
    bool hecho;
    if (incognitasSalas == null)
    {
        InicializarJuego();
    }
    hecho = incognitasSalas[Sala - 1] == Incognita && estadoJuego == Sala;
    if(hecho)
    {
        estadoJuego++;
        return true;
    }
    else
    {
        return false;
    }
}
}