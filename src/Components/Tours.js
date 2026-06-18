import React from 'react'
import Title from './Title';
import { tours } from '../data';

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">

      <Title title ='Featured' subTitle='tours'/>

        <div className="section-center featured-center">
           {tours.map((tours)=>{
              const{id,img,date,tourtitle,tourinfo,tourmap,tourCountry,tourdays,tourAmount}=tours
return(
  <article className="tour-card" key={id}>
            <div className="tour-img-container">
         
              <img src={img} className="tour-img" alt="pic" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{tourtitle}</h4>
              </div>
              <p>
               {tourinfo}
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className={tourmap}></i>
                  </span>
                 {tourCountry}
                </p>
                <p>{tourdays}</p>
                <p>{tourAmount}</p>
              </div>
            </div>
          </article>
)
            })}
          
        </div>
      </section>
    </>
  );
}

export default Tours
