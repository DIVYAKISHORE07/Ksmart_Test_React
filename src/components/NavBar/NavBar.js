import React from 'react';
import '../NavBar/navbar.css'

function NavBar() {
  return (
    <div class="navbar">
    
  <a ><b> Grave Sites Management </b> </a>
  <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Maintain</a>
  <a href="#"><i class="fa fa-fw fa-search"></i> Payments</a>
  <a href="#"><i class="fa fa-fw fa-envelope"></i> Reports</a>
  {/* <a href="#"><i class="fa fa-fw fa-user"></i> Login</a> */}
</div>
  )
}

export default NavBar