import { cva } from "../../../../styled-system/css/cva.mjs";


export const rightImageContent = cva({
    base: {
        display: 'flex',
        width: { lg: '90%', xsm: '100%' },
        height: { lg: '90%', xsm: '100%'},
        borderRadius: '20px',
        '& img#desktop-sign_up-image': {
            display: { lg: 'flex', xsm: 'none' },
        },
        '& img#mobile-sign_up-image': {
            display: { lg: 'none', xsm: 'flex' }
        }
    }
});