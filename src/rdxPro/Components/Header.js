import { useSelector } from "react-redux";
const  Header=()=>{

    const result=useSelector((state)=>state.cartData);
    console.log("redux datain header",result)

    return (
        <>
        <div className="header">
        <div>
            <h2><span>{result.length}</span></h2>
            {/* <img src="C:\Users\rasmi\Downloads\icons8-shopping-cart-64.png" alt="cart icon" /> */}
        </div>

        </div>
 
        </>
    );
}
export default Header;
