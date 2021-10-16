import React, { useContext, useState, useEffect } from "react"
import api from "../services/api"

const ServerContext = React.createContext()

export function useServer() {
  return useContext(ServerContext)
}

export default function ServerProvider({ children }) {
  const [servers, setServers] = useState([])
  const [selectedServers, setSelectedServers] = useState([])

  useEffect(() => {
    async function getServers() {
      const response = await api.get("/servers")
      setServers(response.data)
    }

    getServers()
  }, [])

  function selectServer(e, index) {
    const checked = e.target.checked
    const selectedServer = servers[index]

    setSelectedServers(prevServers => {
      if (checked) return [...prevServers, selectedServer]

      const newServers = prevServers.filter(server => {
        return server.id_vm !== selectedServer.id_vm
      })

      return newServers
    })
  }

  const value = {
    servers,
    selectServer,
    selectedServers
  }

  return (
    <ServerContext.Provider value={value}>{children}</ServerContext.Provider>
  )
}
