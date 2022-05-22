

const Costdetails = (props) => {
    return (
        <>
            <tr class="table-info">
                <th scope="row">1</th>
                <td>Single Person Cost</td>
                <td>{props.cost}</td>
            </tr>
            <tr class="table-info">
                <th scope="row">2</th>
                <td>Extra Person Cost</td>
                <td>{props.extra}</td>
            </tr>
            <tr class="table-info">
                <th scope="row">3</th>
                <td>Child With Bed</td>
                <td>{props.cwb}</td>
            </tr>
            <tr class="table-info">
                <th scope="row">4</th>
                <td>Child whiout Bed</td>
                <td>{props.cwob}</td>
            </tr>
        </>
    )
};

export default Costdetails;