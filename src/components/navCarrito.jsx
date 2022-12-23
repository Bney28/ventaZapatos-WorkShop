import basurero from '../img/icon-delete.svg'
import IconCart from '../img/icon-cart.svg'



export const NavCarrito = (_data) => {
    const getCarrito = JSON.parse(localStorage.getItem("carrito"))

    const precioTotal = (_num1, _num2) => {

        const operacion = _num1 * _num2
        const total = operacion.toFixed(1)
        return (
            <>
                <span className="car__total" >${total}</span>
            </>
        )
    }


    const delLocalStorage = (_e) => {
        const filtrado = getCarrito.filter((item) => item !== _e)
        localStorage.setItem('carrito', JSON.stringify(filtrado));
    }
   

    return (
        <>
            <div className="carro logos__cart">
                <span className="carro__contenedor"><img src={IconCart} alt="" /></span>
                <div className="carro__articulos">
                    <h4>Cart</h4>
                    <hr/>
                    {
                        Array.from(getCarrito).map(e => {
                            const objeto = e
                            const { cantidad, img, precio, nombre } = e
                            return (
                                <>
                                <div className="car">
                                <img className="car__img" src={img} />
                                <div className="car__info">
                                    <titulo className="car__nombre" >{nombre}</titulo>
                                    <div className='car__costo'>
                                    <span className="car__precio">${precio}</span>
                                    <span className="car__cantidad">x{cantidad}</span>
                                    {precioTotal(cantidad, precio)}
                                    <button className="car__borrar" onClick={()=>delLocalStorage(objeto)} ><img src={basurero}/></button>
                                    </div>
                                </div>
                                </div>
                                </>
                            )
                        }) 
                    }
                    <button className='car__comprar'>Checkout</button>
                </div>
            </div>
        </>
    )
}








