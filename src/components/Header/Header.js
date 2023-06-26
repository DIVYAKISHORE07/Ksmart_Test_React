import React from 'react';
import '../Header/Header.css'

function Header() {
  return (
    <div >
    <h2>Reports</h2>
<h3>General New Reports</h3>

<div class="row">
  <div class="column">
    <div class="card">
      <h3>Grave Sites</h3>
      <button class="button button1">Select</button>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Payment History</h3>
      <button class="button button1">Select</button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Payment Types</h3>
      <button class="button button1">Select</button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Burial Types</h3>
      <button class="button button1">Select</button>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <h3>Funeral Home</h3>
      <button class="button button1">Select</button>
    </div>
  </div>
  {/* <div class="column">
    <div class="card">
      <h3>Selection Cards</h3>
      <button class="button button4">Select</button>
    </div>
  </div> */}

</div>

<h2>Recently Generated</h2>

<div class="row">
  <div class="column">
    <div class="card">
      <h3>Grave Site Report</h3>
      <p>Owner: .......</p>
      <p>Date: .......</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Payment History Report</h3>
      <p>Owner: .......</p>
      <p>Date: .......</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Payment Types Report</h3>
      <p>Owner: .......</p>
      <p>Date: .......</p>
      
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Burial Types Report</h3>
      <p>Owner: .......</p>
      <p>Date: .......</p>
     
    </div>
  </div>
  <div class="column">
    <div class="card">
      <h3>Funeral Report</h3>
      <p>Owner: .......</p>
      <p>Date: .......</p>
     
    </div>
  </div>
</div>
  </div>
  )
}

export default Header
