import './css/table.css'

export default function Table(){
    return(
        <div>
<table>
    <tr>
        <th>Column 1</th>
        <th>Column 2</th>
    </tr>
    <tr>
        <td rowspan="5">Row 1</td>
        <td>Row 1, Column 2</td>
    </tr>
    <tr>
        <td>Row 2, Column 2</td>
    </tr>
    <tr>
        <td>Row 3, Column 2</td>
    </tr>
    <tr>
        <td>Row 4, Column 2</td>
    </tr>
    <tr>
        <td>Row 5, Column 2</td>
    </tr>
    <tr>
        <td rowspan="5">Row 2</td>
        <td>Row 1, Column 2</td>
    </tr>
    <tr>
        <td>Row 2, Column 2</td>
    </tr>
    <tr>
        <td>Row 3, Column 2</td>
    </tr>
    <tr>
        <td>Row 4, Column 2</td>
    </tr>
    <tr>
        <td>Row 5, Column 2</td>
    </tr>
    <tr>
        <td rowspan="5">Row 3</td>
        <td>Row 1, Column 2</td>
    </tr>
    <tr>
        <td>Row 2, Column 2</td>
    </tr>
    <tr>
        <td>Row 3, Column 2</td>
    </tr>
    <tr>
        <td>Row 4, Column 2</td>
    </tr>
    <tr>
        <td>Row 5, Column 2</td>
    </tr>
</table>
        </div>
    )
}