import Cards from "./components/renderCards"



function App() {
  return (
    <>
      <header className="flex flex-col justify-center items-center m-10">
        <h1 className="text-5xl font-bold mb-5">ZooPartyDB</h1>
        <p className="text-xl font-bold">Explore the facinating world of zoo animals!</p>
      </header>
      <section className="grid grid-cols-3 gap-12 m-10 justify-center content-center">
        <Cards></Cards>
      </section>
    </>
  )
}

export default App
