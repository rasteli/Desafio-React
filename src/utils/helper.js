export function sumTotalServerResources(servers, property) {
  let total = 0

  servers.forEach(server => {
    total += server["configuracao"][property]
  })

  return total
}
