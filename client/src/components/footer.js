import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="p-4 pl-6 flex justify-between items-center">
                <div>
                    <p className="font-medium text-gray-800">&copy;roomie.com</p>
                </div>
                <div>
                    <ul className="flex flex-col ml-16 pr-6 justify-end text-sm lg:text-base lg:flex-row">
                        <li className="lg:mx-10">
                            <p className="font-bold">Credits:</p>
                        </li>
                        <li className="lg:mx-10">
                            <a
                                href="https://icons8.com/icon/tg0qF8v_aLU2/empty-bed"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Empty Bed icon by Icons8
                </a>
                        </li>
                        <li className="lg:mx-10">
                            <a
                                href="https://blush.design/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Illustration by Blush.design
                </a>
                        </li>
                        <li className="lg:mx-10">
                            <a
                                href="https://unsplash.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Images from Unsplash
                </a>
                        </li>
                        {/* <li className="lg:mx-10">
                <Link to="/">Terms of Service</Link>
              </li>
              <li className="lg:mx-10">
                <Link to="/">Privacy Policy</Link>
              </li> */}
                    </ul>
                </div>
            </footer>
        </>
    )
}
