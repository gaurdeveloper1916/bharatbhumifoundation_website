'use client';
import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import SearchBox from "./main/components/search_box";
import SearchBoxContext from "./contexts/search_bar_context";
import FloatingIcon from "./main/components/global/Floatingicon";

export default function BasePage({ children }) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
        
            <SearchBoxContext.Provider value={{ open, setOpen }}>
                <div
                    className={open ? "relative overflow-hidden h-screen" : ""}
                >
                    <Header />
                    <FloatingIcon/>

                  
                    <div className="bg-red-600 border-red-600 w-full "></div>
                    {children}
                    <Footer />
                    <SearchBox />
                </div>
            </SearchBoxContext.Provider>
        </>
    );
}
