import { cva } from "../../../../styled-system/css/cva.mjs";


export const leftFormularyBox = cva({
    base: {
        display: 'flex',
        order: { lg: '1', xsm: '2' },
        width: { lg: '55%', xsm: '100%' },
        height: '100%',
        backgroundColor: 'hsl(0, 0%, 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftRadius: '30px',
    }
});