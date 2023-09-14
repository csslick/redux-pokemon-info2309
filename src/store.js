import { configureStore, createSlice } from "@reduxjs/toolkit";

// 1. state(slice)
const pokemon = createSlice({
  name: 'pokemon', // state명
  // 초기값
  initialState: [
    {
      id: 0, 
      name: "이상해씨", 
      type: ["풀", "독"],
      desc: "태어나서부터 얼마 동안은 등의 씨앗으로부터 영양을 공급받아 크게 성장한다."
    },
    {
      id: 4, 
      name: "파이리", 
      type: ["불꽃"],
      desc: "파이리 꼬리의 불꽃은 생명의 등불이다. 건강할 때는 불꽃도 강하게 타오른다."
    },
    {
      id: 7, 
      name: "꼬부기", 
      type: ["물"],
      desc: "등껍질에 숨어 몸을 보호한다. 상대의 빈틈을 놓치지 않고 물을 뿜어내어 반격한다."
    },
  ],
  reducers: {
    // 액션함수가 들어감
  }
})

// 2. 다크모드 state(slice)
const darkMode = createSlice({
  name: 'darkMode', 
  initialState: false,
  reducers: { 

  }
})


export default configureStore({  
  reducer: {
    pokemon: pokemon.reducer, // 함수를 내보냄
    darkMode: darkMode.reducer
  }
});