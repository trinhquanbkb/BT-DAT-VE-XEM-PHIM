import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/Actions/DatVeAction'

class ThongTinDatGhe extends Component {
    danhSachGheDangDat = () => {
        return this.props.ghe.map((item, index) => {
            return <tr style={{ color: 'white', fontSize: '20px', fontWeight: '800' }} key={index}>
                <th style={{width:"40%"}}>{item.soGhe}</th>
                <th style={{width:"35%"}}>{item.gia}</th>
                <th style={{width:"25%"}}><button onClick={() => { this.props.huyGhe(item) }} style={{ background: 'red', fontSize: '18px', height: '32px', width: '33px', textAlign: 'center' }}>X</button></th>
            </tr>
        })
    }
    render() {
        return (
            <div className='fontExercise mt-5' style={{ color: 'white', fontSize: '25px' }}>
                <button className='gheDuocChon'></button> <span>Ghế đã đặt</span><br></br>
                <button className='gheDangChon'></button> <span>Ghế đang chọn</span><br></br>
                <button className='ghe'></button> <span>Ghế được chọn</span><br></br>
                <table className="table mt-5" border="6" color='white'>
                    <thead>
                        <tr style={{ color: 'white', fontSize: '23px', fontWeight: '800' }}>
                            <th style={{width:"40%"}}>Số ghế</th>
                            <th style={{width:"35%"}}>Giá</th>
                            <th style={{width:"25%"}}>Hủy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.danhSachGheDangDat()}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        // hủy ghế
        huyGhe: (item) => {
            dispatch(huyGheAction(item))
        }
    }
}

const mapStateToProps = state => {  //state này là state tổng của ứng dụng chứa các state con (rootReducer)
    return {
        //trả về props mới cho ứng dụng (tự đặt tên)
        ghe: state.datGheReducer.ghe
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe)
