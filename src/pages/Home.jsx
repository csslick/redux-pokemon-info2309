import { useSelector } from "react-redux"

export default function Home() {
  // store에서 state가져오기
  let data = useSelector(state => state);
  // console.log(data);
  let { pokemon } = data;
  console.log(pokemon);

  return (
    <main className="container">
      <h1>Home</h1>
      <div className="item-list">
        {
          pokemon.map(poke => (
              <div className="item" key={poke.id}>
                <h4>{poke.name}</h4>
                <div className="type">
                  {
                    poke.type.map((type, key) => (
                        <span key={key}>{type}</span>
                      )
                    )
                  }
                </div>
              </div>
            )  
          )
       }
      </div>
    </main>
  )
}
