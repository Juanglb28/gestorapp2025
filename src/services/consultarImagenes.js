export async function consultarImagenes(query = 'field') {
  const URL = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=10`
  const TOKEN = "LjQh3F2ALNMQckc5n0qEzslCACb3qMC7QZouHbxigZsyVVC59T89qETx" // Usa tu token aquí

  const peticion = {
    method: "GET",
    headers: { "Authorization": TOKEN }
  }

  const respuestaAPI = await fetch(URL, peticion)
  const fotos = await respuestaAPI.json()
  return fotos
}
