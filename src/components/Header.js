import React from "react"

class Header extends React.Component{
    render (){
        return (
            <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                  <h5 class="my-0 mr-md-auto font-weight-normal">Imran Store</h5>
                  <nav class="my-2 my-md-0 mr-md-3">
                    <a class="p-2 text-dark" href="https://imranrazaq.com">My LinkedIn</a>
                    <a class="p-2 text-dark" href="https://imranrazaq.com">Twitter</a>
            
                  </nav>
                  <a class="btn btn-outline-primary" href="https://imranrazaq.com">My Website</a>
                </div>
                    
                )
    }
    
    
    

}

export default Header