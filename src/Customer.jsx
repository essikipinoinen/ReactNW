import React, { useState } from 'react'
import './App.css'
import CustomerService from './services/Customer'

const Customer = ({ customer, editCustomer, setIsPositive, setMessage, setShowMessage, reload, reloadNow }) => {

    const [showDetails, setShowDetails] = useState(false)
    

    const deleteCustomer = (customer) => {
        let vastaus = window.confirm(`Poistetaanko asiakas ${customer.companyName}?`)
        if (vastaus === true) {

            CustomerService.remove(customer.customerId)
                .then(res => {
                    if (res.status === 200) {
                        setMessage(`Asiakas ${customer.companyName} poistettu`)
                        setIsPositive(true)
                        setShowMessage(true)
                        window.scrollBy(0, -100000)

                        setTimeout(() => {
                            setShowMessage(false)
                        }, 3000) 
                        reloadNow(!reload)
                    }
                }
                )
                .catch(error => {
                    setMessage(error)
                    setIsPositive(false)
                    setShowMessage(true)
                    window.scrollBy(0, -100000)

                    setTimeout(() => {
                        setShowMessage(false)
                    }, 6000)
                })
        }
        else {
            setMessage('Poisto peruttu onnistuneesti')
            setIsPositive(true)
            setShowMessage(true)

            setTimeout(() => {
                setShowMessage(false)
            }, 3000)
        }

    }

    return (
        <div className='customerDiv'>
            <h4 onClick={() => setShowDetails(!showDetails)} style={{ cursor: 'pointer' }}>
                {customer.companyName}
            </h4>

            {showDetails && <div className='customerDetails'>
                <h3>{customer.companyName}</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='thtd'>Contact Person</th>
                            <th className='thtd'>Phone</th>
                            <th className='thtd'>Address</th>
                            <th className='thtd'>City</th>
                            <th className='thtd'>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='thtd'>{customer.contactName}</td>
                            <td className='thtd'>{customer.phone}</td>
                            <td className='thtd'>{customer.address}</td>
                            <td className='thtd'>{customer.city}</td>
                            <td className='thtd'>{customer.country}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="nappi" onClick={() => editCustomer(customer)}>Muokkaa</button>
                <button className="negNappi" onClick={() => deleteCustomer(customer)}>Poista</button>
            </div>}
        </div>
    )
}

export default Customer
