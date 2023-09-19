import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store";

export default function Home() {
  // store에서 state가져오기
  let data = useSelector(state => state);
  let { darkMode, pokemon } = data;
  // console.log(pokemon);
  const dispatch = useDispatch();
  // 역순으로 변경(store의 변수라 복사해야 됨)
  const reversedPokemon = [...pokemon].reverse();

  return (
    <main className={ darkMode ? 'container darkmode' : 'container'}>
      <h1>Home</h1>

      <form 
        className="form"
        onSubmit={ (e) => {
          e.preventDefault(); // 폼 전송 이벤트 취소
          let name = e.currentTarget.name.value; // form.name
          let type = e.currentTarget.type.value.split(','); // form.type(배열)
          let id = new Date().getTime(); // 고유 id
          let desc = '설명글...';
          console.log(name, type, id);
          // store에 값을 저장하는 액션함수 추가
          let data = {
            name: name,
            type: type,
            id: id,
            desc: desc
          }
          
          // if(name == '' || type == '') {
          //   alert('빈값');
          //   return;
          // } else {
          //   dispatch(addItem(data));
          // }
          dispatch(addItem(data));
        }}
      >
        <div className="input-group">
          <input type="text" name='name' placeholder="이름" required />
        </div>
        <div className="input-group">
          <input type="text" name='type' placeholder="타입(복수인 경우 ,로 구분)" required />
        </div>
        <button type='submit' className="btn btn-primary">추가</button>
      </form>

      <div className="item-list">
        {
          reversedPokemon.map(poke => (
              <div className="item" key={poke.id}>
                <div className="info">
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
                <button 
                  onClick={()=>{
                    dispatch(removeItem(poke.id))
                  }}
                  className="btn btn-danger">삭제</button>
              </div>
            )  
          )
       }
      </div>
    </main>
  )
}
