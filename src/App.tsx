import Cards from "./components/renderCards"



function App() {
  return (
    <main className="bg-gray-950">
      <header className="flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold m-10 mb-5">ZooPartyDB</h1>
        <p className="text-xl font-bold">Explore the facinating world of zoo animals!</p>
      </header>
      <section className="grid grid-cols-3 gap-12 m-10 justify-center content-center text-white">
        <Cards></Cards>
      </section>
    </main>
  )
}

export default App
