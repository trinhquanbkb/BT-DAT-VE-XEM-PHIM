import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGhe from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BookingTicket extends Component {
    renderHangGhe = () => {
        return danhSachGhe.map((item, index) => {
            return <div key={index}>
                <HangGhe hangGhe={item} />
            </div>
        })
    }

    render() {
        return (
            <div style={{ backgroundImage: "url('./bgmovie.jpg')", height: '900px', width: '100%', backgroundSize: 'cover' }}>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: '900px', width: '100%' }}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8 text-center'>
                                <h1 className='fontExercise' style={{ color: 'yellow' }}>Đặt vé xem phim nè!</h1>
                                <h3 className='fontExercise' style={{ color: 'white' }}>Màn hình</h3>
                                <div className=' d-flex justify-content-center'>
                                    <div className='screen'></div>
                                </div>
                                <div style={{marginLeft: '95px', marginTop: '20px'}}>
                                    {this.renderHangGhe()}
                                </div>
                            </div>
                            <div className='col-4'>
                                <h2 className='fontExercise' style={{ color: 'white' }}>Danh sách ghế bạn chọn</h2>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
