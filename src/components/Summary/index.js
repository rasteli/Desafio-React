import React, { useEffect, useState } from "react"
import "./styles.css"

import { useServer } from "../../contexts/ServerContext"
import { sumTotalServerResources } from "../../utils/helper"

export default function Summary() {
  const { selectedServers } = useServer()
  const [memory, setMemory] = useState(0)
  const [cpuCount, setCPUCount] = useState(0)
  const [diskCount, setDiskCount] = useState(0)
  const [serverCount, setServerCount] = useState(0)

  useEffect(() => {
    function setSummary() {
      setServerCount(selectedServers.length)

      const memory = sumTotalServerResources(
        selectedServers,
        "memoryProvisioned"
      )
      setMemory(memory)

      const cpuCount = sumTotalServerResources(
        selectedServers,
        "cpuProvisioned"
      )
      setCPUCount(cpuCount)

      const diskCount = sumTotalServerResources(selectedServers, "totalDiskGB")
      setDiskCount(diskCount)
    }

    setSummary()
  }, [selectedServers])

  return (
    <div className="summary">
      <div className="header">
        <h2>Sumário dos recursos dos servidores</h2>
      </div>
      <div className="items">
        <span className="name">Servidores Selecionados</span>
        <span className="value">{serverCount} servidores selecionados</span>
        <span className="name">Total de Memória</span>
        <span className="value">{memory} GB</span>
        <span className="name">Total de CPUs</span>
        <span className="value">{cpuCount} vCPUs</span>
        <span className="name">Total de Discos</span>
        <span className="value">{diskCount} GB</span>
      </div>
    </div>
  )
}
