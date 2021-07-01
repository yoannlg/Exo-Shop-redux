import React, {useState} from 'react'
import { connect } from 'react-redux'
import './phoneComponent.css'
import { buyPhone } from '../redux/phone/actionPhone'
import phone from '../images/phone.jpeg'

function PhoneComponent(props) {
  console.log(props)
  const [totalPhone, setTotalPhone]= useState(1)

  let stockPhones = props.phones > 0 ? props.phones : '0';

  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>Disponibilité: 
        <span id="count">{stockPhones}</span>
      </p>
      <div className="buy-container">
        <button onClick={()=>props.buyPhone(totalPhone)} className="buy">Acheter</button>
        <input className="number-buy" type="text" value={totalPhone} onChange={e=>setTotalPhone(e.target.value)}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    phones: state.phone.phones
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: totalPhone => dispatch(buyPhone(totalPhone))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent)