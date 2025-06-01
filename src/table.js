import "./Table.css"
import bird from "./assets/images/bird1.jpg"

 export const Table =() => {
    return(
        <div>
           <table>
        <tr>
            <td colspan="3" rowspan="2">
                <img src={bird} alt="birdimg"/>
                </td>
             {/* <td>2</td>
            <td>3</td>  */}
            <td colspan="2"><img src={bird} alt="birdimg"/></td>
             {/* <td>5</td>  */}
        </tr>

        <tr>
             {/* <td>1a</td>
            <td>2a</td> 
            <td>3a</td> */}
            <td colspan="2">
                <img src={bird} alt="birdimg"/>
            </td>
             {/* <td>5a</td> */}
        </tr>

        
        <tr>
            <td colspan="2" rowspan="2">
                <img src={bird} alt="birdimg"/>
            </td>
             {/* <td>2b</td>  */}
            <td colspan="2">
                <img src={bird} alt="birdimg"/>
            </td>
           {/* <td>4b</td>
            <td>5b</td>  */}
        </tr>


        
        <tr>
             {/* <td colspan="2">1c</td> 
             <td>2c</td>  */}
            <td colspan="3"></td>
             {/* <td>4c</td>
            <td>5c</td>  */}
        </tr>

    



      
    </table>
        </div>
    )
 }
// export default Table