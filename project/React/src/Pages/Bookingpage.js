import React, { useEffect, useState } from 'react'
import Bookcard from "../Components/Bookcard";
import Form from "../Components/Form";
import { useParams } from 'react-router-dom';
import Downloadpage from "../Components/Downloadpage";

const Bookingpage = () => {

    const [costdata, setCostData] = useState([]);
    const { catmaster_id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8070/crud/costpage/" + catmaster_id)
            .then(res => res.json()).then((result) => { setCostData(result); });
    }, []
    );

    return (
        <div className="App" id="pagetodownload">
            <div>
                {
                    costdata.map(home => {
                        return <Form
                            key={home.catmaster_id}
                            catname={home.catname}
                            valid_from={home.valid_from}
                            valid_to={home.valid_to}
                        />
                    })
                }
            </div>

            <div>
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col"></div>

                        <div class="col-11">
                        <table class="table text-center">
                                <thead>
                                    <tr >
                                        <th scope="col"><h3>Passenger Details</h3></th>
                                    </tr>
                                </thead>
                            </table>
                            
                            {
                                costdata.map(home => {
                                    return <Bookcard
                                        key={home.catmaster_id}
                                        cost={home.cost}
                                        extra={home.extra}
                                        cwb={home.cwb}
                                        cwob={home.cwob}
                                    />
                                })
                            }
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
                <div>
                    <div class="text-center">
                        <Downloadpage rootElementId="pagetodownload" downloadFileName="Bill" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookingpage
