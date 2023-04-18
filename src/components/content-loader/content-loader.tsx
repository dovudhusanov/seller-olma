import React from 'react';
import "./content-loader.css"

function ContentLoader() {
    return (
       <div className={"content-loader"}>
           <div className="lds-default">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
           </div>
       </div>
    );
}

export default ContentLoader;