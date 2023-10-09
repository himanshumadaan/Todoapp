import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="footer">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6">
                 ©.
            </div>
            <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                   {date} Design & Develop by Himanshu
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer;