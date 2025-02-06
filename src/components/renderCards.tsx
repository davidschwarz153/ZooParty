import animals, { Animal } from "./data";


export default function Cards(){
    return(
        animals.map((animal: Animal)=>{
            return(
                <article className="border-2 border-zinc-800 shadow-2xl rounded-2xl h-[70vh] w-[25vw] flex flex-col items-center ">
                    <a className="text-8xl m-4 mb-8">{animal.emoji}</a>
                    <h1 className="text-4xl font-bold mb-6" >{animal.name}</h1>
                    <p className="text-xl font-semibold mb-3" >{animal.species}</p>
                    <p className="text-xl font-semibold mb-3" >{animal.habitat}</p>
                    <p className="text-xl font-semibold mb-3" >{animal.diet}</p>
                    <p className="text-xl font-semibold mb-10" >{animal.lifespan} years</p>
                    <div className="flex w-full h-full">
                        <div className="bg-amber-950 rounded-2xl shadow-2xl p-10 w-full">
                            <ul>
                                <li className="list-disc ">{animal.funFacts[0]}</li>
                                <li className="list-disc">{animal.funFacts[1]}</li>
                                <li className="list-disc truncate">{animal.funFacts[2]}</li>
                            </ul>
                        </div>
                    </div>
                </article>
            )
        })
    )
}