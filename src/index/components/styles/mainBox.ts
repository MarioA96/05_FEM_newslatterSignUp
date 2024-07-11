import { cva } from "../../../../styled-system/css/cva.mjs";


export const mainBox = cva({
    base: {
        display: 'flex',
        background: 'hsl(0, 0%, 100%)',
        borderRadius: { lg: '30px', xsm: '0px' },
        width: { lg: '60%', xsm: '100%' },
        height: { lg: '70%', xsm: '100%' },
        flexDirection: { lg: 'row', xsm: 'column' },
    }
});