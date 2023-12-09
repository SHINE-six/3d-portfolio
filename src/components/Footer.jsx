import React from 'react';

const Footer = () => (
    <footer className="flex justify-center mr-2 gap-16 mb-8 mt-4 items-center">
        <div className='h-fit mr-4'>
            <a href="mailto:desmondfoo0610@gmail.com" target="_blank" rel="noopener noreferrer" className='w-14'>
                <p>desmondfoo0610@gmail.com</p>
            </a>
        </div>
        <a href="https://github.com/SHINE-six" target="_blank" rel="noopener noreferrer" className='w-14'>
            <img src="src\assets\github.png" alt="GitHub" className="mr-2" />
        </a>
        <a href="https://www.linkedin.com/in/desmond-foo-a42b851aa/" target="_blank" rel="noopener noreferrer" className='w-14'>
            <img src="src\assets\LinkedIn.png" alt="LinkedIn" className="mr-2" />
        </a>
        <a href="https://www.instagram.com/desmondd_0610/" target="_blank" rel="noopener noreferrer" className='w-14'>
            <img src="src\assets\Instagram.png" alt="Instagram" className="mr-2" />
        </a>
    </footer>
);

export default Footer;