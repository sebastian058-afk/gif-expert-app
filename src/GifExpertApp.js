import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
import { Header } from './Components/Header';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hackerman']);

    return (
        <>
            <Header />
            <div className="body">
                <h2> GIF Search App </h2>
                <AddCategory setCategories={setCategories} />
                <hr />

                <ol>
                    {
                        categories.map(category => (
                            <GifGrid key={category} category={category} />
                        ))
                    }
                </ol>
            </div>
        </>
    );

}

export default GifExpertApp;