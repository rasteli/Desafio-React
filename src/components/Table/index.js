import React from "react"
import "./styles.css"

import { useServer } from "../../contexts/ServerContext"

export default function Table() {
  const { servers, selectServer } = useServer()

  return (
    <div className="table-container">
      <div className="header">
        <h2>Tabela de servidores</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Hostname</th>
            <th>Memória</th>
            <th>vCPUs</th>
            <th>Disco</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((server, index) => (
            <tr key={server.id_vm}>
              <td className="table-data">
                <input type="checkbox" onClick={e => selectServer(e, index)} />
              </td>
              <td className="table-data">{server.hostname}</td>
              <td className="table-data">
                {server.configuracao.memoryProvisioned} GB
              </td>
              <td className="table-data">
                {server.configuracao.cpuProvisioned} vCPUs
              </td>
              <td className="table-data">
                {server.configuracao.totalDiskGB} GB
              </td>
              <td className="table-data">{server.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
