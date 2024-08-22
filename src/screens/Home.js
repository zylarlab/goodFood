import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div class="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
                    <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some writings.</p>
                            <div className='container w-100'>
                                <select className='m-2 h-100 bg-success rounded'>
                                    {Array.from(Array(6), (e,i)=>{
                                        return(
                                            <option key={i+1} value={i+1}>{i+1}</option> 
                                        )
                                    })

                                    }
                                </select>
                            <select className='m-2 h-100 bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>
                            </div>
                        </div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}
