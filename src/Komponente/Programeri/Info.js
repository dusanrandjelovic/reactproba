import React, { Component } from 'react'

export class Info extends Component {
    render() {
        return (
            <div id="info">
                <div id="bio"> <h2>Biography</h2> 
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
                </div>

               <div id="bio"><h2>Experience</h2>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
               </div>
                <div id="bio"><h2>Social network</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                <a href="https://sr-rs.facebook.com/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Facebook"><i class="fab fa-facebook-square fa-2x"></i></a>
<a href="https://twitter.com/login?lang=sr" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Twitter"><i class="fab fa-twitter-square fa-2x"></i></a>
<a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Instagram"><i class="fab fa-instagram fa-2x"></i></a>
<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Youtube"><i class="fab fa-youtube-square fa-2x"></i></a>
                <div>
                <button target="_blank" rel="noopener noreferrer">Portfolio</button>
                </div>
                </div>
            </div>
        )
    }
}

//export default Info;