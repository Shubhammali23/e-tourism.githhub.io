import React from 'react';
import Card from './Card';

function SearchList({ filteredPersons }) {
    return (
        <div>
            <div className="my-4">
                <div className="container-fluied mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    filteredPersons.map(person => <Card key={person.cat_id} person={person} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchList;