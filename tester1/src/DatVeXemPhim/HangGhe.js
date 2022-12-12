import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import { connect } from 'react-redux'
import { datGheAction } from '../redux/Actions/DatVeAction'

class HangGhe extends Component {
    
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((item, index) => {
            if (this.props.hangGhe.hang === '') {
                return <button className='ghe text-light ml-4 mt-3' style={{ fontWeight: 'bold', width: '35px', fontSize: '19px', background: 'rgba(0,0,0,0)', color: 'white', border: 'none', textAlign: 'center' }} key={index}>
                    {index + 1}
                </button>
            } else {
                let cssGhe = ''
                let disable = false 
                //nếu ghế đã bị người khác đặt sẽ css cho nó và không cho người khác bấm
                if (item.daDat) {
                    cssGhe = 'gheDuocChon'
                    disable = true
                }
                //css cho ghế nếu click
                let indexGhe = this.props.ghe.findIndex((i) => {
                    return i.soGhe === item.soGhe
                })
                //nếu click ghế đang chọn
                if(indexGhe !== -1){
                    cssGhe = 'gheDangChon'
                }
                return <button disabled={disable} onClick={() => {this.props.datGhe(item)}} className={`ghe text-dark ml-4 mt-3 ${cssGhe} `} 
                style={{ fontWeight: 'bold', fontSize: '14px', width: '35px', textAlign: 'center' }} key={index}>
                    {index + 1}
                </button>
            }
        })
    }
    render() {
        return (
            <div className='text-light text-left ml-2 mt-1' style={{ fontSize: '19px' }}>
                <button style={{ background: 'rgba(0,0,0,0)', width: '35px', color: 'white', height: '35px', border: 'none', fontWeight: 'bold' }}>{this.props.hangGhe.hang}</button> {this.renderGhe()}
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        //đặt ghế
        datGhe: (item) => {
            dispatch(datGheAction(item))
        }
    }
}

const mapStateToProps = state => {  //state này là state tổng của ứng dụng chứa các state con (rootReducer)
    return {
        //trả về props mới cho ứng dụng (tự đặt tên)
        ghe: state.datGheReducer.ghe
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)