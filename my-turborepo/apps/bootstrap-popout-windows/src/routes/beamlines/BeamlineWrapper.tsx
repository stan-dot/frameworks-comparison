import { Outlet } from "react-router-dom";


function BeamlineWrapper() {
  
  return (
    <div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default BeamlineWrapper;
