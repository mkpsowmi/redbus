import React from 'react';
import "./Primos.css"
const Primos = () => {  
     var primo=[
        {
          img:"https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg1.svg",
          head:"1 of 5 buses qualify,",
          para:"Primo’s strict safety qualification ensures a safer travel for you"
     },

     {
        img:"https://s3.rdbuz.com/web/images/homeV2/primoSection/primoSubImg2.svg",
        head:"Preferred  by   90%",
        para:"90% of travellers re-book Primo buses for its punctuality and comfort"
   },
   
   {
    img:"https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg3.svg",
    head:"9 Lac+ monthly travellers",
    para:"In 2022, 9 Lac+ people traveled with Primo every month"
}

    ]
  return (
    
      <section className="primo-sec">
          <div className="primo-cond">

             <div className="primo-head">
                  <div className='primo1'>
                     <img src="https://s1.rdbuz.com/web/images/homeV2/primoSection/primoTopBanner.svg" alt="img"/>
                  </div>
                
             </div>


             <div className="primo-row">
                  {primo.map((x,y)=>{
                     return (
                          <div  className="pri-card" key={y}>
                            <div className="pri-img">
                               <img src={x.img} alt="img"/>
                              </div>
                              <div class="prim">
                               <h4>{x.head}</h4>
                               <p>{x.para}</p>
                            </div>
                            </div>
                     )
                  })}
             </div>
          </div>
        </section>

  );
}

export default Primos;
