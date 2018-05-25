import React from 'react';
import {render} from 'react-dom';


export default class Footer extends React.Component {

    render(){
        return(

            <div className="col-xs-12">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <h4>Contact Details</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <p>Tel:xxxxx xxxxx xxxxx</p>
                        <p>Fax:xxxxx xxxxx xxxxx</p>
                        <p>Email:contact@domain.com</p>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <h4 className="footer-titles">Quick links</h4>
                        <ul className="quickLinks">
                            <li><a href="#">Link text 1</a></li>
                            <li><a href="#">Link text 2</a></li>
                            <li><a href="#">Link text 3</a></li>
                            <li><a href="#">Link text 4</a></li>
                            <li><a href="#">Link text 5</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-3">
                         <h4>From the blog</h4>
                         <h5>Blog Post Title</h5>
                         <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites</p>
                         <span className="blog-readmore"><a href="">Read more >></a></span>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <h4>Grab our newsletter </h4>
                        <form action="#">
                            <div className="form-group">
                                <input type="text" className="form-control contact-inputs" id="name" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control contact-inputs" id="email" placeholder="Email"/>
                            </div>
                            <button type="submit" className="btn btn-blog-mail">SUBMIT</button>
                            </form>
                    </div>
                </div>
                <p className="footer-text">Copyrights 2013 - All Rights reserved - Domain name</p>
            </div>


        )
    }



}