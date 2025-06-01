import "./footer.css"
import React, {Component} from "react";

class Footer extends Component{
    render(){
        return(
            <div class="footer">
        <footer>
          <div class="ftr1">
            <input  type="date" name="" id="bhjrsbj"  />

            <div>
              <h1>
                We make creative<br />
                brands only.
              </h1>
            </div>
            <div>
              CONTACT INFO<br />
              <i class="fa-solid fa-phone"></i>+91 9492102211<br />

              <i class="fa-solid fa-envelope"></i> communitylink2.com
            </div>

            <div>
              OUR STUDIO <br />
              Av. Lúcio Costa - Barra da<br />
              Tijuca, Rio de Janeiro - RJ, Brazil
            </div>
          </div>

          <div class="ftr2">
            <div>
              Copyright © 2024 Community Link<br />
              Design: TemplateMo
            </div>
            <div class="ftr3">
              <div>Stories</div>
              <div>Work with us</div>
              <div>Privacy</div>
            </div>
            <div class="ftr4">
              <div><i class="fa-brands fa-instagram fa-xs"></i></div>
              <div><i class="fa-brands fa-twitter fa-xs"></i></div>
              <div><i class="fa-solid fa-globe fa-xs"></i></div>
              <div><i class="fa-brands fa-behance fa-xs"></i></div>
            </div>
          </div>
        </footer>
      </div>
    
        )
    }
}

export default Footer