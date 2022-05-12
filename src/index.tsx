import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './style/index.scss'
// import App from './App'
import App from "./App" 
import ThemeProvider from './context/themeContext'
// import reportWebVitals from './reportWebVitals'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <div className='bg-[#fff] dark:bg-[#000] transition-all'>
//         <main>
//           <App />
//         </main>
//       </div>
//     </ThemeProvider>
//   </React.StrictMode>
// )

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <div className='bg-[#fff] dark:bg-[#000] transition-all'>
        <main>
          <App />
        </main>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()