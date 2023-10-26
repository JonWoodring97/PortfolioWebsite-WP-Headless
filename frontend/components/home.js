import React from 'react';

let HomePage = () => {
    return(
        <div className = 'homepage-container'>
            <div className = 'greeting-box'>
                <h1 className = 'page-title homepage-title'> Hey, I'm Jon. </h1> 
            </div>
            <div className = 'homepage-info-section'> 
                    <span className = 'large-text homepage-info-text'> I'm a web developer based in Ypsilanti, Michigan. I have years of experience building websites and applications for businesses of all sizes. <br></br><br></br> 
                        I am currently looking for employment as my last job of 3 years at Rocket Mortgage was experiencing hard times and offered a buyout deal, which I accepted. <br></br><br></br>
                    </span>
                    <figure className = 'portrait-frame'>
                        <img className = 'portrait-image' srcset = "/cliff-view-large.jpg"/>
                    </figure>
            </div>
            <div className = 'homepage-section grey'>
              <div className = 'inner-homepage-section'>
                <h1 className = 'section-break section-title'> My Skills </h1>
                    <div className = 'skill-container'>
                        <div className = 'skill-box'>
                            <img class = 'skill-image' src = '/lifecycle.svg' width = '100'></img>
                            <h1 class = 'skill-title'> Web Development </h1>
                            <h2 class = 'skill-sub-title'> Lifecycle Driven</h2>
                            <div class = 'skill-text-area'>
                                <p class = 'skill-description'> Due to my experience working closely in Agile teams, I am able to develop and ship products 
                                    quickly and efficiently while leveraging the entire teams talent. Saving the business time and energy.  </p>
                            </div>
                        </div>
                        <div className = 'skill-box'>
                            <img class = 'skill-image' src = '/pen-tip.svg' width = '100'></img>
                            <h1 class = 'skill-title'> Web Design </h1>
                            <h2 class = 'skill-sub-title'> Fast and Responsive </h2>
                            <div class = 'skill-text-area'>
                                <p class = 'skill-description'> My two beliefs when it comes to design is that every website should be built to be as fast as possible and to look good on all devices. </p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className = 'homepage-section white'>
                <div className = 'inner-homepage-section'> 
                    <h1 className = 'section-break section-title'> My Work </h1>
                </div>
            </div>
        </div>
     )
}

export default HomePage;
