

const Costdetails = (props) => {
    return (
        <>
            <tr align="center" class="table-info">
                <td scope="row">{props.valid_from}</td>
                <td scope="row">{props.valid_to}</td>
            </tr>
        </>
    )
};

export default Costdetails;