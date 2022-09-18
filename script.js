// window.onload = function() {
//     navbarClicked('home');
//   };
  
function navbarClicked(page){
    let content = document.getElementById('content')
    if(page == 'home'){
      content.innerHTML = `
        <div class="image-div">
          <img src="./assets/my.jpg" class="profile-img"/>
        </div>
        
        <div class="info"> 
          <h2>Animesh Singh Mahra</h2>
          <p><b>Mean-Stack Freelancer</b></p>

          <p>Energetic Front End developer with 3+ years of experience,
            dedicated to creating and optimizing interactive, user-friendly,
            and feature-rich applications. Strong attention to detail in order
            to deliver original and efficient solutions, expertise in building applications from scratch.
          
        </div>
        <div class="footer">

          <a href="https://www.github.com/animeshmahra/" target="_blank">
            <i class="fa fa-github fa-2x" style="color: black;"></i>
          </a>
          <a href="https://www.linkedin.com/in/animeshmahra/" target="_blank">
            <i class="fa fa-linkedin-square fa-2x" style="color: navyblue;"></i>
          </a>
          <a href="mailto:animeshmahra@gmail.com">
            <i class="fa fa-google-plus fa-2x" style="color: red;" ></i>
          </a>
          <a href="https://www.instagram.com/_animesh_mahra/" target="_blank">
            <i class="fa fa-instagram fa-2x fa-flip-horizontal" style="color:blueviolet"></i>
          </a>
          <a  href="./assets/Animesh's Resume.pdf" target="_blank" title="Download Resume">
            <i class="fa fa-download fa-2x fa-flip-horizontal" style="color:limegreen"></i>
          </a>
        </div>
    `
    } else if(page === 'skills'){
      content.innerHTML = `
      <div class="skills">
          <div class="skill-card">
            <p class="skill-name">Html5</p>
            <p class="skill-points">
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
            </p>
          </div>
          <div class="skill-card">
            <p class="skill-name">Javascript</p>
            <p class="skill-points">
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
            </p>
          </div>
            <div class="skill-card">
              <p class="skill-name">Css/Sass/Scss</p>
            <p class="skill-points">
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
            </p>
              
            </div>
            <div class="skill-card">
              <p class="skill-name">Angular
              </p>
            <p class="skill-points">
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
            </p>
            </div>
            <div class="skill-card">
              <p class="skill-name">MongoDB</p>
            <p class="skill-points">
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
            </p>
            </div>
            <div class="skill-card">
              <p class="skill-name">NodeJS</p>
            <p class="skill-points">
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
            </p>
            </div>
            <div class="skill-card">
              <p class="skill-name">VueJS
              </p>
            <p class="skill-points">
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
            </p>
            </div>
            <div class="skill-card">
              <p class="skill-name">Docker
              </p>
            <p class="skill-points">
              <i class="star"></i>
              <i class="star"></i>

            </p>
            </div>
            <div class="skill-card">
              <p class="skill-name">Selenium
              </p>
            <p class="skill-points">
              <i class="star"></i>
              <i class="star"></i>
              <i class="star"></i>
            </p>
            </div>      
        </div>
      `
    } else if(page === 'experience'){
        content.innerHTML = `
            <div class="experience">
              <div class="card">
                <img src="./assets/inforida.svg" >
                <h1>Inforida</h1>
                <h5>1 years</h5>
                <p>aslkdjlasjd alsjdlasjdl lasjdlasjdlasjd lasjdlasjdlasd</p>
              </div>
              <div class="card">
                <img src="./assets/smartlinks.png" >
                <h1>SmartLinks</h1>
                <h5>1.5 years</h5>
                <p>aslkdjlasjd alsjdlasjdl lasjdlasjdlasjd lasjdlasjdlasd</p>
              </div>
              <div class="card">
                <img src="./assets/cilalabs.jpeg" >
                <h1>CILA Labs</h1>
                <h5>1 years</h5>
                <p>aslkdjlasjd alsjdlasjdl lasjdlasjdlasjd lasjdlasjdlasd</p>
              </div>
            </div>
        `
    } else {
        content.innerHTML = '<div></div>'
    }
  }
