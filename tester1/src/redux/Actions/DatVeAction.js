import { CLICK_BUTTON_DELETE, CLICK_BUTTON_ADD } from "../Type/DatVeType"

export const datGheAction = (ghe) => {
    return {
        type: CLICK_BUTTON_ADD,
        ghe
    }
}

export const huyGheAction = (ghe) => {
    return {
        type: CLICK_BUTTON_DELETE,
        ghe
    }
}
