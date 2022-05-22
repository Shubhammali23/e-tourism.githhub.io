import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';


function Search1({ details }) {

    const [searchField, setSearchField] = useState("");

    const filteredPersons = details.filter(
        person => {
            return (
                person
                    .catname
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <Scroll>
                <SearchList filteredPersons={filteredPersons} />
            </Scroll>
        );
    }

    return (
        <section className="garamond">
            <div class="container">
                <div class="row">
                    <div class="col"></div>
                    <div class="col-12">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between ">
                            <a class="navbar-brand mx-4" href="#"><h2 className="f2">Search your Tours</h2></a>

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                                <form class="form-inline my-2 my-lg-0">
                                    <input
                                        className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                                        type="search"
                                        placeholder="Search Tours"
                                        onChange={handleChange}
                                    />
                                </form>
                            </div>
                        </nav>
                    </div>
                    <div class="col"></div>
                </div>
            </div>

            {searchList()}
        </section>
    );
}

export default Search1;