
import ap2 from './images/aplori.png'
import ap3 from './images/aplori2.png'
import ap4 from './images/aplori3.png'

import danny1 from './images/dannyvet.png'
import danny2 from './images/dannyvet2.png'
import danny3 from './images/dannyvet3.png'
import danny4 from './images/dannyvet4.png'
import danny5 from './images/dannyvet5.png'

import pms from './images/pms.png'
import pms2 from './images/pms2.png'
import pms3 from './images/pms3.png'
import pms4 from './images/pms4.png'

const getImage = (id)=>{
    let res = []
    if(id === 1){
        res = [ap2, ap3, ap4]
    }else if(id === 2){
        res = [danny1, danny2, danny3, danny4, danny5]
    }else if(id === 3){
        res = [pms, pms2, pms3, pms4]
    }
    return res
}

export default getImage