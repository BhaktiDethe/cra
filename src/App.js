import React from "react"
import './App.css'
import { WEBSITE_NAME,
   WEBSITE_DESCRIPTION
    ,HEADER_IMG,
     BUTTON1,
    BUTTON2,
    BUTTON_STYLES
   }from "./config";



function App(){

return(
  <div>
  <h1 className="text-4xl my-5 mx-5">{WEBSITE_NAME} </h1>
  <p className="text-5m mx-10 my-5">{WEBSITE_DESCRIPTION}  </p>

  <img src= {HEADER_IMG} className="h-[200px] object-cover  block mx-auto"/>

  <div className="flex justify-center">
    <button className="bg-blue-500 m-5 px4 py-1 text-white rounded-md" style={BUTTON_STYLES}>{BUTTON1} </button>
    <button className="bg-blue-500 m-5 px4 py-1 text-white rounded-md" style={BUTTON_STYLES}> {BUTTON2} </button>
    </div>
  </div>
);
}
 export default App