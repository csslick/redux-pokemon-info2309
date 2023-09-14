import { useSelector } from "react-redux"

export default function Home() {
  // store에서 state가져오기
  let data = useSelector(state => state);
  let { darkMode, pokemon } = data;
  // console.log(pokemon);

  return (
    <main className={ darkMode ? 'container darkmode' : 'container'}>
      <h1>Home</h1>

      <form>
        <div className="input-group">
          <input type="text" name='name' placeholder="이름" />
        </div>
        <div className="input-group">
          <input type="text" name='type' placeholder="타입(복수인 경우 ,로 구분)" />
        </div>
        <button type='submit' className="btn btn-primary">추가</button>
      </form>

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
