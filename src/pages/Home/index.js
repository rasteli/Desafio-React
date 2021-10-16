import Table from "../../components/Table"
import Summary from "../../components/Summary"
import DefaultLayout from "../../components/DefaultLayout"

function Home() {
  return (
    <DefaultLayout>
      <Summary />
      <Table />
    </DefaultLayout>
  )
}

export default Home
