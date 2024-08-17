import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10 mt-10">
            <aside>
                <img className='w-20' src="https://firebasestorage.googleapis.com/v0/b/lenden-57b3b.appspot.com/o/newLogo.png?alt=media&token=d5241262-ff9c-447b-bdce-6963e2abb7e0" />
                <p>
                    BrowseBox Ltd.
                    <br />
                    Providing information about digital products.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;