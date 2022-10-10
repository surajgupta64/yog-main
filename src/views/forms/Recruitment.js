import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import React, { useState } from 'react'
import ApplicationForm from './ApplicationForm'
import StaffForm from './StaffForm'

const Recruitment = () => {
    const [step, setStep] = useState(1)
    return (
        <>
            <CRow className='mb-2 ms-2'>
                <CCard color={step == 1 ? 'primary' : 'success'} style={{ padding: '10px', color: '#ffffff', width: '100px', margin: '3px', cursor: 'pointer' }}
                    onClick={() => setStep(1)}
                >
                    Step-1
                </CCard>
                <CCard color={step == 2 ? 'primary' : 'success'} style={{ padding: '10px', color: '#ffffff', width: '100px', margin: '3px', cursor: 'pointer' }}
                    onClick={() => setStep(2)}
                >
                    Step-2
                </CCard>
            </CRow>
            {step === 1 &&
                <ApplicationForm />
            }
            {step === 2 &&
                <StaffForm />
            }
        </>
    )
}

export default Recruitment
