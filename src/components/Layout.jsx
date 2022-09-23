import Nav from "./Nav";
import Footer from "./Footer";
import { useEffect } from "react";
export default function Layout({ children }) {

    useEffect(() => {

        var lastScrollTop = 0;
        var nav = document.querySelector(`#jsNav`);
        window.addEventListener("scroll", function () {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                // downscroll code
                nav.classList.add("fixed-top");
            } else {
                // upscroll code
                if (st == 0) {
                    nav.classList.remove("fixed-top");
                }
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);
    }, []);
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    );
};



