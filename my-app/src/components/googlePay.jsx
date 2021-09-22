import axios from "axios";
import GooglePayButton from '@google-pay/button-react';
import { Component } from "react";

class GooglePay extends Component {
    state = {
      total : "00"
     };

    

  render() {
    
    return (
<GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678912345678900',
            merchantName: 'Product Store',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: this.state.total,
            currencyCode: 'LKR',
            countryCode: 'SL',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            this.deleteCart();
            return { transactionState: 'SUCCESS'}
          }
        }
        onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            return { }
          }
        }
        existingPaymentMethodRequired='false'
        buttonColor='black'
        buttonType='Buy'
      />

    );
  }
componentDidMount()
{
    const tot = localStorage.getItem("total");
    this.setState({total: tot});
}
async deleteCart()
{
  const id = localStorage.getItem("userId");

  try{
  await axios.delete(`api/carts/${id}`);
  alert("Payment Success...!")
  this.props.history.push('/');
  }catch{
    alert("Somethis is wrong...!")
  }
}
}
export default GooglePay; 