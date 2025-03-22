import axios from 'axios'

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI3ZTJhN2RkNTRkNzQ3ZDEwNTcxZDAxYjZiODRkYyIsIm5iZiI6MTc0MjQ3Njg4MC42NzYsInN1YiI6IjY3ZGMxNjUwMDhjYjVlYjcyN2U3YWNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3IQOR3-dRqYHlokkcx5jdLK_kszo8CECfDbp9a2sEqc'
//     }
//   };
  
//  export const getTitleData=()=>{
//       return fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
//       .then(res => res.json())
//       .then(res => console.log(res))
//       .catch(err => console.error(err));
      
// }

 export const getTitleData= async (cate,page=1)=>{
      const res=await axios.get(`https://api.themoviedb.org/3/movie/${cate}`,{
        params:{language:'en-US',page},
        headers:{
            accept:'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI3ZTJhN2RkNTRkNzQ3ZDEwNTcxZDAxYjZiODRkYyIsIm5iZiI6MTc0MjQ3Njg4MC42NzYsInN1YiI6IjY3ZGMxNjUwMDhjYjVlYjcyN2U3YWNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3IQOR3-dRqYHlokkcx5jdLK_kszo8CECfDbp9a2sEqc'
        }
      }
    )
    console.log(res)
    return res.data 
}

// Detailed Movie
export const DetailMovie=async(id)=>{
    const res=await axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
        headers:{
            accept:'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI3ZTJhN2RkNTRkNzQ3ZDEwNTcxZDAxYjZiODRkYyIsIm5iZiI6MTc0MjQ3Njg4MC42NzYsInN1YiI6IjY3ZGMxNjUwMDhjYjVlYjcyN2U3YWNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3IQOR3-dRqYHlokkcx5jdLK_kszo8CECfDbp9a2sEqc'
        }
    })
    console.log(res)
    return res.data
}