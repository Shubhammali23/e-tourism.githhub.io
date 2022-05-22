import React, { useEffect, useState } from 'react'
import Bookcard from "./Bookcard";
import Form from "./Form";
import { useParams } from 'react-router-dom';

const CostTable = () => {

    const [costdata, setCostData] = useState([]);
    const { catmaster_id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8070/crud/costpage/" + catmaster_id)
            .then(res => res.json()).then((result) => { setCostData(result); });
    }, []
    );

    return (
        <>
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
                            <h1>&nbsp; Passanger Details</h1>
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
                        <button type="submit" class="btn btn-warning">Pay Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CostTable
