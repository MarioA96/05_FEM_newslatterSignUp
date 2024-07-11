import { cva } from "../../../../styled-system/css/cva.mjs";


export const rightImageBox = cva({
    base: {
        display: 'flex',
        order: { lg: '2', xsm: '1' },
        width: { lg: '45%', xsm: '375px' },
        height: { lg: '100%', xsm: '284px'},
        backgroundColor: 'white',
        borderRightRadius: '30px',
        alignItems: 'center',
        justifyContent: 'center'
    }
});