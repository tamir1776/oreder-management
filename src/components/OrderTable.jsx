import react, { useState } from 'react';
import '../App.css';


function OrderTable(){
    return(
        <table>
	<thead>
	<tr>
		<th>מזהה הזמנה</th>
		<th>שם לקוח</th>
		<th>כתובת משלוח</th>
        <th>עיר משלוח</th>
        <th>אזור משלוח</th>
        <th>עלות משלוח</th>

	</tr>
	</thead>
	<tbody>
	<tr>
		<td>James</td>
		<td>Matman</td>
		<td>Chief Sandwich Eater</td>
        <td>Chief Sandwich Eater</td>
        <td>Chief Sandwich Eater</td>
        <td>Chief Sandwich Eater</td>
	</tr>
	<tr>
		<td>The</td>
		<td>Tick</td>
		<td>Crimefighter Sorta</td>
        <td>Chief Sandwich Eater</td>
        <td>Chief Sandwich Eater</td>
        <td>Chief Sandwich Eater</td>
	</tr>
	</tbody>
    </table>
    )
}

export default OrderTable