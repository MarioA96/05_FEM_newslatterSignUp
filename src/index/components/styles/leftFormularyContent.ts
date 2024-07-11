import { cva } from "../../../../styled-system/css/cva.mjs";


const formularyTitle = {
    display: 'flex',
    order: '1',
    maxWidth: 'fit-content',
    paddingTop: '5%',
    fontSize: { lg: '5xl', xsm: '40px' },
    fontFamily: "'roboto', sans-serif",
    fontWeight: '700',
    fontStyle: 'normal',
    paddingBottom: '10px',
    marginTop: { lg: '0', xsm: '-20px'},
    color: '#242843'
}

const formularySubtitle = {
    display: 'flex',
    order: '2',
    fontFamily: "'roboto', sans-serif",
    fontWeight: '400',
    fontSize: { lg: '16px', xsm: '14px'},
    paddingBottom: '20px',
}

const formularyList = {
    display: 'flex',
    order: '3',
    flexDirection: 'column',
    fontFamily: "'roboto', sans-serif",
    fontWeight: '400',
    fontSize: { lg: '16px', xsm: '15px'},
    paddingBottom: '20px',
    '& li': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '10px',
        '& img': {
            paddingRight: '15px',
            maxWidth: '32px',
        }
    }
}

const formularyInput = {
    display: 'flex',
    order: '4',
    flexDirection: 'column',
    '& #email-label': {
        display: 'flex',
        fontFamily: "'roboto', sans-serif",
        fontWeight: '700',
        fontSize: '14px',
        paddingBottom: '10px',
        paddingRight: '130px',
    },
    '& #error-email-label': {
        display: 'none',
        fontFamily: "'roboto', sans-serif",
        fontWeight: '700',
        fontSize: '14px',
        paddingBottom: '10px',
        color: '#ff614f',
    },
    '& input': {
        display: 'flex',
        width: '100%',
        height: '50px',
        borderRadius: '10px',
        border: '1px solid #242843',
        padding: '0 20px',
        fontFamily: "'roboto', sans-serif",
        fontWeight: '400',
        fontSize: '16px',
        marginBottom: '20px',
        '&:focus': {
            outline: 'none',
            border: '1px solid #242843',
        }
    },
    '& button': {
        display: 'flex',
        width: '100%',
        height: '50px',
        backgroundColor: '#232742',
        color: 'white',
        fontWeight: '700',
        fontFamily: "'roboto', sans-serif",
        fontSize: '16px',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: '#5d5f73',
            cursor: 'pointer',
        },
    }
}


export const leftFormularyContent = cva({
    base: {
        display: 'flex',
        flexDirection: 'column',
        width: { lg: '70%', xsm: '85%'},
        height: '90%',
        backgroundColor: '#ffffff',
        '& #formulary-title': {
            ...formularyTitle,
        },
        '& #formulary-subtitle': {
            ...formularySubtitle,
        },
        '& #formulary-list': {
            ...formularyList,
        },
        '& #formulary-inputbox': {
            ...formularyInput,
        }
    },
    sml: {

    }
});
