import { CLICK_BUTTON_ADD, CLICK_BUTTON_DELETE } from "../Type/DatVeType"

const stateGhe = {
    ghe: [
    ]
}

//tạo reducer quản lý các state trong bài đăt ghế
const DatGheReducer = (state = stateGhe, action) => {
    switch (action.type) {
        case CLICK_BUTTON_ADD: {
            let array = [...state.ghe]
            let findIndex = array.findIndex((item) => {
                return action.ghe.soGhe === item.soGhe
            })
            console.log(findIndex)
            //nếu click vào chỗ đang chọn rồi
            if (findIndex !== -1) {
                array.splice(findIndex, 1)
            }//nếu click vào chỗ còn trống
            else {
                array.push(action.ghe)
            }
            state.ghe = [...array]
            return { ...state }
        }
        case CLICK_BUTTON_DELETE: {
            let array = [...state.ghe]
            let findIndex = array.findIndex((item) => {
                return action.ghe.soGhe === item.soGhe
            })
            array.splice(findIndex, 1)
            state.ghe = [...array]
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default DatGheReducer
