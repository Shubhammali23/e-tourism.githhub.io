

const Itineraryviewdetails = (props) => {
    return (
        <>
            <tr class="table-info">
                <th align="center" scope="row">&nbsp;&nbsp;&nbsp;&nbsp;Day {props.day_no}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</th>
                <td align="left;">{props.activity}</td>
            </tr>
        </>
    )
};

export default Itineraryviewdetails;