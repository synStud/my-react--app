import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response =>
        setData(response.data))
      .catch(error =>
        console.error(error));
  }, []);

  return (
    <div>
      <h1>Данные из API:</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> :
      <p>Загрузка...</p>}
    </div>
  );
}


export default App;






// import React from 'react';
// import dayjs from 'dayjs';

//   function App() {

//     const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');

//   return (
//     <div>
//       <h1>Текущая дата и время:</h1>
//       <p>{currentDate}</p>
//     </div>
//   );
// }

// export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
